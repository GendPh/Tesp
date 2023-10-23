#include <stdio.h>
#include <time.h>

int main()
{

  // 2 - Lê indivualmente o dia, mês e ano da data de nascimento e imprime no terminal no formato dia/mês/ano.

  int day, month, year;

  printf("Your Birthday Day:");
  scanf("%d", &day);
  printf("Your Birthday Month:");
  scanf("%d", &month);
  printf("Your Birthday Year:");
  scanf("%d", &year);

  // Print the date
  printf("Current date: %d/%d/%d\n", day, month, year);

  return 0;
}
