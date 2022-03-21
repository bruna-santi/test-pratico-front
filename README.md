# Teste Prático Linear Sistemas

Construção de uma aplicação front-end usando ReactJS que apresenta:\
- Tela de listagem de usuários
- Modal com detalhes de um usuário
- Modal para deletar um usuário
- Modal de criação de um usuário
Todos os dados foram consumidos da [API](https://jsonplaceholder.typicode.com).

## Responsividade

A aplicação possui responsividade para diferentes tamanhos de telas desktop e mobile.\
É possível testar a responsividade utilizando a ferramenta de desenvolvedor dos navegadores (apertando a tecla `F12`).

## Tecnologias utilizadas

ReactJS\
JavaScript\
TypeScript\
Axios\
ContextAPI\ 
Material UI<br>
Styled Components

### Rodando o projeto localmente

Clone o projeto com o comando `git clone`;\
Para instalar as dependências utilize `yarn install` ou `npm install`;\
Inicialize a aplicação com `yarn dev`;

### Features

Ao clicar em cada `usuário` da tabela abre-se um modal com detalhes desse usuário.\
Ao clicar no botão `Excluir` abre-se um modal para `confirmar` ou `cancelar` a exclusão.\
Ao clicar no botão `Adicionar novo` abre-se um modal com os campos `Nome`, `Email`, `Telefone` e `Site`, todos campos obrigatórios, para incluir novo usuário na tabela.  
