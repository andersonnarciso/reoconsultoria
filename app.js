#!/usr/bin/env node

// Arquivo de inicialização para cPanel
process.env.NODE_ENV = 'production';

import('./dist/index.js').catch(console.error);
