import nodemailer from 'nodemailer';
import 'dotenv/config'; // Carrega as variáveis de ambiente do .env

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Configuração do transporter SMTP
function createSMTPTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.reoconsultoria.com.br',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, // false para porta 587 (TLS)
    auth: {
      user: process.env.SMTP_USER || 'smtp@reoconsultoria.com.br',
      pass: process.env.SMTP_PASS || '', // Senha do .env
    },
    tls: {
      rejectUnauthorized: false, // Pode ser removido se o certificado for confiável
    },
  });
}

export async function sendContactEmail(data: ContactData) {
  const transporter = createSMTPTransporter();

  const mailOptions = {
    from: process.env.SMTP_USER || 'smtp@reoconsultoria.com.br',
    to: process.env.CONTACT_EMAIL || 'r.oconsultoriaestrategica@gmail.com',
    subject: `Nova mensagem de contato - ${data.name} | ${process.env.COMPANY_NAME || 'R&O Consultoria Estratégica'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%); color: white; padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">${process.env.COMPANY_NAME || 'R&O Consultoria Estratégica'}</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nova Mensagem de Contato</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 15px 15px; border: 1px solid #e9ecef;">
          <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c5530; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #4a7c59; padding-bottom: 10px;">
              📋 Informações do Cliente
            </h2>
            <div style="display: grid; gap: 15px;">
              <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4a7c59;">
                <strong style="color: #2c5530;">Nome:</strong> <span style="color: #333;">${data.name}</span>
              </div>
              <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4a7c59;">
                <strong style="color: #2c5530;">Email:</strong> <span style="color: #333;">${data.email}</span>
              </div>
              <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4a7c59;">
                <strong style="color: #2c5530;">Telefone:</strong> <span style="color: #333;">${data.phone}</span>
              </div>
            </div>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c5530; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #4a7c59; padding-bottom: 10px;">
              💬 Mensagem
            </h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #4a7c59; line-height: 1.6; color: #333;">
              ${data.message || 'Nenhuma mensagem adicional fornecida.'}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%); border-radius: 10px; color: white;">
            <h3 style="margin: 0 0 10px 0;">🎯 Próximos Passos</h3>
            <p style="margin: 0; opacity: 0.9;">Entre em contato com este cliente o mais breve possível para agendar a análise gratuita da metodologia R&O 360.</p>
            <p style="margin-top: 10px;"><a href="${process.env.SITE_URL || 'https://reoconsultoria.com.br'}" style="color: #fff; text-decoration: underline;">Visite nosso site</a></p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; color: #6c757d; font-size: 14px;">
          <p style="margin: 0;">📧 Mensagem enviada através do formulário de contato do site</p>
          <p style="margin: 5px 0 0 0;">🕐 ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

export async function testSMTPConnection(): Promise<boolean> {
  try {
    const transporter = createSMTPTransporter();
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Erro na conexão SMTP:', error);
    return false;
  }
}