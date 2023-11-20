#include <stdio.h>
#include <string.h>
/*
x 2 - Crie um programa que faça o controlo de informação sobre livros. Define uma estrutura para um livro com os atributos titulo, autor e ano de publicação.
    Deve criar uma função para inicilizar um livro, uma função para imprimir a informação do livro e uma função para verificar se o livro foi publicado num determinado ano.
 */

void printMenu()
{
  printf("*************************\n");
  printf("*       Main Menu       *\n");
  printf("*************************\n");
  printf("1. Check all Books\n");
  printf("2. Check Books throw year\n");
  printf("3. Exit\n");
  printf("*************************\n");
}

typedef struct sbook
{
  char title[100];
  char author[100];
  int published;
} Book;

void allBooks(const Book *b, int bookSize)
{
  for (int i = 0; i < bookSize; i++)
  {
    printf("\n|Book: %s | Author: %s | Published: %d |\n\n", b[i].title, b[i].author, b[i].published);
  }
}

void checkPublishedYear(const Book *b, int bookSize, int myYear)
{
  for (int i = 0; i < bookSize; i++)
  {
    if (myYear == b[i].published)
    {
      printf("\n|The Book %s was published at %d|\n\n", b[i].title, b[i].published);
    }
  }
}

int main()
{

  Book books[] = {
      {"Mistborn 1", "Brandon Sanderson", 2006},
      {"Mistborn 2", "Brandon Sanderson", 2006},
      {"Mistborn 3", "Brandon Sanderson", 2010},
      {"Mistborn 4", "Brandon Sanderson", 2014},
      {"Mistborn 5", "Brandon Sanderson", 2016},
  };

  int bookSize = sizeof(books) / sizeof(books[0]);

  int choice;
  int GetYear;

  do
  {
    printMenu();

    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
      allBooks(books, bookSize);
      break;
    case 2:
      printf("Select a year:\n");
      scanf("%d", &GetYear);
      checkPublishedYear(books, bookSize, GetYear);
      break;
    case 3:
      printf("Exiting the program. Goodbye!\n");
      break;
    default:
      printf("Invalid choice. Please try again.\n");
    }

  } while (choice != 3);

  return 0;
}