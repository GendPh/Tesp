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
void AlterProductInformation(struct Products pro[][8], int xPos, int yPos);
void ProductMenu(struct Products pro[][8], int xPos, int yPos);
void showProducts(struct Products pro[][8], int size);
void insertProduct(struct Products pro[][8]);
void checkProduct(struct Products pro[][8]);
void buyProduct(struct Products pro[][8]);
double machineMoney(struct Products pro[][8], int size);
void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos);
int getRowColumn(char text[100]);

int main()
{

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
  // checkProduct(vendingMachine);
  return 0;
}

void MainMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    system("clear");

    printf("\t\033[4m\033[1mMain Menu\033[0m\033[0m\n\n");
    printf("1. Vending Machine\n");
    printf("2. Buy Product\n");
    printf("3. Exit\n");

    if (wrongInput == 1)
      printf("\n\033[4mPlease insert a valid number between 1 and %d\033[m.\n", totalChoices);

    printf("\nMenu Option: ");
    if (scanf("%d", &choice) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (choice < 1 || choice > totalChoices)
    {
      wrongInput = 1;
    }
    else
    {
      wrongInput = 0;
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
  } while (wrongInput != 0);
}

void MachineMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 4;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4m\033[1mMachine Menu\033[0m\033[0m\n\n");
    printf("1. Insert Values\n");
    printf("2. Verify Product\n");
    printf("3. Return \n");
    printf("4. End Program \n");

    if (wrongInput == 1)
      printf("\n\033[4mPlease insert a valid number between 1 and %d.\033[0m\n", totalChoices);

    printf("\nOption: ");
    if (scanf("%d", &choice) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (choice < 1 || choice > totalChoices)
    {
      wrongInput = 1;
    }
    else
    {
      wrongInput = 0;
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
  } while (wrongInput != 0);
}

void AlterProductInformation(struct Products pro[][8], int xPos, int yPos)
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4m\033[1mProduct Menu\033[0m\033[0m\n\n");
    printf("\t\033[4mProduct \033[1m%s\033[4m\033[0m\n\n", pro[xPos][yPos].name);
    // printf("1. Change Product Type \n");
    // printf("2. Change Product Name \n");
    // printf("3. Change Product Brand \n");
    // printf("4. Change Product Expiration Date\n");
    // printf("5. Change Product Price \n");
    // printf("6. Replace Quantity\n");
    // printf("7. Replace Sold Quantity\n");
    // printf("8. Return \n");
    // printf("9. End Program \n");
    printf("1. Change Product Price \n");
    printf("2. Return \n");
    printf("3. End Program \n");

    if (wrongInput == 1)
      printf("\n\033[4mPlease insert a valid number between 1 and %d.\033[0m\n", totalChoices);

    printf("\nOption: ");
    if (scanf("%d", &choice) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (choice < 1 || choice > totalChoices)
    {
      wrongInput = 1;
    }
    else
    {
      wrongInput = 0;
    }

    getchar();

    switch (choice)
    {
    case 1:
      ChangeProductPrice(pro, xPos, yPos);
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
  } while (wrongInput != 0);
}

void ProductMenu(struct Products pro[][8], int xPos, int yPos)
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4m\033[1mProduct Menu\033[0m\033[0m\n\n");
    printf("1. Alter Product Information\n");
    printf("2. Return\n");
    printf("3. Exit Program\n");

    if (wrongInput == 1)
      printf("\n\033[4mPlease insert a valid number between 1 and %d.\033[0m\n", totalChoices);

    printf("\nOption: ");
    if (scanf("%d", &choice) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (choice < 1 || choice > totalChoices)
    {
      wrongInput = 1;
    }
    else
    {
      wrongInput = 0;
    }

    getchar();

    switch (choice)
    {
    case 1:
      system("clear");
      AlterProductInformation(pro, xPos, yPos);
      break;
    case 2:
      printf("Still in Work.\n");
      break;
    case 3:
      printf("Still in Work.\n");
      break;
    }
  } while (wrongInput != 0);
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

  printf("\n\033[4m\033[1mInsert the following Information\033[0m\033[0m\n");

  // This will get the row and column for my two-dimensional array of structs
  int newRow = getRowColumn("Shelf");
  int newColumn = getRowColumn("Product ID");

  // Reduce the Row and Column by one to get the index of the two-dimensional array of structs
  newRow--;
  newColumn--;

  // This Proccess will define in the two-dimensional array of structs the Attributes of the struct Product
  printf("\033[4mProduct Type:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].type);

  printf("\033[4mProduct Name:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].name);

  printf("\033[4mProduct Brand:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].brand);

  printf("\033[4mProduct Expiration Date (dd/mm/yyyy):\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].valDate);

  // This Process runs until a valid input is put and checks if contains Characters and restart the loop until it goes ok
  int correctPriceInput = 1;
  int priceConfirmed = 0;
  do
  {
    if (correctPriceInput == 0)
    {
      system("clear");
      printf("\033[4mPlease insert a\033[1m Correct Input '00.00'\033[0m for a Price.\033[0m\n");
    }

    printf("\033[4mProduct Price (00.00):\033[4m");
    if (scanf("%lf", &pro[newRow][newColumn].price) != 1)
    {
      correctPriceInput = 0;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (pro[newRow][newColumn].price <= 0)
    {
      correctPriceInput = 0;
    }
    else
    {
      priceConfirmed = 1;
    }
    getchar();
  } while (priceConfirmed != 1);

  pro[newRow][newColumn].qty = 10;

  // Restart the content of terminal and shows the Products and the Machine Menu
  system("clear");
  showProducts(pro, 8);
  MachineMenu(pro);
}

// 3. Listar a informação sobre um produto específico, dada a localização (prateleira e posição);
void checkProduct(struct Products pro[][8])
{

  system("clear");
  showProducts(pro, 8);

  printf("\t\033[4m\033[1mProduct Position\033[0m\033[0m\n");
  int newRow = getRowColumn("Shelf");
  int newColumn = getRowColumn("Product ID");

  // Clear the Terminal to just appear the following selected product
  system("clear");

  printf("\t\033[1m\033[4mSelected Product:\033[0m\033[0m\n\n");
  printf("\033[4m\033[1mShelf:\033[0m\033[4m %d \033[4m\033[1mProduct ID:\033[0m\033[0m %d\n\n", newRow, newColumn);
  newRow--;
  newColumn--;
  printf("\033[4mProduct Type:\033[0m \033[1m%s\033[0m;\n", pro[newRow][newColumn].type);
  printf("\033[4mProduct Name:\033[0m \033[1m%s\033[0m;\n", pro[newRow][newColumn].name);
  printf("\033[4mProduct Brand:\033[0m \033[1m%s\033[0m;\n", pro[newRow][newColumn].brand);
  printf("\033[4mProduct Expiration Date:\033[0m \033[1m%s\033[0m;\n", pro[newRow][newColumn].valDate);
  printf("\033[4mProduct Price:\033[0m \033[1m%.2lf€\033[0m;\n", pro[newRow][newColumn].price);
  printf("\033[4mProduct Quantity:\033[0m \033[1m%d\033[0m;\n", pro[newRow][newColumn].qty);
  printf("\033[4mProduct Sold:\033[0m \033[1m%d\033[0m;\n", pro[newRow][newColumn].qtySold);

  ProductMenu(pro, newRow, newColumn);
}

// 4. Simular a compra de um produto pelo utilizador, onde deverá somar ao total dinheiro na máquina o preço do produto;

/*
TODO
[ ] Restart this process to improve it ALL;
 */

void buyProduct(struct Products pro[][8])
{
  system("clear");
  showProducts(pro, 8);

  int newRow = getRowColumn("Shelf");
  int newColumn = getRowColumn("Product ID");

  printf("Selected Product:\n");
  printf("\tShelf: %d Product ID: %d\n", newRow, newColumn);

  // Reduce Row and Column to access the Product object Ex: pro[0][0] instead of pro[1][1] if i choose the Shelf 1
  newRow--;
  newColumn--;

  // Add to the Product Object a sold quantity;
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

/*
  TODO:

  [ ]In the end add a destination;
 */

void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos)
{
  // This Process runs until a valid input is put and checks if contains Characters and restart the loop until it goes ok
  int correctPriceInput = 1;
  int priceConfirmed = 0;
  do
  {
    if (correctPriceInput == 0)
    {
      system("clear");
      printf("\033[4mPlease insert a\033[1m Correct Input '00.00'\033[0m for a Price.\033[0m\n");
    }

    printf("\033[4mProduct Price (00.00):\033[0m");
    if (scanf("%lf", &pro[xPos][yPos].price) != 1)
    {
      correctPriceInput = 0;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (pro[xPos][yPos].price <= 0)
    {
      correctPriceInput = 0;
    }
    else
    {
      priceConfirmed = 1;
    }
    getchar();
  } while (priceConfirmed != 1);

  system("clear");
  printf("Product %s Price altered to %.2lf€\n", pro[xPos][yPos].name, pro[xPos][yPos].price);
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
