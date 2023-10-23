#include <stdio.h>

#define PI 3.14

int main()
{

  // 5 - Cálcular a área de uma circunferência. O programa deve ler o valor do raio e o valor de PI deve estar definido como constante.
  // A = PI x r^2 com PI = 3.14159

  float raio, area;

  printf("Por favor inserir raio:");
  scanf("%f", &raio);

  area = PI * (raio * raio);
  printf("Area com raio %.2f é %.2f \n", raio, area);
  return 0;
}