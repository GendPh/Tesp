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

void MainMenu(struct Products pro[][8]);
void MachineMenu(struct Products pro[][8]);
void ProductMenu(struct Products pro[][8]);
void showProducts(struct Products pro[][8], int size);
void insertProduct(struct Products pro[][8]);
void checkProduct(struct Products pro[][8]);
void buyProduct(struct Products pro[][8]);
double machineMoney(struct Products pro[][8], int size);
int getRowColumn(char text[100]);

int main()
{

  int size = 8;
  struct Products vendingMachine[8][8] =
      {{
          //{Name, Type, Brand, Expiration, Price, Quantity},
          {"Soda", "Beverage", "Coca-Cola", "10/10/2023", 1.50, 10, 4},
          {"Chips", "Snack", "Lays", "10/10/2023", 1.25, 10, 4},
          {"Chocolate Bar", "Snack", "Hershey's", "10/10/2023", 1.75, 10, 4},
          {"Water", "Beverage", "Dasani", "10/10/2023", 1.00, 25, 4},
          {"Granola Bar", "Snack", "Nature Valley", "10/10/2023", 1.50, 10},
          {"Gum", "Candy", "Wrigley's", "10/10/2023", 0.75, 10},
          {"Apple", "Fruit", "Granny Smith", "10/10/2023", 1.25, 10},
          {"Orange Juice", "Beverage", "Tropicana", "10/10/2023", 2.00, 10},
      }};
  // system("clear");
  // showProducts(vendingMachine, 8);
  MainMenu(vendingMachine);
  //  double moneyOnMachine = machineMoney(vendingMachine, 8);
  //  printf("%.2lf", moneyOnMachine);
  return 0;
}

void MainMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 3;

  do
  {
    system("clear");
    printf("\t\033[4m\033[1mMain Menu\033[0m\033[0m\n\n");
    printf("1. Vending Machine\n");
    printf("2. Buy Product\n");
    printf("3. Exit\n");

    if (choice < 1 || choice > totalChoices)
    {
      printf("\n\033[4mPlease insert a valid number between 1 and %d\033[m.\n", totalChoices);
    }

    printf("\nMenu Option: ");
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
      system("clear");
      showProducts(pro, 8);
      MachineMenu(pro);
      break;
    case 2:
      system("clear");
      buyProduct(pro);
      break;
    case 3:
      system("clear");
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

void MachineMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 4;
  int wrongInput = 0;
  do
  {
    if (wrongInput == 1)
    {
      system("clear");
      showProducts(pro, 8);
    }

    printf("\n\t\033[4m\033[1mMachine Menu\033[0m\033[0m\n\n");
    printf("1. Insert Values\n");
    printf("2. Verify Product\n");
    printf("3. Return \n");
    printf("4. End Program \n");

    if (choice < 1 || choice > totalChoices)
    {
      printf("\n\033[4mPlease insert a valid number between 1 and %d.\033[0m\n", totalChoices);
    }

    printf("\nOption: ");
    if (scanf("%d", &choice) != 1)
    {
      // system("clear");
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
      insertProduct(pro);
      break;
    case 2:
      checkProduct(pro);
      break;
    case 3:
      system("clear");
      MainMenu(pro);
      break;
    case 4:
      system("clear");
      printf("End Program !\n");
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

void ProductMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 9;

  do
  {
    system("clear");
    printf("* Main Menu *\n");
    printf("\t * 1. Change Product Type \n");
    printf("\t * 2. Change Product Name \n");
    printf("\t * 3. Change Product Brand \n");
    printf("\t * 4. Change Product Expiration Date\n");
    printf("\t * 5. Change Product Price \n");
    printf("\t * 6. Replace Quantity\n");
    printf("\t * 7. Replace Sold Quantity\n");
    printf("\t * 8. Return \n");
    printf("\t * 9. Exit \n");

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
      printf("Empty Field Still on Work\n");
      break;
    case 2:
      printf("Empty Field Still on Work\n");
      break;
    case 3:
      printf("Empty Field Still on Work\n");
      break;
    case 4:
      printf("Empty Field Still on Work\n");
      break;
    case 5:
      printf("Empty Field Still on Work\n");
      break;
    case 6:
      printf("Empty Field Still on Work\n");
      break;
    case 7:
      printf("Empty Field Still on Work\n");
      break;
    case 8:
      printf("Empty Field Still on Work\n");
      break;
    case 9:
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

// 2. Listar a informação de todos os produtos disponíveis;
void showProducts(struct Products pro[][8], int size)
{
  printf("\t\033[4m\033[1mVending Machine Stock\033[0m\033[0m\n\n");
  for (int i = 0; i < size; ++i)
  {
    int id = 1;
    printf("\t\033[4m\033[1mShelf %d\033[0m\033[0m\n", i + 1);
    printf("\nID | Name | Quantity | Price\n\n");
    for (int j = 0; j < size; ++j)
    {
      // char tempName[100]; // Temporary array for copying the name
      if (strcmp(pro[i][j].name, "") == 0)
      {
        strcpy(pro[i][j].name, "Empty");
      }

      printf("=> \033[4m\033[1mID:%d\033[0m\033[0m | %s | %d | %.2f€ |\n\n", id++, pro[i][j].name, pro[i][j].qty, pro[i][j].price);
    }
  }
}

// 1. Inserir um novo produto, dado o número da prateleira e posição.
void insertProduct(struct Products pro[][8])
{
  int newRow, newColumn;

  printf("\n\033[4m\033[1mInsert the following Information\033[0m\033[0m\n\n");

  // Input for Row and Column
  printf("\t1. Shelf: ");
  scanf("%d", &newRow);
  printf("\t2. Product: ");
  scanf("%d", &newColumn);
  newRow--;
  newColumn--;

  // Input for Name, Type, Brand, Validation, price
  printf("\t3. Name: ");
  scanf("%s", pro[newRow][newColumn].name);

  printf("\t4. Type: ");
  scanf("%s", pro[newRow][newColumn].type);

  printf("\t5. Brand: ");
  scanf("%s", pro[newRow][newColumn].brand);

  printf("\t6. Expiration Date (dd/mm/yyyy): ");
  scanf("%s", pro[newRow][newColumn].valDate);

  int correctPriceInput = 1;
  int priceConfirmed = 0;
  do
  {
    if (correctPriceInput == 0)
    {
      system("clear");
      printf("Please insert a correct input for a Price.\n");
    }

    printf("\t7. Price:");
    if (scanf("%lf", &pro[newRow][newColumn].price) != 1)
    {
      correctPriceInput = 0;
      while (getchar() != '\n')
        ;
      continue;
    }
    else
    {
      priceConfirmed = 1;
    }
    getchar();
  } while (priceConfirmed != 1);

  pro[newRow][newColumn].qty = 10;
  pro[newRow][newColumn].qtySold = 0;

  system("clear");
  showProducts(pro, 8);
  MachineMenu(pro);
}

// 3. Listar a informação sobre um produto específico, dada a localização (prateleira e posição);
void checkProduct(struct Products pro[][8])
{

  system("clear");
  showProducts(pro, 8);

  int newRow = getRowColumn("Shelf");
  int newColumn = getRowColumn("Product ID");

  printf("\033[4mSelected Product\033[0m:\n");
  printf("\tShelf: %d Product ID: %d\n", newRow, newColumn);
  newRow--;
  newColumn--;
  printf("\tProduct Type: %s;\n", pro[newRow][newColumn].type);
  printf("\tProduct Name: %s;\n", pro[newRow][newColumn].name);
  printf("\tProduct Brand: %s;\n", pro[newRow][newColumn].brand);
  printf("\tProduct Expiration Date: %s;\n", pro[newRow][newColumn].valDate);
  printf("\tProduct Price: %.2lf€;\n", pro[newRow][newColumn].price);
  printf("\tProduct Quantity: %d;\n", pro[newRow][newColumn].qty);
  printf("\tProduct Sold: %d;\n", pro[newRow][newColumn].qtySold);

  int choice = 1;
  int totalChoices = 3;

  do
  {
    // system("clear");

    printf("\n Product Menu \n");
    printf("1. Change Information\n");
    printf("2. Return\n");
    printf("3. Exit Program\n");

    if (choice < 1 || choice > totalChoices)
    {
      printf("\nPlease insert a number between 1 and %d.\n", totalChoices);
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
      ProductMenu(pro);
      break;
    case 2:
      MachineMenu(pro);
      break;
    case 3:
      printf("On Work!");
      break;
    }
  } while (choice > totalChoices || choice <= (totalChoices - totalChoices));
}

// 4. Simular a compra de um produto pelo utilizador, onde deverá somar ao total dinheiro na máquina o preço do produto;
void buyProduct(struct Products pro[][8])
{
  // system("clear");

  showProducts(pro, 8);

  int newRow, newColumn;
  // Input for Row and Column
  printf("\t1. Shelf: ");
  scanf("%d", &newRow);
  printf("\t2. Product ID: ");
  scanf("%d", &newColumn);

  printf("Selected Product:\n");
  printf("\tShelf: %d Product ID: %d\n", newRow, newColumn);
  newRow--;
  newColumn--;
  pro[newRow][newColumn].qtySold++;

  printf("\tProduct Name: %s;\n", pro[newRow][newColumn].name);
  printf("\tProduct Sold: %d;\n", pro[newRow][newColumn].qtySold);
}

// 7. Saber o valor, em €, acumulado na máquina até ao momento;
double machineMoney(struct Products pro[][8], int size)
{
  double moneyOnMachine;
  double money;
  for (int i = 0; i < size; i++)
  {
    for (int j = 0; j < size; j++)
    {
      money = pro[i][j].price * pro[i][j].qtySold;
      moneyOnMachine += money;
    }
  }
  return moneyOnMachine;
}

int getRowColumn(char text[100])
{
  int wrongInput = 0;
  int position;
  do
  {

    if (wrongInput == 1)
    {
      system("clear");
      printf("\033[4m\033[1mPlease insert a %s between 1 and 8.\033[0m\033[0m\n", text);
    }

    printf("\nInsert a \033[4m%s\033[0m: ", text);

    if (scanf("%d", &position) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    getchar();

    wrongInput = (position < 1 || position > 8) ? 1 : 0;

  } while (wrongInput == 1);

  return position;
}