#include <stdio.h>

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

int main()
{
  int notas[] = {10, 14, 12, 12, 14, 18, 8, 11, 16, 8};
  int notasSize = sizeof(notas) / sizeof(notas[0]);

  int media = Media(notas, notasSize);

  printf("Average: %d\n", media);

  return 0;
}
