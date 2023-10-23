#include <stdio.h>
int main()
{
  //1 - Lê o valor em euros e imprime o equivalente em dolares (considere uma taxa de conversão de 1.17)

  float euro, dolar;
  printf("Enter euro: ");
  scanf("%f", &euro);

  dolar = euro * 1.17;

  // %.2lf displays number up to 2 decimal point
  printf("Dolar = %.2f$", dolar);

  return 0;
}
