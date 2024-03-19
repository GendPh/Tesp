/*
3 - Desenvolva um programa que determine o valor de uma conta bancária após um determinado numero de anos tendo em conta uma taxa de rendimento anual (%).
    O utilizador deve dar como entrada o valor atual da conta bancária, o numero de anos e a taxa de rendimento.
 */

#include <stdio.h>

float rendimento(float conta, int anos, float taxa)
{
  for (int i = 0; i < anos; i++)
  {
    conta += (conta * (taxa / 100));
  }
  return conta;
}

int main()
{

  int anos;
  float conta, taxa;
  printf("Inserir Valor no banco:");
  scanf("%f", &conta);
  printf("Inserir a quantidade de anos:");
  scanf("%d", &anos);
  printf("Inserir a taxa a calcular:");
  scanf("%f", &taxa);
  printf("Rendimento de %.f€ após %d anos com a taxa de %.f%% é %.2f€\n", conta, anos, taxa, rendimento(conta, anos, taxa));
  return 0;
}