--------------------------------------------------------------CRUD API REST - AdonisJs------------------------------------------------------------------

Esse projeto é fruto de um processo seletivo e continuado para ser uma API REST simples de estudos, com futuras atualizações e
utilização em novos projetos. A API REST foi produzida com a framework Adonis.Js na linguagem Javascript. Testes com interface
será implementado ainda em 2024...


-> Requesitos:

1. Um banco de dados local (mysql nesse caso)
2. Um programa para alimentar o servidor com arquivos JSON para o sistema (Insomnia por exemplo)

-> Endpoints:

1. '/registro' -> POST
2. '/autenticacao' -> POST
3. '/index' -> GET
4. '/mudarSenha' -> POST
5. '/deletarConta' -> POST

-> JWT (Json Web Token)

Para acesso do sistema é necessário um JWT, que está linkado diretamente ao usuário que passou pelo sistema de autenticação (Login), após o login é gerado o JWT e retornado, para que possa ser usado para a autorização do usuário ao sistema

-> Usar o JWT com o Insomnia:

1. Após a autenticação, a API irá retornar o JWT:

![image](https://user-images.githubusercontent.com/67929863/138149808-f14068a0-70ea-46ba-b21a-290e7288eaab.png)

2. Copie o JWT e cole no seguinte local:

![image](https://user-images.githubusercontent.com/67929863/138149973-319edc34-b0db-42c3-a08a-88f6b4ff4a09.png)

![image](https://user-images.githubusercontent.com/67929863/138150124-b2633a7b-1462-4fc4-921a-4a04e6b1ace4.png)

3. Os endpoints que necessitam o JWT são: 3,4 e 5. 

 
-> Como Usar:

1. Por padrão o ip do servidor local que o adonis estabelecerá é '127.0.0.1:3333', logo assim ficará link para envio do protocolo:
 
![image](https://user-images.githubusercontent.com/67929863/138152318-442c8593-2e32-4a17-af34-e006d1e3df86.png)

2. Com o programa para protocolos http (Insomnia por exemplo) use os endpoints para enviar os arquivos json (no caso de cadastro, troca de senha e login)
2.1 Cadastro - No arquivo Json envie os valores: username, business_name, email, telephone, password:

![image](https://user-images.githubusercontent.com/67929863/138147027-d5117661-4de7-417f-b31f-421f42628796.png)

2.2 Login -  No arquivo Json envie os valores: email, password:

![image](https://user-images.githubusercontent.com/67929863/138147238-9c03f6ff-9907-4ca0-b669-edcb24a42833.png)

2.3 Troca de senha - No arquivo Json envie o valor: password:

![image](https://user-images.githubusercontent.com/67929863/138147876-2f4f3d85-98c4-4239-8b51-1f1d469607ee.png)

	Se houver dúvidas ao API, contactar o email "gustavo08_fonseca@outlook.com" com o assunto "API REST - Dúvida".
