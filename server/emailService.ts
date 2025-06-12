
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  // Configuração do transporter SMTP
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // Substitua pelo seu servidor SMTP
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER || 'r.oconsultoriaestrategica@gmail.com', // seu e-mail
      pass: process.env.SMTP_PASS || 'sua-senha-aqui', // sua senha ou app password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Configuração do e-mail
  const mailOptions = {
    from: `"${data.name}" <${process.env.SMTP_USER || 'r.oconsultoriaestrategica@gmail.com'}>`,
    to: process.env.CONTACT_EMAIL || 'r.oconsultoriaestrategica@gmail.com',
    subject: `Novo contato do site - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 30px;">Novo Contato do Site</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #555; margin-bottom: 15px;">Dados do Contato:</h3>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #333;">Nome:</strong> ${data.name}
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #333;">E-mail:</strong> ${data.email}
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #333;">Telefone:</strong> ${data.phone}
          </div>
        </div>
        
        ${data.message ? `
        <div style="background-color: #f0f8ff; padding: 20px; border-radius: 5px; border-left: 4px solid #007bff;">
          <h3 style="color: #555; margin-bottom: 15px;">Mensagem:</h3>
          <p style="color: #333; line-height: 1.6; margin: 0;">${data.message}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
          E-mail enviado automaticamente pelo formulário de contato do site R&O Consultoria Estratégica
        </div>
      </div>
    `,
    text: `
      Novo Contato do Site
      
      Nome: ${data.name}
      E-mail: ${data.email}
      Telefone: ${data.phone}
      ${data.message ? `\nMensagem:\n${data.message}` : ''}
      
      ---
      E-mail enviado automaticamente pelo formulário de contato do site R&O Consultoria Estratégica
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw new Error('Falha ao enviar e-mail');
  }
};

// Função para testar a conexão SMTP
export const testSMTPConnection = async () => {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'r.oconsultoriaestrategica@gmail.com',
      pass: process.env.SMTP_PASS || 'sua-senha-aqui',
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    await transporter.verify();
    console.log('Conexão SMTP verificada com sucesso');
    return true;
  } catch (error) {
    console.error('Erro na conexão SMTP:', error);
    return false;
  }
};
