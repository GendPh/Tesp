#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Products
{
  char name[100];
  char type[100];
  char brand[100];
  char valDate[100];
  double price;
  int qty;
  int qtySold;
};

void showProducts(const struct Products pro[][8], int size);
void MainMenu(const struct Products pro[][8]);

// Define a structure to represent each element in the matrix

void showProducts(const struct Products pro[][8], int size)
{
  system("clear");
  int id = 1;
  for (int i = 0; i < size; ++i)
  {
    printf("\n");
    for (int j = 0; j < size; ++j)
    {
      char tempName[100]; // Temporary array for copying the name
      if (strcmp(pro[i][j].name, "") == 0)
      {
        strcpy(tempName, "Empty");
      }
      else
      {
        strcpy(tempName, pro[i][j].name);
      }

      printf(" * ID:%d %s ", id++, tempName);
    }
    printf("\n");
  }
}

void MainMenu(const struct Products pro[][8])
{
  int choice;

  printf("******** Menu ********\n");
  printf("\t * 1. Check Vending Machine Items \n");
  printf("\t * 2. Control Items \n");
  printf("\t * 3. Exit \n"); // Corrected the duplicate entry and added an exit option

  printf("Option: ");
  scanf("%d", &choice);

  switch (choice)
  {
  case 1:
    showProducts(pro, 8);
    break;
  case 2:
    // Add your code for controlling items here
    break;
  case 3:
    // Add any cleanup code if necessary
    printf("Exiting...\n");
    break;
  default:
    printf("Invalid option\n");
  }
}

int main()
{
  int size = 8;
  struct Products matrix[8][8] =
      {{
          {"Soda", "Beverage", "Coca-Cola", "10/10/2023", 1.50, 20},
          {"Chips", "Snack", "Lays", "10/10/2023", 1.25, 15},
          {"Chocolate Bar", "Snack", "Hershey's", "10/10/2023", 1.75, 18},
          {"Water", "Beverage", "Dasani", "10/10/2023", 1.00, 25},
          {"Granola Bar", "Snack", "Nature Valley", "10/10/2023", 1.50, 12},
          {"Gum", "Candy", "Wrigley's", "10/10/2023", 0.75, 30},
          {"Apple", "Fruit", "Granny Smith", "10/10/2023", 1.25, 10},
          {"Orange Juice", "Beverage", "Tropicana", "10/10/2023", 2.00, 15},
      }};

  MainMenu(matrix);

  return 0;
}
