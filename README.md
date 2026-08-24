# API Connect – Gerenciamento de Usuários (MVP)

A **API Connect** é uma solução RESTful desenvolvida para atuar como o back-end de uma plataforma de gerenciamento de usuários em um ambiente de startup. O objetivo principal do projeto é fornecer um serviço confiável, escalável e padronizado para operações de cadastro, consulta, atualização e remoção de registros.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (v22+)
* **Framework Web:** Express.js
* **Linguagem:** JavaScript (ES6+)
* **Dependência de Desenvolvimento:** Nodemon

---

## 📁 Estrutura do Projeto

```text
api-connect/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── userController.js   # Lógica de negócio e validações
│   ├── data/
│   │   └── usersData.js        # Camada de persistência em memória
│   ├── routes/
│   │   └── userRoutes.js       # Definição de endpoints e verbos HTTP
│   └── app.js                  # Ponto de entrada e middlewares
├── .gitignore
├── package.json
└── README.md
