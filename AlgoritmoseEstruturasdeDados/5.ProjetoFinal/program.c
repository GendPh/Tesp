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

void showProducts(struct Products pro[][8], int size);
void MainMenu(struct Products pro[][8]);
void MachineMenu(struct Products pro[][8]);
void insertProduct(struct Products pro[][8]);

int main()
{

  int size = 8;
  struct Products vendingMachine[8][8] =
      {{
          //{Name, Type, Brand, Expiration, Price, Quantity},
          {"Soda", "Beverage", "Coca-Cola", "10/10/2023", 1.50, 10},
          {"Chips", "Snack", "Lays", "10/10/2023", 1.25, 10},
          {"Chocolate Bar", "Snack", "Hershey's", "10/10/2023", 1.75, 10},
          {"Water", "Beverage", "Dasani", "10/10/2023", 1.00, 25},
          {"Granola Bar", "Snack", "Nature Valley", "10/10/2023", 1.50, 10},
          {"Gum", "Candy", "Wrigley's", "10/10/2023", 0.75, 10},
          {"Apple", "Fruit", "Granny Smith", "10/10/2023", 1.25, 10},
          {"Orange Juice", "Beverage", "Tropicana", "10/10/2023", 2.00, 10},
      }};

  MainMenu(vendingMachine);
  return 0;
}

void MainMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 3;

  do
  {
    system("clear");
    printf("* Main Menu *\n");
    printf("\t * 1. Vending Machine \n");
    printf("\t * 2. Vending Machine Options \n");
    printf("\t * 3. Exit \n");

    if (choice < 1 || choice > totalChoices)
    {
      printf("Please insert a valid number between 1 and %d.\n", totalChoices);
    }

    printf("Option: ");
    if (scanf("%d", &choice) != 1)
    {
      choice += totalChoices;
      while (getchar() != '\n')
        ;
      continue;
    }
    getchar();

    switch (choice)
    {
    case 1:
      showProducts(pro, 8);
      break;
    case 2:
      printf("Empty Field Still on Work\n");
      break;
    case 3:
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

void MachineMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;
  do
  {
    if (wrongInput == 1)
    {
      system("clear");
    }

    printf("\n* Machine Menu *\n");
    printf("\t * 1. Insert Values \n");
    printf("\t * 2. Remove Values \n");
    printf("\t * 3. Exit \n");

    if (choice < 1 || choice > totalChoices)
    {
      printf("Please insert a valid number between 1 and %d.\n", totalChoices);
    }

    printf("Option: ");
    if (scanf("%d", &choice) != 1)
    {
      system("clear");
      wrongInput = 1;
      choice += totalChoices;
      while (getchar() != '\n')
        ;
      continue;
    }
    getchar();

    switch (choice)
    {
    case 1:
      printf("Empty Field Still on Work\n");
      break;
    case 2:
      printf("Empty Field Still on Work\n");
      break;
    case 3:
      MainMenu(pro);
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

// 2. Listar a informação de todos os produtos disponíveis;
void showProducts(struct Products pro[][8], int size)
{
  system("clear");
  int id = 1;
  for (int i = 0; i < size; ++i)
  {
    printf("\033[4m\n\033[1mShelf\033[0m\033[0m %d \n", i + 1);
    printf("ID - Name - Quantity - Price\n");
    for (int j = 0; j < size; ++j)
    {
      // char tempName[100]; // Temporary array for copying the name
      if (strcmp(pro[i][j].name, "") == 0)
      {
        strcpy(pro[i][j].name, "Empty");
      }

      printf("\033[4m\033[1m-ID:%d\033[0m\033[0m %s/%d/%.2f\n", id++, pro[i][j].name, pro[i][j].qty, pro[i][j].price);
    }
  }

  MachineMenu(pro);
}

/*
 1. Inserir um novo produto, dado o número da prateleira e posição.

 #TODO :
 [ ] : Confirmação dos valores a serem inseridos;
 [ ] : Inserir if statements para os valores a serem inseridos;
 */
void insertProduct(struct Products pro[][8])
{
  int newRow, newColumn;

  char tempName[100];
  char tempType[100];
  char tempBrand[100];
  char tempValidation[100];
  double tempPrice;

  printf("You will need to insert the following Information:\n");

  // Input for Row and Column
  printf("\t1. Row: ");
  scanf("%d", &newRow);
  printf("\t2. Column: ");
  scanf("%d", &newColumn);

  // Input for Name, Type, Brand, and Validation
  printf("\t3. Name: ");
  scanf("%s", tempName);
  printf("\t4. Type: ");
  scanf("%s", tempType);
  printf("\t5. Brand: ");
  scanf("%s", tempBrand);
  printf("\t6. Validation: ");
  scanf("%s", tempValidation);

  // Input for Price
  printf("\t7. Price: ");
  scanf("%lf", &tempPrice);

  strcpy(pro[newRow][newColumn].name, tempName);
  strcpy(pro[newRow][newColumn].type, tempType);
  strcpy(pro[newRow][newColumn].brand, tempBrand);
  strcpy(pro[newRow][newColumn].valDate, tempValidation);
  pro[newRow][newColumn].price = tempPrice;
  showProducts(pro, 8);
}