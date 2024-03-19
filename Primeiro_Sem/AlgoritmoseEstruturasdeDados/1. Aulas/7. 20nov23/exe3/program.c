#include <stdio.h>
#include <string.h>
// Ex 1 - Através do uso de estruturas, faça um programa que guarda as informações de dois alunos (nome, numero e nota do teste). Desenvolva uma função que imprima os dados desses dois alunos no terminal.

typedef struct salune
{
  char nome[30];
  int id;
  int nota;
} Aluno;

void readStudent(char *name, int id, int nota)
{
  printf("Aluno: %s com ID: %d com nota final: %d \n", name, id, nota);
}

int main()
{

  Aluno std1;
  strcpy(std1.nome, "Gabriel");
  std1.id = 1;
  std1.nota = 20;
  readStudent(std1.nome, std1.id, std1.nota);

  Aluno std2;
  strcpy(std2.nome, "Ferreira");
  std2.id = 2;
  std2.nota = 10;
  readStudent(std2.nome, std2.id, std2.nota);

  return 0;
}