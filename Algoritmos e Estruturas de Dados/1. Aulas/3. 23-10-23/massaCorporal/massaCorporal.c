#include <stdio.h>

int main()
{

  // 4 - Calcular o índice de massa corpural (IMC) de uma pessoa através do seu peso (Kg) e altura (em m) ao quadrado. Peso e altura devem ser inseridos pelo utilizador.
  // Exemplo para 80 kg e 1.77 m.
  // IMC = peso/altura^2  =  80/1.77*1.77 = 25.53

  // Define variables
  float peso, altura, imc;

  // Insert Variable to Peso
  printf("Inserir Peso(Kg):");
  scanf("%f", &peso);

  // Insert Variable to Altura
  printf("Inserir Altura(m):");
  scanf("%f", &altura);

  // Calculate both
  imc = peso / (altura * altura);

  // Print Result
  printf("Your IMC is %.2f", imc);

  return 0;
}