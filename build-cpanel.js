
#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando build para cPanel...');

try {
  // 1. Limpar diretórios de build anteriores
  console.log('📁 Limpando diretórios...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  if (fs.existsSync('client/dist')) {
    fs.rmSync('client/dist', { recursive: true, force: true });
  }

  // 2. Build do cliente (frontend)
  console.log('🎨 Fazendo build do frontend...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. Criar arquivo de inicialização para cPanel
  console.log('📝 Criando arquivo de inicialização...');
  const startupContent = `#!/usr/bin/env node

// Arquivo de inicialização para cPanel
process.env.NODE_ENV = 'production';

import('./dist/index.js').catch(console.error);
`;

  fs.writeFileSync('app.js', startupContent);

  // 4. Criar arquivo .htaccess para roteamento SPA
  console.log('⚙️ Criando .htaccess...');
  const htaccessContent = `RewriteEngine On

# Handle Angular and React Routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(?!api/).*$ /index.html [QSA,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Cache static assets
<FilesMatch "\\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
</FilesMatch>
`;

  fs.writeFileSync('dist/.htaccess', htaccessContent);

  // 5. Criar package.json simplificado para produção
  console.log('📦 Criando package.json para produção...');
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const prodPackageJson = {
    name: packageJson.name,
    version: packageJson.version,
    type: "module",
    main: "app.js",
    scripts: {
      start: "node app.js"
    },
    dependencies: {
      express: packageJson.dependencies.express,
      nodemailer: packageJson.dependencies.nodemailer,
    }
  };

  fs.writeFileSync('dist/package.json', JSON.stringify(prodPackageJson, null, 2));

  // 6. Copiar arquivos necessários
  console.log('📋 Copiando arquivos necessários...');
  fs.copyFileSync('app.js', 'dist/app.js');
  
  if (fs.existsSync('.env')) {
    fs.copyFileSync('.env', 'dist/.env');
  }

  console.log('✅ Build concluído com sucesso!');
  console.log('📁 Arquivos prontos para upload estão na pasta "dist"');
  console.log('');
  console.log('🎯 Próximos passos para cPanel:');
  console.log('1. Faça upload de todos os arquivos da pasta "dist" para o diretório public_html');
  console.log('2. Configure as variáveis de ambiente no cPanel');
  console.log('3. Configure o Node.js app no cPanel apontando para app.js');
  console.log('4. Configure as credenciais SMTP');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}
`;
