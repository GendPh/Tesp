#include <stdio.h>

int main()
{
  // int x[15] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
  // int *y, *z, i;
  // y = x;
  // z = x + 3;
  // for (i = 0; i < 5; i++)
  // {
  //   printf("%d %d %d\n", x[i], *y, *z);
  //   y += 1;
  //   z += 2;
  // }

  int i, j, *a, *b;

  i = 3;
  j = 5;
  a = &i; // a=3
  printf("*a = %d\n", *a);
  b = &j; // b=5
  printf("*b = %d\n", *b);
  i++; // i=4
  printf("i = %d\n", i);
  j = i + *b; // j=4+5 <=> j=9
  printf("j = %d\n", j);
  b = a; // b=3;
  printf("*b = %d\n", *b);
  j = j + *b; // j= 9 + 2 <=> j=13;
  printf("%d\n", j);

  return 0;
}