#include <stdio.h>
// 1 - Programa que dados 3 números inseridos pelo utilizador determina o maior dos 3
int main()
{
  double a, b, c, max;
  printf("Insert value 1: ");
  scanf("%lf", &a);
  printf("Insert value 2: ");
  scanf("%lf", &b);
  printf("Insert value 3: ");
  scanf("%lf", &c);

  if (a >= b)
  {
    max = a;
  }
  else
  {
    max = b;
  }
  if (max <= c)
  {
    max = c;
  }

  printf("Number 1: %.2lf;\nNumber 2: %.2lf;\nNumber 3: %.2lf;\nBiggest Number: %.2lf\n", a, b, c, max);
  return 0;
}