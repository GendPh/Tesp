#include <stdio.h>

/*
2 - Desenvolva um programa que calcula a soma de todos os numeros de 1 até N. N é inteiro e inserido pelo utilizador.
    Use uma função para calcular a soma dos numeros.
 */
int main()
{
  int result;

  result = 0;
  for (int i = 1; i <= 5; i++)
  {
    printf("Resultado(%d) + I(%d)=", result, i);
    result += i;
    printf("%d\n", result);
  }

  return 0;
}