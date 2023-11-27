#include <stdio.h>

int main()
{
  char text[] = "Desenvolva um programA que conte o número de vezes que A letra 'a' ou 'A' aparece numa string.";

  int lowerA = 0; // Initialize lowerA to zero
  int upperA = 0; // Initialize upperA to zero

  for (int i = 0; i < sizeof(text); i++) // -1 to exclude the null terminator
  {
    if (text[i] == 'a')
    {
      lowerA++;
    }
    else if (text[i] == 'A')
    {
      upperA++;
    }
  }

  printf("\nNumber of 'a': %d\nNumber of 'A': %d\n", lowerA, upperA);

  return 0;
}
