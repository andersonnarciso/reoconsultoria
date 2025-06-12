
# 🚀 Deploy no cPanel - R&O Consultoria Estratégica

Este guia contém as instruções para fazer o deploy da aplicação no cPanel.

## 📋 Pré-requisitos

- Acesso ao cPanel com suporte a Node.js
- Conta de e-mail configurada para SMTP
- FTP/File Manager do cPanel

## 🛠️ Preparação

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
# Configurações SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=r.oconsultoriaestrategica@gmail.com
SMTP_PASS=sua-senha-ou-app-password-aqui

# E-mail para receber contatos
CONTACT_EMAIL=r.oconsultoriaestrategica@gmail.com

# Ambiente
NODE_ENV=production
```

### 2. Para Gmail (recomendado)

1. Ative a autenticação de 2 fatores
2. Crie uma "Senha de app" específica
3. Use essa senha no campo `SMTP_PASS`

## 🔨 Build da Aplicação

Execute o comando de build:

```bash
npm run build
```

Ou use o script personalizado:

```bash
node build-cpanel.js
```

## 📤 Upload para cPanel

### Método 1: File Manager

1. Acesse o File Manager no cPanel
2. Navegue até `public_html`
3. Faça upload de todos os arquivos da pasta `dist`
4. Extraia se necessário

### Método 2: FTP

1. Conecte via FTP ao seu servidor
2. Navegue até o diretório `public_html`
3. Faça upload de todos os arquivos da pasta `dist`

## ⚙️ Configuração no cPanel

### 1. Node.js App

1. Vá para "Node.js Apps" no cPanel
2. Clique em "Create Application"
3. Configure:
   - **Node.js version**: 18.x ou superior
   - **Application mode**: Production
   - **Application root**: `public_html` (ou o diretório onde fez upload)
   - **Application URL**: seu domínio
   - **Application startup file**: `app.js`

### 2. Variáveis de Ambiente

Na seção "Environment Variables" da aplicação Node.js, adicione:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=r.oconsultoriaestrategica@gmail.com
SMTP_PASS=sua-senha-de-app
CONTACT_EMAIL=r.oconsultoriaestrategica@gmail.com
NODE_ENV=production
```

### 3. Dependências

Execute no terminal do cPanel ou via SSH:

```bash
cd public_html
npm install
```

## 🔧 Configurações Adicionais

### SSL/HTTPS

1. Ative o SSL/TLS no cPanel
2. Force redirecionamento HTTPS

### .htaccess

O arquivo `.htaccess` já está incluído no build e configura:
- Roteamento SPA
- Headers de segurança
- Cache de assets estáticos

## 🧪 Teste da Aplicação

### 1. Acesse o site

Visite seu domínio e verifique se a página carrega corretamente.

### 2. Teste o formulário

1. Preencha o formulário de contato
2. Verifique se o e-mail é recebido
3. Verifique os logs no cPanel

### 3. Teste da API

Acesse `seudominio.com/api/status` para verificar se a API está funcionando.

## 🐛 Troubleshooting

### Problema: Formulário não envia

1. Verifique as variáveis de ambiente
2. Teste as credenciais SMTP
3. Verifique os logs do Node.js no cPanel

### Problema: 404 em rotas

1. Verifique se o arquivo `.htaccess` está presente
2. Confirme que o mod_rewrite está ativo

### Problema: CSS/JS não carregam

1. Verifique os paths dos arquivos
2. Confirme que os arquivos foram enviados corretamente

## 📧 Configuração SMTP Detalhada

### Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=senha-de-app-de-16-digitos
```

### Outlook/Hotmail

```env
SMTP_HOST=smtp.live.com
SMTP_PORT=587
SMTP_USER=seu-email@outlook.com
SMTP_PASS=sua-senha
```

### Provedor de hospedagem

```env
SMTP_HOST=mail.seudominio.com
SMTP_PORT=587
SMTP_USER=contato@seudominio.com
SMTP_PASS=senha-do-email
```

## 🔄 Atualizações

Para atualizar a aplicação:

1. Faça as alterações no código
2. Execute `npm run build`
3. Faça upload dos novos arquivos
4. Reinicie a aplicação Node.js no cPanel

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do Node.js no cPanel
2. Teste as configurações SMTP
3. Confirme que todas as dependências estão instaladas

---

**Última atualização**: $(date)
**Versão**: 1.0.0
