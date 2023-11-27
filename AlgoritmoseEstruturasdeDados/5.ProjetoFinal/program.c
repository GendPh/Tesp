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
void insertProduct(struct Products pro[][8]);
void MachineMenu(struct Products pro[][8]);

// Define a structure to represent each element in the matrix
void showProducts(struct Products pro[][8], int size)
{
  int id = 1;
  for (int i = 0; i < size; ++i)
  {
    printf("\033[4m\n\033[1mShelf\033[0m\033[0m %d => ", i + 1);
    for (int j = 0; j < size; ++j)
    {
      // char tempName[100]; // Temporary array for copying the name
      if (strcmp(pro[i][j].name, "") == 0)
      {
        strcpy(pro[i][j].name, "Empty");
      }

      printf("\033[4m\033[1m-ID:%d\033[0m\033[0m %s/%d/%.2f ", id++, pro[i][j].name, pro[i][j].qty, pro[i][j].price);
    }
    printf("\n");
  }

  MachineMenu(pro);
}

void MainMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoice = 2;
  char buffer[100];

  do
  {

    printf("******** Menu ********\n");
    printf("\t * 1. Check Vending Machine Items \n");
    printf("\t * 2. Exit \n"); // Corrected the duplicate entry and added an exit option

    if (choice > totalChoice || choice <= (totalChoice - totalChoice))
    {
      printf("Please Insert a Number between 1 and %d\n", totalChoice);
    }

    printf("Option: ");

    if (scanf("%d", &choice) != 1)
    {
      choice = 4;
      scanf("%s", buffer);
      continue;
    }

    switch (choice)
    {
    case 1:
      showProducts(pro, 8);
      break;
    case 2:
      // Add any cleanup code if necessary
      printf("Exiting...\n");
      break;
    default:
      printf("Invalid option\n");
    }
  } while (choice > totalChoice || choice <= (totalChoice - totalChoice));
}
void MachineMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoice = 3;
  char buffer[100];

  do
  {
    printf("* Machine Menu *\n");
    printf("\t * 1. Insert Values \n");
    printf("\t * 2. Remove Values \n"); // Corrected the duplicate entry and added an exit option
    printf("\t * 3. Exit \n");          // Corrected the duplicate entry and added an exit option

    if (choice > totalChoice || choice <= (totalChoice - totalChoice))
    {
      printf("Please Insert a Number between 1 and %d\n", totalChoice);
    }

    printf("Option: ");

    if (scanf("%d", &choice) != 1)
    {
      choice = totalChoice++;
      scanf("%s", buffer);
      continue;
    }

    switch (choice)
    {
    case 1:
      insertProduct(pro);
      break;
    case 2:
      // Add any cleanup code if necessary
      printf("Exiting...\n");
      break;
    default:
      printf("Invalid option\n");
    }
  } while (choice > totalChoice || choice <= (totalChoice - totalChoice));
}

// Inserir um novo produto, dado o número da prateleira e posição.

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

  // insertProduct(matrix);

  return 0;
}
