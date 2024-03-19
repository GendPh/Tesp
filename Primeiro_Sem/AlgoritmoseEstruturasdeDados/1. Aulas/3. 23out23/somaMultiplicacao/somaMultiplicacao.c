#include <stdio.h>

int main()
{

  // 3 - Ler dois numeros inteiros e imprimir a soma e a multiplicação desses dois numeros

  int num1, num2, soma, multiplication;

  printf("Insert First Number: ");
  scanf("%d", &num1);
  printf("Insert Second Number: ");
  scanf("%d", &num2);
  soma = num1 + num2;
  multiplication = num1 * num2;

  printf("Soma=> %d + %d = %d \n", num1, num2, soma);
  printf("Multiplicação=> %d * %d = %d", num1, num2, multiplication);

  return 0;
}