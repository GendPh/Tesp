1. Crie uma classe para representar uma imagem. Uma imagem deverá ter:
* um id que é uma string;
* uma descrição que é uma string também;
* um url com o endereço da imagem (string);

2. Crie agora uma interface para permitir gerir imagens. A interface deverá ter os seguintes métodos:
* um método que retorna todas as imagens; (GET)
* um método para obter uma imagem passando o id da mesma por parâmetro; (GET)
* um método para remover uma imagem passando o id da mesma por parâmetro; (DELETE)
* um método para criar/guardar uma nova imagem passando a nova imagem por parâmetro. 
O método deverá retornar um booleano que indique se a imagem criada com sucesso ou não; (POST)
* um método para alterar uma imagem, passando o id da imagem que se pretende alterar e uma nova imagem para substituir; (UPDATE)

3. Crie agora uma implementação para a interface criada no ponto anterior.
A classe deverá ser uma implementação da interface, em memória.