# Back-end Features :rocket:

---
[[início](../README.md)]

O serviço de *back-end* deste projeto provê uma singela *api-rest* desenvolvida com **Node.js** aliado ao *framework* **Express** e o banco de dados relacional **MySql**. As principais rotas estão descritas na documentação abaixo.

<br />
<br />

## /users :boy: :girl:

| Método Http | Rota          | Detalhes         | Descrição     |
| :---:       | :---          | :---:            | :---          |
| *GET*       | `/`           | [:mag_right:]()  | Retorna uma mensagem informando data/hora formado a partir de uma requisição ao banco de dados.|
| *GET*       | `/users`      | [:mag_right:]()  | Retorna a lista com todos os usuários cadastrados. |
| *GET*       | `/users/{id}` | [:mag_right:]()  | Retorna um objeto do tipo "usuário" apartir de seu id. |
| *POST*      | `/users`      | [:mag_right:]()  | Cria um objeto "usuário" mediado pelo middleware de validação. |
| *DELETE*    | `/users/{id}` | [:mag_right:]()  | Exclui Exclui um objeto "usuário" apartir de seu id. |

<br />
<br />

## /cities :office: :city_sunrise:

| Método Http | Rota            | Detalhes        | descrição     |
| :---:       | :---            | :---:           | :---          |
| *GET*       | `/cities`       | [:mag_right:]() | Retorna a lista com todas as cidades cadastradas. |
| *GET*       | `/cities/{id}`  | [:mag_right:]() | Retorna um objeto do tipo "city" apartir do seu id. |


<br />
<br />

## /categories :jigsaw: :gear:

| Método Http | Rota                | Detalhes        | descrição     |
| :---:       | :---                | :---:           | :---          |
| *GET*       | `/categories`       | [:mag_right:]() | Retorna a lista com todas as categorias cadastradas. |
| *GET*       | `/categories/{id}`  | [:mag_right:]() | Retorna um objeto do tipo "category" apartir do seu id. |


<br />
<br />

## /donations :moneybag: :coin:

| Método Http | Rota                       | Detalhes        | Descrição     |
| :---:       | :---                       | :---:           | :---          |
| *GET*       | `/donations`               | [:mag_right:]() | Retorna a lista com todas as doações cadastradas. |
| *GET*       | `/donations/{id}`          | [:mag_right:]() | Retorna um objeto do tipo "donation" apartir do seu id. |
| *GET*       | `/donations/user/{userId}` | [:mag_right:]() | Retorna um objeto do tipo "donation" apartir do id de um usuário cadastrado. |
| *GET*       | `/donation-ranking`        | [:mag_right:]() | Retorna uma lista com os maiores usuários contribuintes e os valores arrecadados. |
| *POST*      | `/donations`               | [:mag_right:]() | Cria um objeto do tipo "donation" contendo um valor e um id de usuário cadastrado. |


<br />
<br />

## /ads :loudspeaker:

| Método Http | Rota             | Detalhes        | descrição     |
| :---:       | :---             | :---:           | :---          |
| *GET*       | `/ads`           | [:mag_right:]() | Retorna a lista com todos os anúncios cadastrados. |
| *GET*       | `/ads/{id}`      | [:mag_right:]() | Retorna um objeto do tipo "ads" apartir do seu id. |
| *GET*       | `/ads/{petName}` | [:mag_right:]() | Retorna um objeto do tipo "ads" apartir do nome do pet. |
| *POST*      | `/ads`           | [:mag_right:]() | Cria um objeto do tipo "ads" conforme middleware de validação. |
