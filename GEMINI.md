# GEMINI.md - Rules and Context for Google Antigravity / Gemini

## 📋 Project Context
- **Name**: PV Brasil Importação - Site Instutucional & Catálogo de Produtos
- **Stack**: React 19 + Vite 8 + React Router 7 + TailwindCSS 3 (Vanilla CSS + custom tokens)

---

## 🎯 Directives & Core Rules

### 1. Regras de Exibição do Catálogo
- **SEM PREÇOS**: Este site é um catálogo institucional e atacadista. É **ESTRITAMENTE PROIBIDO** exibir preços de produtos.
- **Campos Permitidos**: Cada card de produto deve exibir **SOMENTE**:
  1. **Foto Real** (em container limpo com `object-contain` sem distorção).
  2. **Nome do Produto**.
  3. **Código SKU** (badge estilizado).

### 2. Design & Estética
- **Tema Cyber-Industrial Dark**:
  - Fundo principal: `#0A192F` (`deep-navy`)
  - Containers e Cards: `#112240` (`surface-dark`)
  - Destaques e Accents: `#00D8FF` (`electric-cyan`)
- **Estilo**: Usar glassmorphism, micro-animações, hover effects e tipografia moderna.

### 3. Fonte de Dados
- O catálogo de produtos é carregado diretamente de `/data/catalog.json` para renderização em memória rápida, sem dependência de banco de dados em tempo de execução.

---

## 🛠️ Comandos do Projeto
- `npm run dev`: Inicia o servidor de desenvolvimento Vite
- `npm run build`: Executa o build de produção
- `npm run lint`: Executa a verificação do ESLint
