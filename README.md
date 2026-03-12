# CodeLeap Network

Desafio técnico desenvolvido como parte do processo seletivo da CodeLeap. Trata-se de uma aplicação "single-page" (SPA) que simula uma rede social simplificada, permitindo aos usuários compartilhar pensamentos, além de editar e excluir suas próprias postagens.

## 📋 Funcionalidades

A aplicação possui duas telas principais:

1.  **Tela de Login (Signup)**
    *   O usuário insere seu nome de usuário (username) para entrar na plataforma.
    *   O botão "ENTER" só é habilitado quando um nome é preenchido.
    *   O estado do nome de usuário é preservado durante a sessão.

2.  **Feed de Postagens (Main Screen)**
    *   **Visualização**: Lista todas as postagens retornadas pela API.
    *   **Criação**: Permite criar novos posts com Título e Conteúdo.
    *   **Edição**: Usuários podem editar apenas os posts criados por eles mesmos (validação via username). A edição é feita através de um modal.
    *   **Exclusão**: Usuários podem excluir seus próprios posts, com um modal de confirmação para evitar cliques acidentais.

## 🚀 Tecnologias Utilizadas

*   **[React](https://react.dev/)** (v19) - Biblioteca JavaScript para interface de usuário.
*   **[Vite](https://vitejs.dev/)** - Build tool rápida para desenvolvimento frontend.
*   **CSS3** - Estilização da aplicação.
*   **Fetch API** - Para consumo dos endpoints da API REST.

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
*   npm (gerenciador de pacotes padrão do Node)

## 📦 Como rodar o projeto

1.  **Clone o repositório** (se aplicável) ou navegue até a pasta do projeto:
    ```bash
    cd codeLeap_test
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação**:
    Abra seu navegador e acesse o endereço indicado no terminal (geralmente `http://localhost:5173`).

## 📂 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── modal/           # Modais da aplicação
│   │   ├── delete/      # Modal de confirmação de exclusão
│   │   └── edit/        # Modal de edição de post
│   ├── post/            # Componente principal do Feed
│   └── svg/             # Ícones SVG (Edit, Delete)
├── App.jsx              # Componente raiz e gerenciamento de rotas simples
├── App.css              # Estilos globais do App
├── main.jsx             # Ponto de entrada da aplicação React
└── ...
```

## 🔗 API

O projeto consome a API pública de testes da CodeLeap:
*   **Base URL**: `https://dev.codeleap.co.uk/careers/`
*   **Métodos suportados**: `GET`, `POST`, `PATCH`, `DELETE`

---

Desenvolvido por **Ramon Eduardo** 🚀
