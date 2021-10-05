# Projeto realizado para fins de estudos relacionados a "arquitetura REST"

6 NECESSIDADES (constraints) para ser RESTful
* **Uniform Interface:** Manter uma uniformidade na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. 
    ## São exemplos de aplicação de uma interface uniforme: 
    * O uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); 
   * Usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; 
   * sempre enviar respostas aos clientes; </p>

* **Client-server:** Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

* **Stateless:** Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

* **Cacheable:** As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

* **Layered System:** O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

* **Code on demand (optional):** Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## RESTFUL
* RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS
* Utilizar verbos HTTP para nossas requisições.
* Utilizar plural ou singular na criação dos endpoints? NÃO IMPORTA! use um padrão!!.
* Não deixar barra no final do endpoint.
* Nunca deixe o cliente sem resposta!
