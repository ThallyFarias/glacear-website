# 🍦 Glacear Artesanal

Bem-vindo ao repositório da **Glacear**, uma landing page desenvolvida para uma marca de sorvetes artesanais premium. O projeto foi projetado com foco em alta gastronomia, textura, minimalismo e uma estética luxuosa para maximizar a conversão.

## 🎨 Design & Estética
A interface foi construída para evocar uma experiência sensorial tátil. Destaques do design system:
- **Cores:** Creme de Baunilha (`#FFF8E1`), Cobre/Ouro Fosco (`#B08557`) e Azul Frost Escuro (`#2A4C60`).
- **Tipografia:** `Playfair Display` (elegância e herança artesanal) e `Montserrat` (modernidade e clareza funcional).
- **Textura:** Aplicação de SVG Noise (ruído sutil) e gradientes que emulam texturas de cerâmica crua e linho.
- **Layout:** Estrutura expansiva "Split Hero", transições em Glassmorphism, animações de scroll ativadas via `IntersectionObserver` e interações de hover imersivas.

## 💻 Tecnologias Utilizadas
- **HTML5 Semântico:** Estruturação limpa e acessível.
- **Vanilla CSS3:** Maior controle de propriedades, variáveis CSS (`:root`), Flexbox e CSS Grid. Nenhuma biblioteca externa para garantir performance extrema.
- **JavaScript Vanilla:** Lógica para smooth scroll, animações de revelação na rolagem da página e efeito parallax.
- **Vite:** Ferramenta de build moderna e ultrarrápida, escolhida para facilitar o deploy e a minificação do código para produção.

## 🚀 Como Rodar o Projeto Localmente

1. **Instale as dependências:**
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Navegue até a pasta do projeto no terminal e rode:
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O Vite abrirá um servidor local com "Hot Module Replacement" (geralmente em `http://localhost:5173`).

## 📦 Como Fazer o Build para Produção

Para gerar a versão otimizada, comprimida e pronta para produção do site:
```bash
npm run build
```
O Vite irá empacotar tudo (minificando HTML, CSS e JS, além de otimizar os assets) dentro de uma nova pasta chamada `dist/`.

## 🌐 Deploy na Vercel ou Netlify

Este projeto foi desenhado para ser publicado de forma "Plug-and-Play" na Vercel ou Netlify.

- **Via GitHub:** Suba o projeto para o seu GitHub, crie um novo projeto na Vercel/Netlify, importe o repositório e deixe a plataforma fazer o resto (o comando padrão `npm run build` e o diretório `dist` serão detectados automaticamente).
- **Via CLI:** Você também pode rodar o comando `vercel` diretamente no seu terminal na raiz do projeto.

---
*Criado com dedicação para a experiência premium de Glacear.*
