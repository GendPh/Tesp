#include <stdio.h>
#include <string.h>

typedef struct sdata
{
  int dia;
  int mes;
  int ano;
} Data;

typedef struct spessoa
{
  int idade;
  char nome[30];
  Data nascimento;
} Pessoa;

int main()
{

  Pessoa p;

  p.idade = 25;
  p.nascimento.dia = 16;
  p.nascimento.mes = 10;
  p.nascimento.ano = 1998;
  strcpy(p.nome, "Gabriel");

  printf("%d %s\n%d/%d/%d\n", p.idade, p.nome, p.nascimento.dia, p.nascimento.mes, p.nascimento.ano);
  return 0;
}