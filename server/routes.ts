import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, testSMTPConnection } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Rota para envio do formulário de contato
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validação básica dos dados
      if (!name || !email || !phone) {
        return res.status(400).json({ 
          success: false, 
          message: 'Nome, e-mail e telefone são obrigatórios.' 
        });
      }

      // Validação de e-mail básica
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'E-mail inválido.' 
        });
      }

      // Enviar e-mail
      const result = await sendContactEmail({ name, email, phone, message });

      res.status(200).json({ 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        messageId: result.messageId
      });

    } catch (error) {
      console.error('Erro ao processar contato:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Erro interno do servidor. Tente novamente mais tarde.' 
      });
    }
  });

  // Rota para testar conexão SMTP (opcional, para debug)
  app.get('/api/test-smtp', async (req, res) => {
    try {
      const isConnected = await testSMTPConnection();
      res.json({ 
        success: isConnected, 
        message: isConnected ? 'Conexão SMTP OK' : 'Falha na conexão SMTP' 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: 'Erro ao testar conexão SMTP' 
      });
    }
  });

  // Rota de status da API
  app.get('/api/status', (req, res) => {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
