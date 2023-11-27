#include <stdio.h>

int main()
{
  // Ficha nº3
  /* // Exercicio 1
  int x, y;
  // 1.a
  // x=3;
  // y=x+1;
  // x=x*y;
  // y=x+y;
  // R: x=12 y=16

  // 1.D
  //  x=200;
  //  y=100;
  //  x=x+y;
  //  y=x-y;
  //  x=x-y;
  //  R: x=100 y=200

  // 1.E
  x = 100;
  y = 28;
  x += y;
  y -= x;
  //R: x=128 y=-99; x=129 y=-99

  printf("%d %d\n", x++, ++y);
  printf("%d %d\n", x, y); */

  double a, b, c, max;

  printf("Insert Value 1:\n");
  scanf("%lf", &a);
  printf("Insert Value 2:\n");
  scanf("%lf", &b);
  printf("Insert Value 3:\n");
  scanf("%lf", &c);

  if (a >= b)
  {
    max = a;
  }
  else
  {
    max = b;
  }

  if (max < c)
  {
    max = c;
  }
  printf("Number 1: %.2lf; Number 2: %.2lf; Number 3: %.2lf;\n Max Number is: %.2lf\n", a, b, c, max);

  /* float a, discount;
  printf("Insert a value: ");
  scanf("%f", &a); */

  /* if (a % 2 == 0)
  {
    printf("Number par\n");
  }
  else
  {
    printf("Number impar\n");
  } */

  /* if (a >= 0 && a <= 50)
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
  printf("%.1f\n", a); */
}