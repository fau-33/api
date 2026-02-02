# 🌟 Mensagem do Dia - API & Frontend

Este é um projeto full-stack desenvolvido como parte de um estudo sobre **Node.js**, **Express** e **Frontend Moderno**. O objetivo é fornecer uma interface elegante e inspiradora que consome uma API para exibir uma frase motivacional diferente para cada dia do mês.

## 🚀 Demonstração

- **Link do Projeto (Live):** [https://api-lac.vercel.app/index.html](https://api-lac.vercel.app/index.html)
- **Repositório GitHub:** [https://github.com/fau-33/api](https://github.com/fau-33/api)

## ✨ Funcionalidades

- **Fluxo de Duas Páginas:** Interface intuitiva com separação entre a tela de boas-vindas e a exibição da mensagem.
- **API Própria:** Backend em Node.js que gerencia e entrega as mensagens baseadas no dia atual.
- **Design Premium:**
  - Estética **Glassmorphism** (efeito de vidro fosco).
  - Gradientes vibrantes e tipografia moderna.
  - Animações suaves de entrada e carregamento (Loaders).
- **Responsividade Total:** Adaptado para dispositivos móveis, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

### Backend:

- **Node.js**: Ambiente de execução.
- **Express**: Framework para criação da API e servidor de arquivos estáticos.
- **JavaScript (CommonJS)**: Lógica do servidor.

### Frontend:

- **HTML5**: Estrutura semântica.
- **Vanilla CSS**: Estilização personalizada com variáveis e animações.
- **JavaScript (ES6+)**: Consumo de API (Fetch API) e manipulação do DOM.
- **Google Fonts**: Tipografia _Outfit_.

## 📂 Estrutura do Projeto

```text
├── index.js            # Servidor Express e roteamento
├── mensagemDoDia.js    # Lógica de seleção da frase
├── dados.js           # Base de dados das mensagens
├── public/             # Arquivos do frontend
│   ├── index.html      # Home do projeto
│   ├── mensagem.html   # Tela de exibição da frase
│   ├── style.css       # Estilos premium
│   └── script.js       # Lógica do frontend
└── package.json        # Dependências e scripts
```

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/fau-33/api.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node index.js
   ```
4. Acesse no navegador: `http://localhost:8080`

---

Desenvolvido por **Flávio Félix** 💡
