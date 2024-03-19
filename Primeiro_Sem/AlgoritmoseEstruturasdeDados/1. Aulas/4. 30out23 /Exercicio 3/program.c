/* 3 - Programa que tendo em conta o valor total de uma compra (inserido pelo utilizador) determina o desconto a aplicar.
    Na saída deve imprimir o valor inicial, o desconto aplicado e o valor final.

        Valor entre 0 e 50 euros -> 10 % de desconto
        Valor entre 51 e 100 euros -> 15 % de desconto
        Mais de 100 euros -> 20 % de desconto
   */

#include <stdio.h>

int main()
{
  double a, discount;

  printf("Inserir Valor: \n");
  scanf("%lf", &a);

  if (a >= 0 && a <= 50)
  {
    discount = a * 0.1;
    a -= discount;
  }
  else if (a > 50 && a <= 100)
  {
    discount = a * 0.15;
    a -= discount;
  }
  else if (a > 100)
  {
    discount = a * 0.20;
    a -= discount;
  }
  printf("%.1f\n", a);
  return 0;
}