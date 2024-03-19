#include <stdio.h>

typedef struct Sret
{
  double l;
  double w;
  double h;
} Ret;

double Vol(Ret ret)
{
  return ret.l * ret.w * ret.h;
}

int encontrarMaior(int array[], int tamanho)
{
  int maior = 0;
  for (int i = 0; i < tamanho; i++)
  {
    if (array[i] > maior)
    {
      maior = array[i];
    }
  }
  return maior;
}

int main()
{

  // Ret retangulo = {3, 2, 4};
  // printf("Volume %.2lf\n", Vol(retangulo));

  // int value;
  // printf("Number: ");
  // scanf("%d", &value);
  // (value % 2 == 0) ? printf("Value %d is Par.\n", value) : printf("Value %d is Impar.\n", value);

  // int soma = 0;
  // int qty = 0;
  // printf("Inserir Quantidade de numeros a somar: ");
  // scanf("%d", &qty);

  // for (int i = 0; i < qty; i++)
  // {
  //   int n;
  //   printf("%d Number: ", i + 1);
  //   scanf("%d", &n);
  //   soma += n;
  // }
  // printf("Soma: %d\n", soma);

  int n[5] = {3, 6, 3, 8, 9};
  for (int i = 0; i < 5; i++)
  {
    printf("%d\n", n[i]);
  }

  printf("Maior %d.\n", encontrarMaior(n, 5));

  return 0;
}