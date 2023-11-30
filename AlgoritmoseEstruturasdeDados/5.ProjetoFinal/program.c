/*
OK 1. Inserir um novo produto, dado o número da prateleira e posição.
OK 2. Listar a informação de todos os produtos disponíveis;
OK 3. Listar a informação sobre um produto específico, dada a localização (prateleira e posição);
OK 4. Simular a compra de um produto pelo utilizador, onde deverá somar ao total dinheiro na
      máquina o preço do produto;
OK 5. Atualizar o preço de um determinado produto, identificado pelo utilizador;
OK 6. Atualizar, numa percentagem, o preço de todos os produtos;
OK 7. Saber o valor, em €, acumulado na máquina até ao momento;
OK 8. Reabastecer a máquina e recolher o dinheiro existente na máquina;
OK 9. Saber o stock total atual (totalidade de produtos existentes na máquina);
OK 10. Saber a informação sobre o(s) produto(s) com quantidade em stock mais baixa;
OK 11.  Calcular a média dos preços dos produtos;
OK 12.  Listar os produtos com preço acima da média.;
OK 13.  Saber a informação sobre o(s) produto(s) com preço mais alto;
OK 14.  Listar para cada tipo de produtos (água, cerveja, etc.), a quantidade de stock atual;
OK 15.  Somatório do valor (em €) de todos os produtos armazenados na máquina (ainda não vendidos);
16.  Listar os tipos de produtos que estão fora do prazo de validade (opcional);


 */

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
  double TotalSales;
};

struct ProductTypeList
{
  char type[100];
  int count;
};

// Declare the function pointer type
typedef void (*MenuFunction)(struct Products pro[][8]);

void MainMenu(struct Products pro[][8]);
void ReturnExitMenu(struct Products pro[][8], MenuFunction MenuChoosen);
void MachineMenu(struct Products pro[][8]);
void ProductMenu(struct Products pro[][8], int xPos, int yPos);
void MoneyMenu(struct Products pro[][8]);
void AlterProductInformation(struct Products pro[][8], int xPos, int yPos);
void showProducts(struct Products pro[][8], int size);
void insertProduct(struct Products pro[][8]);
void checkProduct(struct Products pro[][8]);
void buyProduct(struct Products pro[][8]);
void EachProductSale(struct Products pro[][8]);
void machineMoney(struct Products pro[][8], int size);
void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos);
int getRowColumn(char text[100]);
void changeAllPrices(struct Products pro[][8], int size);
void RefillProductsAndTakeMoney(struct Products pro[][8]);
void CheckStock(struct Products pro[][8]);
void CheckLowStock(struct Products pro[][8]);
void MoneyAverage(struct Products pro[][8]);
void HighPrices(struct Products pro[][8]);
void TypesList(struct Products pro[][8], struct ProductTypeList typeList[], int *typeListSize);
void checkTypeListCount(struct Products pro[][8]);
void VerifyItemsToBeSold(struct Products pro[][8]);

int main()
{

  // Start Products
  struct Products vendingMachine[8][8] =
      {{
          //{Name, Type, Brand, Expiration, Price, Quantity},
          {"Soda", "Beverage", "Coca-Cola", "10/10/2023", 1.50, 4, 4},
          {"Chips", "Snack", "Lays", "10/10/2023", 1.25, 6, 4},
          {"Chocolate Bar", "Snack", "Hershey's", "10/10/2023", 1.75, 2, 4},
          {"Water", "Beverage", "Dasani", "10/10/2023", 1.00, 4, 4},
          {"Granola Bar", "Snack", "Nature Valley", "10/10/2023", 1.50, 5},
          {"Gum", "Candy", "Wrigley's", "10/10/2023", 0.75, 4},
          {"Apple", "Fruit", "Granny Smith", "10/10/2023", 1.25, 3},
          {"Orange Juice", "Beverage", "Tropicana", "10/10/2023", 2.00, 3},
      }};

  // This function gets the standard total sales already define above.
  EachProductSale(vendingMachine);

  // Start The Program Interface
  MainMenu(vendingMachine);

  return 0;
}

void MainMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 4;
  int wrongInput = 0;

  do
  {
    system("clear");

    printf("\t\033[4m\033[1mMain Menu\033[0m\033[0m\n\n");
    printf("1. Vending Machine\n");
    printf("2. Buy Product\n");
    printf("3. Update All Prices (percentage)\n");
    printf("4. Exit\n");

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
      changeAllPrices(pro, 8);
      break;
    case 4:
      system("clear");
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (wrongInput != 0);
}

void StockMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 5;
  int wrongInput = 0;

  do
  {
    system("clear");
    printf("\t\033[4m\033[1mStock Menu\033[0m\033[0m\n\n");
    printf("1. Vending Machine Stock\n");
    printf("2. Vending Machine Types Stock\n");
    printf("3. Low Stock\n");
    printf("4. Restock Machine\n");
    printf("5. Return\n");
    printf("6. Exit\n");

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
      CheckStock(pro);
      break;
    case 2:
      system("clear");
      checkTypeListCount(pro);
      break;
    case 3:
      system("clear");
      CheckLowStock(pro);
      break;
    case 4:
      system("clear");
      RefillProductsAndTakeMoney(pro);
      break;
    case 5:
      system("clear");
      MachineMenu(pro);
      break;
    case 6:
      system("clear");
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (wrongInput != 0);
}

void MoneyMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 6;
  int wrongInput = 0;

  do
  {
    system("clear");
    printf("\t\033[4m\033[1mMoney Menu\033[0m\033[0m\n\n");
    printf("1. Vending Machine Money\n");
    printf("2. Products not sold\n");
    printf("3. Average\n");
    printf("4. Products with High Price\n");
    printf("5. Return\n");
    printf("6. Exit\n");

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
      machineMoney(pro, 8);
      break;
    case 2:
      system("clear");
      VerifyItemsToBeSold(pro);
      break;
    case 3:
      system("clear");
      MoneyAverage(pro);
      break;
    case 4:
      system("clear");
      HighPrices(pro);
      break;
    case 5:
      system("clear");
      MachineMenu(pro);
      break;
    case 6:
      system("clear");
      printf("Empty Field Still on Work\n");
      break;
    }
  } while (wrongInput != 0);
}

void MachineMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 6;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4m\033[1mMachine Menu\033[0m\033[0m\n\n");
    printf("1. Insert Values\n");
    printf("2. Verify Product\n");
    printf("3. Money Information\n");
    printf("4. Stock\n");
    printf("5. Return \n");
    printf("6. End Program \n");

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
      MoneyMenu(pro);
      break;
    case 4:
      StockMenu(pro);
      break;
    case 5:
      MainMenu(pro);
      break;
    case 6:
      system("clear");
      printf("End Program !\n");
      break;
    }
  } while (wrongInput != 0);
}

void ReturnExitMenu(struct Products pro[][8], MenuFunction MenuChoosen)
{
  int choice = 1;
  int totalChoices = 2;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4m\033[1mMenu\033[0m\033[0m\n\n");
    printf("1. Return \n");
    printf("2. End Program \n");

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
      MenuChoosen(pro);
      break;
    case 2:
      printf("Still in Work\n");
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
      system("clear");
      ProductMenu(pro, xPos, yPos);
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
      system("clear");
      MachineMenu(pro);
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

  printf("\n\033[4m\033[1mInsert the Position\033[0m\033[0m\n");
  // This will get the row and column for my two-dimensional array of structs
  int newRow = getRowColumn("Shelf");
  int newColumn = getRowColumn("Product ID");

  // Reduce the Row and Column by one to get the index of the two-dimensional array of structs
  newRow--;
  newColumn--;

  system("clear");
  printf("\n\033[4m\033[1mInsert the following Information\033[0m\033[0m\n\n");
  // This Proccess will define in the two-dimensional array of structs the Attributes of the struct Product
  printf("\033[4mProduct Type:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].type);

  printf("\n\033[4mProduct Name:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].name);

  printf("\n\033[4mProduct Brand:\033[0m ");
  scanf(" %[^\n]", pro[newRow][newColumn].brand);

  printf("\n\033[4mProduct Expiration Date (dd/mm/yyyy):\033[0m ");
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

    printf("\n\033[4mProduct Price (00.00):\033[4m");
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
  printf("\033[4mProduct Sales:\033[0m \033[1m%.2lf€\033[0m;\n", pro[newRow][newColumn].TotalSales);

  ProductMenu(pro, newRow, newColumn);
}

// 4. Simular a compra de um produto pelo utilizador, onde deverá somar ao total dinheiro na máquina o preço do produto;
void buyProduct(struct Products pro[][8])
{
  system("clear");
  showProducts(pro, 8);

  int productAvailable = 1;
  int newRow, newColumn;
  do
  {
    printf("\t\033[4m\033[1mProduct Position\033[0m\033[0m\n");
    newRow = getRowColumn("Shelf");
    newColumn = getRowColumn("Product ID");

    // Reduce Row and Column to access the Product object Ex: pro[0][0] instead of pro[1][1] if i choose the Shelf 1
    newRow--;
    newColumn--;
    system("clear");

    if (pro[newRow][newColumn].qty <= 0)
    {
      productAvailable = 0;
      showProducts(pro, 8);
      printf("The selected product ins't available at the moment.\n");
      printf("\nPlease select a new product.\n\n");
    }
    else
    {
      productAvailable = 1;
    }

  } while (productAvailable != 1);

  printf("\033[4mSelected Product\033[0m: \033[1m%s\033[0m\n\n", pro[newRow][newColumn].name);

  printf("\033[4mProduct Successively \033[1mPurchased\033[0m!\033[0m\n");

  // Add to the Product Object a sold quantity;
  pro[newRow][newColumn].qty--;
  pro[newRow][newColumn].qtySold++;
  pro[newRow][newColumn].TotalSales += pro[newRow][newColumn].price;

  ReturnExitMenu(pro, MainMenu);
}

// Calculates the start product sales and difine the Product.TotalSales to the price * the quantity already sold. So if the price allters after the start count it doesnt influence the quantity money inside the machine before that change.
void EachProductSale(struct Products pro[][8])
{
  // double totalMachine = 0.0;
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      pro[i][j].TotalSales = pro[i][j].qtySold * pro[i][j].price;
      //  totalMachine += pro[i][j].TotalSales;
    }
  }
  // printf("%.2lf", totalMachine);
}

// 7. Saber o valor, em €, acumulado na máquina até ao momento;
void machineMoney(struct Products pro[][8], int size)
{
  double moneyOnMachine = 0.0;
  for (int i = 0; i < size; i++)
  {
    for (int j = 0; j < size; j++)
    {
      moneyOnMachine += pro[i][j].TotalSales;
    }
  }

  system("clear");

  printf("Inside the machine there is a total of \033[4m\033[1m%.2lf€\033[0m\033[0m!\n", moneyOnMachine);

  ReturnExitMenu(pro, MoneyMenu);
}

// 5. Atualizar o preço de um determinado produto, identificado pelo utilizador;
void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos)
{
  // This Process runs until a valid input is put and checks if contains Characters and restart the loop until it goes ok
  int correctPriceInput = 1;
  int priceConfirmed = 0;
  double oldPrice = pro[xPos][yPos].price;

  do
  {
    system("clear");
    if (correctPriceInput == 0)
    {
      system("clear");
      printf("\033[4mPlease insert a\033[1m Correct Input '00.00' and bigger then 0\033[0m for a Price.\033[0m\n");
    }

    printf("\n\033[4mNew Product Price (00.00):\033[0m");
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
  printf("\nNew Product %s Price altered from %.2lf€ to %.2lf€\n", pro[xPos][yPos].name, oldPrice, pro[xPos][yPos].price);

  ReturnExitMenu(pro, MachineMenu);
}

// this function returns a value between 1 and 8 to get the Shelf and Product ID when asked.
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

// 6. Atualizar, numa percentagem, o preço de todos os produtos;
void changeAllPrices(struct Products pro[][8], int size)
{
  system("clear");
  int wrongInput = 0;
  double percentage = 0.0;
  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("Chose a percentage to be added to all prices:");

    if (wrongInput == 1)
      printf("\n\033[4mPlease insert a valid Number between 1 and 100.\033[0m\n");

    printf("\nPercentage: ");
    if (scanf("%lf", &percentage) != 1)
    {
      wrongInput = 1;
      while (getchar() != '\n')
        ;
      continue;
    }
    else if (percentage < 1 || percentage > 100)
    {
      wrongInput = 1;
    }
    else
    {
      percentage /= 100;
      wrongInput = 0;
    }

    getchar();
  } while (wrongInput == 1);

  double valueToBeAdded = 0.0;

  // printf("Percentage: %.2lf\n", percentage);

  for (int i = 0; i < size; i++)
  {
    for (int j = 0; j < size; j++)
    {
      valueToBeAdded = pro[i][j].price * percentage;
      //  printf("Value to be added: %.2lf\n", valueToBeAdded);
      // printf("Before Percentage: %.2lf\n", pro[i][j].price);
      pro[i][j].price += valueToBeAdded;
      // printf("After Percentage: %.2lf\n", pro[i][j].price);
    }
  }
  system("clear");

  printf("All prices were updated!\n");

  ReturnExitMenu(pro, MainMenu);
}

// 8. Reabastecer a máquina e recolher o dinheiro existente na máquina;
void RefillProductsAndTakeMoney(struct Products pro[][8])
{
  system("clear");

  printf("All stocks Refilled and Money Removed form Vending Machine.\n");

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strcmp(pro[i][j].name, "Empty") != 0)
      {
        pro[i][j].qty = 10;
        pro[i][j].qtySold = 0;
        pro[i][j].TotalSales = 0.0;
      }
    }
  }

  ReturnExitMenu(pro, StockMenu);
}

// 9. Saber o stock total atual (totalidade de produtos existentes na máquina);
void CheckStock(struct Products pro[][8])
{
  system("clear");

  int stock = 0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      stock += pro[i][j].qty;
    }
  }

  printf("\033[4mThis Vending Machine contains in total\033[0m: \033[1m%d Products\033[0m.\n", stock);

  ReturnExitMenu(pro, StockMenu);
}

// 10.  Saber a informação sobre o(s) produto(s) com quantidade em stock mais baixa;
void CheckLowStock(struct Products pro[][8])
{
  system("clear");
  int min = 5;

  printf("\tProducts below \033[4m\033[1m%d\033[0m\033[0m units.\n", min);

  int existProducts = 0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strcmp(pro[i][j].name, "Empty") != 0)
      {
        if (pro[i][j].qty < min)
        {
          existProducts = 1;
          printf("\nProduct \033[4m%s\033[0m as a low stock with: \033[1m%d\033[0m\n", pro[i][j].name, pro[i][j].qty);
        }
      }
    }
  }

  if (existProducts == 0)
    printf("\nDoens't exist products with low stock.\n");

  ReturnExitMenu(pro, StockMenu);
}

// 11.  Calcular a média dos preços dos produtos;
void MoneyAverage(struct Products pro[][8])
{
  double average = 0.0;
  int products = 0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      average += pro[i][j].price;

      if (pro[i][j].price > 0)
        products++;
    }
  }

  average /= products;

  int areProducts = 0;

  printf("\tProducts \033[4maverage price %.2lf€\033[0m. \n", average);

  printf("\nProducts \033[4mabove average\033[0m:\n\n");

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (pro[i][j].price > average)
      {
        printf("=> %s price (%.2lf€) is above average.\n", pro[i][j].name, pro[i][j].price);
        areProducts = 1;
      }
    }
  }

  if (areProducts == 0)
    printf("There are no products above the average.\n");

  ReturnExitMenu(pro, MoneyMenu);
}

// 13.  Saber a informação sobre o(s) produto(s) com preço mais alto;
void HighPrices(struct Products pro[][8])
{

  double highPrice = 1.50;
  int qtyProducts = 0;

  printf("\tProducts above \033[4m\033[1m%.2lf€\033[0m\033[0m units.\n", highPrice);

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (pro[i][j].price >= highPrice)
      {
        qtyProducts++;
        printf("\n\033[4m%s\033[0m is a product with \033[1mhigh price\033[0m with \033[4m%.2lf€\033[0m.\n", pro[i][j].name, pro[i][j].price);
      }
    }
  }

  if (qtyProducts <= 0)
    printf("\n\033[4mThere aren't Products above the High Price.\033[0m\n");

  ReturnExitMenu(pro, MoneyMenu);
}

// 14.  Listar para cada tipo de produtos (água, cerveja, etc.), a quantidade de stock atual;
void TypesList(struct Products pro[][8], struct ProductTypeList typeList[], int *typeListSize)
{
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      char currentType[100];
      if (strlen(pro[i][j].type) != 0)
      {

        strcpy(currentType, pro[i][j].type);

        int index = -1;
        // Check if the type already exists in typeList
        for (int k = 0; k < *typeListSize; k++)
        {
          if (strcmp(typeList[k].type, currentType) == 0)
          {
            index = k;
            break;
          }
        }

        // If the type doesn't exist in typeList, add it
        if (index == -1)
        {
          strcpy(typeList[*typeListSize].type, currentType);

          typeList[*typeListSize].count = 1;

          (*typeListSize)++;
        }
        else
        {
          // If the type already exists, increment the count
          typeList[index].count++;
        }
      }
    }
  }
}

void checkTypeListCount(struct Products pro[][8])
{

  struct ProductTypeList typeList[64]; // Assuming a maximum of 64 different types
  int typeListSize = 0;

  TypesList(pro, typeList, &typeListSize);

  // Now typeList contains the unique types and their counts
  for (int i = 0; i < typeListSize; i++)
  {
    printf("Type: %s, Count: %d\n", typeList[i].type, typeList[i].count);
  }

  ReturnExitMenu(pro, StockMenu);
}

// 15.  Somatório do valor (em €) de todos os produtos armazenados na máquina (ainda não vendidos);
void VerifyItemsToBeSold(struct Products pro[][8])
{

  double price = 0.0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strcmp(pro[i][j].name, "Empty") != 0)
      {
        price += pro[i][j].price * pro[i][j].qty;
        printf("Product: %s In Machine: %d Price: %.2lf€ To be sold: %.2lf€\n", pro[i][j].name, pro[i][j].qty, pro[i][j].price, price);
      }
    }
  }

  printf("Total %.2lf€\n", price);

  ReturnExitMenu(pro, MoneyMenu);
}