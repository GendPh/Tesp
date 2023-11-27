#include <stdio.h>

void swapM(int *x, int *y)
{

  int a;

  a = *x;
  printf("A= %d *X= %d\n", a, *x);

  *x = *y;
  printf("*X= %d *Y= %d\n", *x, *y);

  *y = a;

  printf("*Y= %d", *y);
}

int main()
{

  int x = 3;
  int y = 5;

  swapM(&x, &y);
  printf("\n%d %d\n", x, y);

  return 0;
}