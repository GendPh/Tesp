#include <stdio.h>

float Media(float a, float b)
{
  return (a + b) / 2;
}

void print_message(float a, float b, float c)
{
  printf("O seu numero é %f\n", a);
  printf("O seu numero é %f\n", b);
  printf("O seu numero é %f\n", c);
}

float area_triangulo(float base, float altura)
{
  return (base * altura) / 2;
}

void ficha3_exer2(int size)
{
  for (int i = 0; i < size; i++)
  {
    for (int j = 0; j < size; j++)
    {
      putchar('#');
    }
    putchar('\n');
  }
}

void ficha3_exer3_ifElse(char a, char b)
{
  for (int i = 0; i < 5; i++)
  {
    if (i % 2 == 0)
    {
      putchar(a);
    }
    else
    {
      putchar(b);
    }
  }
}

void ficha3_exer3()
{
  for (int j = 0; j < 5; j++)
  {
    if (j % 2 == 0)
    {
      ficha3_exer3_ifElse('#', '_');
    }
    else
    {
      ficha3_exer3_ifElse('_', '#');
    }
    putchar('\n');
  }
}

void ficha3_exer4_1()
{
  int height = 4;

  // Print the top half
  for (int i = 1; i <= height; i++)
  {
    for (int j = 0; j < i; j++)
    {
      putchar('#');
    }
    putchar('\n');
  }

  // Print the bottom half
  for (int i = height - 1; i >= 1; i--)
  {
    for (int j = 0; j < i; j++)
    {
      putchar('#');
    }
    putchar('\n');
  }
}

int main()
{
  float a, b, c;
  // printf("Introduce 3 numbers: ");
  // scanf("%f %f %f", &a, &b, &c);
  // printf("%f\n", Media(a, b));
  // printf("%f\n", Media(b, c));
  // print_message(a, b, c);

  // printf("Inserir base:");
  // scanf("%f", &a);
  // printf("Inserir altura:");
  // scanf("%f", &b);
  // printf("A Area do triangulo com base %.2f e altura %.2f é %.2f\n", a, b, area_triangulo(a, b));

  // ficha3_exer2(4);
  //  ficha3_exer3();
  ficha3_exer4_1();
  return 0;
}