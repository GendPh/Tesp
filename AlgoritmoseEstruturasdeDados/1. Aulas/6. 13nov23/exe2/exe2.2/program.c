#include <stdio.h>

int Notas()
{
  int value;
  printf("Inserir Nota:");
  scanf("%d", &value);
  return value;
}

int Media(int *array, int size)
{
  int media = 0;
  for (int i = 0; i < size; i++)
  {
    media += array[i];
  }
  printf("Size: %d e Full Count: %d\n", size, media);
  return media / size;
}

void conjuntoNotas()
{
  int arraySize = 10;
  int notas[arraySize];
  for (int i = 0; i < arraySize; i++)
  {
    notas[i] = Notas();
  }
  printf("Array elements:{");
  for (int i = 0; i < arraySize; i++)
  {
    printf("%d ", notas[i]);
  }
  printf("}\n");

  int media = Media(notas, arraySize);
  printf("Average: %d\n", media);
}

int main()
{
  conjuntoNotas();
  conjuntoNotas();
  return 0;
}
