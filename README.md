# 🗺️ Pokédex — A Jornada Começa Aqui

🔗 [Acesse o projeto online](https://devseravali.github.io/pokedex)

Uma aplicação desenvolvida como **teste técnico do módulo React Avançado** no programa **DevQuest**, da escola **Dev em Dobro**. O objetivo foi construir uma **SPA (Single Page Application) fluida e escalável**, demonstrando domínio em **componentização, hooks, Context API, testes automatizados e boas práticas de arquitetura front-end**.

---
## 📚 Sumário
* [🎯 Propósito da Aplicação](#🎯-propósito-da-aplicação)
* [⚙️ Funcionalidades](#⚙️-funcionalidades)
* [🧩 Estrutura do Projeto](#🧩-estrutura-do-projeto)
* [🧠 Decisões Técnicas](#🧠-decisões-técnicas)
* [🧪 Testes e Cobertura](#🧪-testes-e-cobertura)
* [🧰 Ferramentas e Justificativas](#🧰-ferramentas-e-justificativas)
* [🚀 Como Rodar o Projeto](#🚀-como-rodar-o-projeto)
* [🌐 Preview do Projeto](#🌐-preview-do-projeto)
* [🧩 Desafios e Aprendizados](#🧩-desafios-e-aprendizados)
* [💡 Reflexão Técnica](#💡-reflexão-técnica)
* [👩‍💻 Autora](#👩‍💻-autora)

---
## 🎯 Propósito da Aplicação

A **Pokédex** foi desenvolvida para **listar, explorar e exibir detalhes de Pokémons da primeira geração**, consumindo dados em tempo real da **PokéAPI**.

O propósito central do desafio é aplicar os conhecimentos do **React Avançado** em um projeto prático, reforçando o domínio em:
* Componentização e reuso de código
* Gerenciamento de estado com Context API
* Testes unitários e integração
* Estilização dinâmica com temas
* Responsividade e acessibilidade

---
## ⚙️ Funcionalidades

*  **Listagem de Pokémons** com imagem, nome e tipo
*  **Busca interativa** em tempo real
*  **Visualização detalhada** com estatísticas e habilidades
*  **Favoritar e desfavoritar Pokémon**, persistindo no LocalStorage
*  **Tema claro/escuro** com Context API
*  **Design responsivo** (mobile-first)
*  **Feedbacks de carregamento e erro**
*  **SPA fluida**, sem reloads de página

---
## 🧩 Estrutura do Projeto

```bash
pokedex/
├── babel.config.cjs
├── eslint.config.js
├── index.html
├── jest.config.cjs
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── imagens e favicon
├── src/
│   ├── App.tsx / main.tsx
│   ├── assets/ → fontes e imagens
│   ├── components/ → componentes reutilizáveis
│   ├── context/ → temas e favoritos
│   ├── hooks/ → hooks customizados
│   ├── pages/ → páginas principais (Home, Detalhes)
│   ├── provider/ → providers de contexto global
│   ├── services/ → integração com PokéAPI
│   ├── styles/ → estilos globais e temas
│   ├── test/ → testes unitários e de integração
│   ├── types/ → tipos TypeScript personalizados
│   └── utils/ → funções auxiliares
└── __mocks__/ → mocks de arquivos para Jest
```
 ---
 ## 🧠 Decisões Técnicas
Durante o planejamento e execução, as decisões seguiram princípios de clareza, escalabilidade e manutenibilidade.

* 🧩 Arquitetura Modular: Separação em domínios (components, hooks, context, services) para favorecer reuso e leitura clara.

* ⚡ SPA Fluida: Toda navegação é feita dentro da aplicação, sem recarregar a página, garantindo uma experiência contínua e imersiva.

* 🌍 Context API: Gerencia o tema e os favoritos de forma global, sem necessidade de bibliotecas externas de gerenciamento de estado.

* 🎨 Estilos Temáticos: Temas claro e escuro implementados com Styled Components, usando variáveis dinâmicas e contexto global.

* 💬 TypeScript: Adoção para garantir segurança de tipos e reduzir bugs durante o desenvolvimento.

---
## 🧪 Testes e Cobertura
Os testes foram realizados com Jest e React Testing Library, garantindo a confiabilidade da aplicação.

- Testes Unitários: Verificam o comportamento de componentes isolados (cards, botões, modais).

- Testes de Integração: Asseguram a interação correta entre componentes e contextos.

- Mocks Personalizados: Criados no diretório __mocks__ para simular requisições à PokéAPI.

- Relatório de Cobertura: Gerado automaticamente com npm test -- --coverage, exibindo a porcentagem de linhas, funções e branches testadas.

Esses testes asseguram que a SPA mantenha seu comportamento mesmo após refatorações, fortalecendo a confiabilidade do código.

---
## 🧰 Ferramentas e Justificativas

| Categoria   | Ferramenta                | Justificativa                                              |
|-------------|--------------------------|------------------------------------------------------------|
| Build       | Vite                     | Build rápido e otimizado para projetos React modernos.      |
| Tipagem     | TypeScript               | Evita erros de execução e aumenta a escalabilidade do código.|
| Testes      | Jest + React Testing Library | Criação de testes unitários e integração eficientes.    |
| Estilos     | Styled Components        | Permite criar componentes estilizados e dinâmicos com temas.|
| Qualidade   | ESLint + Babel           | Mantém o padrão de código consistente e legível.            |

---
## 🚀 Como Rodar o Projeto

### 📦 Passo a passo para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/devseravali/pokedex.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd pokedex
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Abra o navegador:**
   Acesse `http://localhost:5173` para visualizar o app.

---
## 🌐 Preview do Projeto

Veja abaixo como a Pokédex se adapta em diferentes dispositivos:

### Mobile
![Preview Mobile](./public/previews/preview-mobile.gif)

### Tablet
![Preview Tablet](./public/previews/preview-tablet.gif)

### Notebook/Desktop
![Preview Notebook](./public/previews/preview-notebook.gif)

---
## 🧩 Desafios e Aprendizados

* **Gerenciamento de Estado**: Aprimoramento no uso da Context API para estados globais.
* **Estilização com Temas**: Desafio de implementar e alternar temas dinâmicamente.
* **Testes Automatizados**: Criação de uma suíte de testes abrangente e eficaz.

## 🧩 Aprendizados

- Navegação fluida entre componentes
- Integração com PokéAPI usando hooks assíncronos
- Prática de TDD e testes automatizados
- Organização modular e separação de responsabilidades
- Importância dos testes para manutenção

### Relato sobre desafios
Durante o desenvolvimento, enfrentei momentos de bloqueio e dificuldades técnicas. Relatei esses desafios, busquei ajuda e revisei minha abordagem para superar os bloqueios. Esse processo foi importante para meu aprendizado, mostrando a importância de pedir feedback, pesquisar soluções e persistir até encontrar o melhor caminho.

### Auxílio da IA
Durante o desenvolvimento, contei com o suporte de uma IA (GitHub Copilot) para tirar dúvidas, automatizar tarefas, revisar código, sugerir soluções e destravar pontos críticos. O uso da IA foi fundamental para acelerar o processo, garantir boas práticas e aprender novas abordagens técnicas. Mesmo com o auxílio, busquei entender cada sugestão, adaptar ao contexto do projeto e validar as decisões técnicas, tornando o aprendizado mais efetivo e consciente.

---
## 💡 Reflexão Técnica

A construção da Pokédex foi fundamental para consolidar conhecimentos em React, TypeScript e testes. A integração da Context API para gerenciamento de estado e temas se mostrou uma solução eficiente e escalável.

Os testes automatizados garantiram a integridade da aplicação durante todo o desenvolvimento, permitindo refatorações com segurança.

Além disso, o projeto proporcionou uma visão prática sobre arquitetura modular, separação de responsabilidades e uso de ferramentas modernas do ecossistema front-end. Aprendi a importância de documentar decisões técnicas, manter o código limpo e priorizar a experiência do usuário.

O contato com desafios reais e a busca por soluções criativas fortaleceram minha autonomia e capacidade de tomada de decisão técnica, essenciais para o crescimento como desenvolvedora.

---
## 🔗 API Utilizada

Este projeto consome dados da [PokéAPI](https://pokeapi.co/), uma API pública e gratuita para informações sobre Pokémon.

---
## 👩‍💻 Autora

[Aline Seravali](https://github.com/devseravali) — Desenvolvedora Front-end apaixonada por React, TypeScript e boas práticas. Focada em evolução contínua, aprendizado colaborativo e compartilhamento de conhecimento na comunidade DevQuest. Em busca de desafios para crescer como profissional e contribuir para projetos inovadores.
---
