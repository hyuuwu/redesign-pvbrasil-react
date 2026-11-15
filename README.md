# PVBR - Frontend
Website feito para a empresa PV Brasil, criado em React, Tailwind CSS e Vite.

## Comandos
- `npm install` — instala as dependências
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção (`dist/`)
- `npm run lint` — ESLint

## Páginas
| Rota | Página |
| --- | --- |
| `/` | Início (hero, vídeo da loja, parceiros, avaliações, CTA atacado) |
| `/quem-somos` | Quem Somos (missão, pilares, trajetória) |
| `/localizacao` | Localização (mapa e horários) |
| `/parceiros` | Parceiros |
| `/atacado` | Atacado (canal B2B, passo a passo, FAQ) |
| `/contato` | Contato (formulário que abre o WhatsApp do setor certo) |

Telefones, e-mail, endereço e horários ficam em `src/data/contact.js`; os links do menu e do rodapé, em `src/components/navLinks.js`.

## O que ainda falta
- Confirmar com a PV Brasil os textos da trajetória em `src/pages/About.jsx`
- Catálogo de produtos (`/data/catalog.json` citado no CODEX.md) — precisa dos dados reais (foto, nome, SKU; sem preços)
- Página de Serviços / Projetos, se ainda fizer sentido
- Links de redes sociais (Instagram etc.) no rodapé
- Configurar o servidor de produção para redirecionar todas as rotas para `index.html` (SPA)
