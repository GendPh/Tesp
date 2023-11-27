// 2 - Programa que determina se o número inserido pelo utilizador é par or ímpar.
#include <stdio.h>
int main()
{
  int a;
  printf("Insert Value: ");
  scanf("%d", &a);

  if (a % 2 == 0)
  {
    printf("The Value %d is Pair.\n", a);
  }
  else
  {
    printf("The Value %d is Impar.\n", a);
  }
  return 0;
}