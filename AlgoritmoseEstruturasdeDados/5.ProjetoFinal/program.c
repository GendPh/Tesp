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
OK 11. Calcular a média dos preços dos produtos;
OK 12. Listar os produtos com preço acima da média.;
OK 13. Saber a informação sobre o(s) produto(s) com preço mais alto;
OK 14. Listar para cada tipo de produtos (água, cerveja, etc.), a quantidade de stock atual;
OK 15. Somatório do valor (em €) de todos os produtos armazenados na máquina (ainda não vendidos);
16. Listar os tipos de produtos que estão fora do prazo de validade (opcional);
*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#define UserSize 100

typedef struct sUser
{
  int id;
  char name[100];
  char pass[100];
  int admin;
} Users;

typedef struct sExpiration
{

  int day;
  int month;
  int year;

} Expiration;

struct Products
{
  char name[100];
  char type[100];
  char brand[100];
  Expiration expDate;
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
typedef void (*Menu)(struct Products pro[][8], Users user[], int userState);

void StartProgramMenu(Users user[], struct Products pro[][8]);

void SignIn(Users user[], struct Products pro[][8]);

void MenuTitle(char title[100]);
void MenuLinks(int orderNumber, char text[100]);
void ValidInput(int maxChoice);

// Admin Menu
void AdminMenu(struct Products pro[][8], Users user[], int userState);
// Client Menu
void ClientMenu(struct Products pro[][8], Users user[], int userState);

// Menu of the vending machine
void MachineMenu(struct Products pro[][8], Users user[], int userState);
// Show all Products
void ShowProducts(struct Products pro[][8]);
// Function to buy a product from the vending machine
void BuyProduct(struct Products pro[][8], Users user[], int userState);

// Menu of Stock information
void StockMenu(struct Products pro[][8]);
// Function to inform the total products quantity the is inside the vending machine
void CheckStock(struct Products pro[][8]);
// Function to Separate All Products Types
void TypesList(struct Products pro[][8], struct ProductTypeList typeList[], int *typeListSize);
// Function to Count all the Separated All Products Types
void CheckTypeListCount(struct Products pro[][8]);
// Check stock below 5 units
void CheckLowStock(struct Products pro[][8]);
// Refill every product to contain 10 units and remove the money from machine
void RefillProducts(struct Products pro[][8]);

// Menu of Money information
void MoneyMenu(struct Products pro[][8]);
// Verify each item sales
void MachineMoney(struct Products pro[][8]);
// Reset all products sales
void RemoveMoney(struct Products pro[][8]);

// Menu of Products information
void ProductMenu(struct Products pro[][8], Users user[]);
// Verify information about a product
void CheckProduct(struct Products pro[][8]);
// Add a product to the next available position
void insertProduct(struct Products pro[][8]);
// Menu of the selected product
void ProductOption(struct Products pro[][8], int xPos, int yPos);
// Remove Product
void RemoveProduct(struct Products pro[][8], int xPos, int yPos);
// Access options to change individual information about a selected product
void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos);
// Let me alter a specific Product a specific price
void AlterProductInformation(struct Products pro[][8], int xPos, int yPos);
// Checks the average Price of each item
void MoneyAverage(struct Products pro[][8]);
// Verify each items quantity left to be sold and show the total
void VerifyItemsToBeSold(struct Products pro[][8]);
// Verify all products that are above a certain value
void HighPrices(struct Products pro[][8]);
// Change all prices throw a percentage
void ChangeAllPrices(struct Products pro[][8]);

// Show product information
void ProductTotalInfo(struct Products product, int shelf, int productID);
// Menu To return to last Menu or end Program
void ReturnExitMenu(struct Products pro[][8], MenuFunction MenuChoosen);

void Return(struct Products pro[][8], Menu MenuChoosen, Users user[], int userState);
// This Function checks the Sales of each item on the start of program.
void EachProductSale(struct Products pro[][8]);
// Function to return a int from 1 and 8
int getRowColumn(char text[100]);
// End Game
void EndProgram();

int main()
{
  Users users[100] = {
      {1, "Gabriel", "Teste1234.", 1},
      {2, "Gabriel2", "Teste1234.", 0},
  };

  // Start Products
  struct Products vendingMachine[8][8] =
      {
          {
              //{Name, Type, Brand, Expiration, Price, Quantity, Qty Sold}
              {"Soda", "Beverage", "Coca-Cola", {12, 12, 2023}, 1.50, 4, 4},
              {"Chips", "Snack", "Lays", {12, 12, 2023}, 1.25, 6, 4},
              {"Chocolate Bar", "Snack", "Hershey's", {12, 12, 2023}, 1.75, 2, 4},
              {"Water", "Beverage", "Dasani", {12, 12, 2023}, 1.00, 4, 4},
              {"Granola Bar", "Snack", "Nature Valley", {12, 12, 2023}, 1.50, 5},
              {"Gum", "Candy", "Wrigley's", {12, 12, 2023}, 0.75, 4},
              {"Apple", "Fruit", "Granny Smith", {12, 12, 2023}, 1.25, 3},
              {"Orange Juice", "Beverage", "Tropicana", {12, 12, 2023}, 2.00, 7},
          },
      };

  // This function gets the standard total sales already define above.
  EachProductSale(vendingMachine);

  StartProgramMenu(users, vendingMachine);

  return 0;
}

void StartProgramMenu(Users user[], struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    // system("clear");
    MenuTitle("Sign Up / Sign In");
    MenuLinks(1, "Sign Up");
    MenuLinks(2, "Sign In");
    MenuLinks(3, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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

      break;
    case 2:
      SignIn(user, pro);
      break;
    case 3:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}

void SignIn(Users user[], struct Products pro[][8])
{
  system("clear");

  int existUser = 1;

  int userId = -1;
  char userName[100];
  char userPassword[100];

  int correctPassword = 0;
  int existName = 0;

  do
  {
    if (existUser == 0)
      system("clear");

    MenuTitle("Sign In");

    if (existUser == 0)
      printf("Incorrect Input.\n\n");

    printf("Name: ");
    scanf("%99s", userName);

    for (int i = 0; i < UserSize; i++)
    {
      if (user[i].id == 0)
        break;

      if (strcmp(user[i].name, userName) == 0)
      {
        existName = 1;
        userId = user[i].id - 1;
        break;
      }
    }

    printf("Password: ");
    scanf("%99s", userPassword);

    if (strcmp(user[userId].pass, userPassword) == 0)
      correctPassword = 1;

    existUser = (existName == 1 && correctPassword == 1) ? 1 : 0;

  } while (existUser == 0);

  switch (user[userId].admin)
  {
  case 0:
    ClientMenu(pro, user, user[userId].admin);
    break;
  case 1:
    AdminMenu(pro, user, user[userId].admin);
    break;
  }
}

void AdminMenu(struct Products pro[][8], Users user[], int userState)
{
  int choice = 1;
  int totalChoices = 6;
  int wrongInput = 0;

  do
  {
    system("clear");
    MenuTitle("Main Menu");
    MenuLinks(1, "Vending Machine ");
    MenuLinks(2, "Vending Machine Stocks");
    MenuLinks(3, "Vending Machine Money");
    MenuLinks(4, "Vending Machine Products");
    MenuLinks(5, "Log Out");
    MenuLinks(6, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      MachineMenu(pro, user, userState);
      break;
    case 2:
      //  StockMenu(pro);
      break;
    case 3:
      //  MoneyMenu(pro);
      break;
    case 4:
      //  ProductMenu(pro);
      break;
    case 5:
      StartProgramMenu(user, pro);
      break;
    case 6:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}

void ClientMenu(struct Products pro[][8], Users user[], int userState)
{
  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    system("clear");
    MenuTitle("Main Menu");
    MenuLinks(1, "Vending Machine ");
    MenuLinks(2, "Logout");
    MenuLinks(3, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      MachineMenu(pro, user, userState);
      break;
    case 2:
      StartProgramMenu(user, pro);
      break;
    case 3:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}

// Vending Machine
void MachineMenu(struct Products pro[][8], Users user[], int userState)
{
  // Clear Terminal
  system("clear");
  // This process will check if there is at least 1 product inside
  int asItems = 0;
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (pro[i][j].qty > 0)
      {
        asItems = 1;
        break;
      }
    }
  }

  if (asItems == 1)
  {

    ShowProducts(pro);

    int choice = 1;
    int totalChoices = 3;
    int wrongInput = 0;

    do
    {
      if (wrongInput == 1)
      {
        system("clear");
        ShowProducts(pro);
      }

      MenuTitle("Vending Machine Options");
      MenuLinks(1, "Buy Product ");
      MenuLinks(2, "Return");
      MenuLinks(3, "Exit Program");

      if (wrongInput == 1)
        ValidInput(totalChoices);

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
        BuyProduct(pro, user, userState);
        break;
      case 2:
        (userState == 1) ? AdminMenu(pro, user, userState) : ClientMenu(pro, user, userState);
        break;
      case 3:
        EndProgram();
        break;
      }
    } while (wrongInput != 0);
  }
  else
  {
    printf("\n\033[4mThis Vending Machine doesn't contain Products\033[0m.\n");
    // Menu to return back or end Program
    // ReturnExitMenu(pro, MainMenu, user, userState);
    (userState == 0) ? Return(pro, ClientMenu, user, userState) : Return(pro, AdminMenu, user, userState);
  }
}
// 2. Listar a informação de todos os produtos disponíveis;
void ShowProducts(struct Products pro[][8])
{
  // Clear Terminal
  system("clear");

  printf("\033[4m\033[1mVending Machine Products\033[0m\033[0m\n\n");

  // Temporary variable to collect the product name
  char tempName[100];

  // For loop for the shelf
  for (int i = 0; i < 8; ++i)
  {
    // Variable just to define an Product Position
    int id = 1;
    printf("\t\033[4mShelf %d\033[0m\n", i + 1);
    printf("\n\033[4mID\033[0m | \033[4mName\033[0m | \033[4mQuantity\033[0m | \033[4mPrice\033[0m\n\n");

    // For loop for the products inside the shelf
    for (int j = 0; j < 8; ++j)
    {
      // If the Product Name is empty i will tell set tempName as "Empty" other wise it will be the Product Name set in the Struct
      (strlen(pro[i][j].name) == 0) ? strcpy(tempName, "Empty") : strcpy(tempName, pro[i][j].name);

      printf(" => \033[1m%d\033[0m | \033[1m%s\033[0m | \033[1m%d\033[0m | \033[1m%.2f€\033[0m |\n\n", id++, tempName, pro[i][j].qty, pro[i][j].price);
    }
  }
}
// 4. Simular a compra de um produto pelo utilizador, onde deverá somar ao total dinheiro na máquina o preço do produto;
void BuyProduct(struct Products pro[][8], Users user[], int userState)
{
  system("clear");
  ShowProducts(pro);

  int productAvailable = 1;
  int newRow, newColumn;
  do
  {
    printf("\t\033[4mProduct Position\033[0m\n");
    newRow = getRowColumn("Shelf");
    newColumn = getRowColumn("Product ID");

    // Reduce Row and Column to access the Product object Ex: pro[0][0] instead of pro[1][1] if i choose the Shelf 1
    newRow--;
    newColumn--;
    system("clear");

    if (pro[newRow][newColumn].qty <= 0)
    {
      productAvailable = 0;
      ShowProducts(pro);
      printf("The selected product \033[1mins't available at the moment\033[0m.\n");
      printf("\nPlease select a new product.\n\n");
    }
    else
    {
      productAvailable = 1;
    }

  } while (productAvailable != 1);

  printf("\nSelected Product: \033[1m%s\033[0m\n\n", pro[newRow][newColumn].name);

  printf("Product Successively \033[1mPurchased\033[0m!\n");

  // Add to the Product Object a sold quantity;
  pro[newRow][newColumn].qty--;
  pro[newRow][newColumn].qtySold++;
  pro[newRow][newColumn].TotalSales += pro[newRow][newColumn].price;

  // MachineMenu(struct Products pro[][8], Users user[], int userState);
  Return(pro, MachineMenu, user, userState);
  //  ReturnExitMenu(pro, MachineMenu);
}

// All Stock Information Menu
void StockMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 6;
  int wrongInput = 0;

  do
  {
    system("clear");

    MenuTitle("Stock Menu");
    MenuLinks(1, "Products Quantity");
    MenuLinks(2, "Types Stock");
    MenuLinks(3, "Low Stock");
    MenuLinks(4, "Restock Machine");
    MenuLinks(5, "Return");
    MenuLinks(6, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      // CheckStock(pro);
      break;
    case 2:
      // CheckTypeListCount(pro);
      break;
    case 3:
      // CheckLowStock(pro);
      break;
    case 4:
      // RefillProducts(pro);
      break;
    case 5:
      // ClientMenu(pro);
      break;
    case 6:
      // EndProgram();
      break;
    }
  } while (wrongInput != 0);
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
      if (strlen(pro[i][j].name) != 0)
        stock += pro[i][j].qty;
    }
  }

  printf("\n\033[4mThis Vending Machine contains in total\033[0m \033[1m%d Products\033[0m.\n", stock);

  // ReturnExitMenu(pro, StockMenu);
}
// 14. Listar para cada tipo de produtos (água, cerveja, etc.), a quantidade de stock atual;
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

          typeList[*typeListSize].count += pro[i][j].qty;

          (*typeListSize)++;
        }
        else
        {
          // If the type already exists, increment the count
          typeList[index].count += pro[i][j].qty;
        }
      }
    }
  }
}
void CheckTypeListCount(struct Products pro[][8])
{
  system("clear");
  struct ProductTypeList typeList[64]; // Assuming a maximum of 64 different types
  int typeListSize = 0;

  TypesList(pro, typeList, &typeListSize);

  // Now typeList contains the unique types and their counts
  for (int i = 0; i < typeListSize; i++)
  {
    printf("\n\033[4mType\033[0m: \033[1m%s\033[0m, \033[4mCount\033[0m: \033[1m%d\033[0m\n", typeList[i].type, typeList[i].count);
  }

  // ReturnExitMenu(pro, StockMenu);
}
// 10.  Saber a informação sobre o(s) produto(s) com quantidade em stock mais baixa;
void CheckLowStock(struct Products pro[][8])
{
  system("clear");
  int min = 5;

  printf("\n\t\033[4mProducts below %d units.\033[0m\n", min);

  int existProducts = 0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) != 0)
      {
        if (pro[i][j].qty < min)
        {
          existProducts = 1;
          printf("\nProduct \033[1m%s\033[0m as a low stock with: \033[1m%d\033[0m\n", pro[i][j].name, pro[i][j].qty);
        }
      }
    }
  }

  if (existProducts == 0)
    printf("\n\033[1mNo products\033[0m above %d.\n", min);

  // ReturnExitMenu(pro, StockMenu);
}
// 8. Reabastecer a máquina e recolher o dinheiro existente na máquina;
void RefillProducts(struct Products pro[][8])
{
  system("clear");

  printf("\n\033[4mAll stocks Refilled from this Vending Machine\033[0m.\n");

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) != 0)
      {
        pro[i][j].qty = 10;
      }
    }
  }

  // ReturnExitMenu(pro, StockMenu);
}

// All Money Information Menu
void MoneyMenu(struct Products pro[][8])
{
  int choice = 1;
  int totalChoices = 4;
  int wrongInput = 0;

  do
  {
    system("clear");

    MenuTitle("Money Menu");
    MenuLinks(1, "Money Inside");
    MenuLinks(2, "Remove Money");
    MenuLinks(3, "Return");
    MenuLinks(4, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      // MachineMoney(pro);
      break;
    case 2:
      // RemoveMoney(pro);
      break;
    case 3:
      // ClientMenu(pro);
      break;
    case 4:
      // EndProgram();
      break;
    }
  } while (wrongInput != 0);
}
// 7. Saber o valor, em €, acumulado na máquina até ao momento;
void MachineMoney(struct Products pro[][8])
{
  system("clear");

  double moneyOnMachine = 0.0;
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      moneyOnMachine += pro[i][j].TotalSales;
    }
  }

  printf("\nInside the machine there is a total of \033[4m\033[1m%.2lf€\033[0m\033[0m!\n", moneyOnMachine);

  // ReturnExitMenu(pro, MoneyMenu);
}
// 8. Reabastecer a máquina e recolher o dinheiro existente na máquina;
void RemoveMoney(struct Products pro[][8])
{
  system("clear");
  printf("\nAll \033[1mmoney removed\033[0m from this vending machine.\n");

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) != 0)
      {
        pro[i][j].qtySold = 0;
        pro[i][j].TotalSales = 0.0;
      }
    }
  }

  // ReturnExitMenu(pro, MoneyMenu);
}

// Products Menu
void ProductMenu(struct Products pro[][8], Users user[])
{
  system("clear");

  int choice = 1;
  int totalChoices = 8;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    MenuTitle("Product Menu");
    MenuLinks(1, "Check Product");
    MenuLinks(2, "Add Product");
    MenuLinks(3, "Products not sold");
    MenuLinks(4, "Average product price");
    MenuLinks(5, "Products with high price");
    MenuLinks(6, "Change all prices");
    MenuLinks(7, "Return");
    MenuLinks(8, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      // CheckProduct(pro);
      break;
    case 2:
      // insertProduct(pro);
      break;
    case 3:
      // VerifyItemsToBeSold(pro);
      break;
    case 4:
      // MoneyAverage(pro);
      break;
    case 5:
      // HighPrices(pro);
      break;
    case 6:
      // ChangeAllPrices(pro);
      break;
    case 7:
      // ClientMenu(pro, user);
      break;
    case 8:
      // EndProgram();
      break;
    }
  } while (wrongInput != 0);
}
// 1. Inserir um novo produto, dado o número da prateleira e posição.
void insertProduct(struct Products pro[][8])
{
  system("clear");

  int spaceAvailable = 0;
  int newRow;
  int newColumn;

  // This Process checks if there is any empty space to be able to add a new Product
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) == 0)
      {
        spaceAvailable = 1;
        newRow = i;
        newColumn = j;
        break;
      }
    }
    if (spaceAvailable == 1)
      break;
  }

  if (spaceAvailable == 1)
  {
    printf("\nInsert the following Information\n\n");
    // This Proccess will define in the two-dimensional array of structs the Attributes of the struct Product
    printf("\033[4mProduct Type:\033[0m ");
    scanf(" %[^\n]", pro[newRow][newColumn].type);

    printf("\n\033[4mProduct Name:\033[0m ");
    scanf(" %[^\n]", pro[newRow][newColumn].name);

    printf("\n\033[4mProduct Brand:\033[0m ");
    scanf(" %[^\n]", pro[newRow][newColumn].brand);

    // printf("\n\033[4mProduct Expiration Date (dd/mm/yyyy):\033[0m ");
    // scanf(" %[^\n]", pro[newRow][newColumn].valDate);

    int correctDay = 2;
    do
    {
      if (correctDay == 0)
      {
        system("clear");
        printf("\nPlease insert a valid \033[1mDay between 1 and 31\033[0m.\n");
      }

      printf("\nProduct Expiration \033[1mDay\033[0m:");
      if (scanf("%d", &pro[newRow][newColumn].expDate.day) != 1)
      {
        correctDay = 0;
        while (getchar() != '\n')
          ;
        continue;
      }
      else if (pro[newRow][newColumn].expDate.day < 1 || pro[newRow][newColumn].expDate.day > 31)
      {
        correctDay = 0;
      }
      else
      {
        correctDay = 1;
      }

      getchar();
    } while (correctDay == 0);

    int correctMonth = 2;
    int wrongMonth = 0;
    do
    {
      if (correctMonth == 0)
      {
        system("clear");
        printf("\nPlease insert a valid \033[1mMonth between 1 and 12\033[0m.\n");
      }

      if (wrongMonth == 1)
        printf("This month \033[1mdoens't contain %d of days\033[0m.\n", pro[newRow][newColumn].expDate.day);

      printf("\nProduct Expiration \033[1mMonth\033[0m:");
      if (scanf("%d", &pro[newRow][newColumn].expDate.month) != 1)
      {
        correctMonth = 0;
        while (getchar() != '\n')
          ;
        continue;
      }
      else if (pro[newRow][newColumn].expDate.month < 1 || pro[newRow][newColumn].expDate.month > 12)
      {
        correctMonth = 0;
      }
      else
      {
        correctMonth = 1;
      }

      if (pro[newRow][newColumn].expDate.day == 31 && pro[newRow][newColumn].expDate.month == 2 ||
          pro[newRow][newColumn].expDate.day == 31 && pro[newRow][newColumn].expDate.month == 4 ||
          pro[newRow][newColumn].expDate.day == 31 && pro[newRow][newColumn].expDate.month == 6 ||
          pro[newRow][newColumn].expDate.day == 31 && pro[newRow][newColumn].expDate.month == 9 ||
          pro[newRow][newColumn].expDate.day == 31 && pro[newRow][newColumn].expDate.month == 11)
      {
        correctMonth = 0;
        wrongMonth = 1;
      }
      else if (pro[newRow][newColumn].expDate.day == 30 && pro[newRow][newColumn].expDate.month == 2)
      {
        correctMonth = 0;
        wrongMonth = 1;
      }
      else
      {
        correctMonth = 1;
        wrongMonth = 0;
      }

      getchar();
    } while (correctMonth == 0);

    int correctYear = 2;
    time_t currentTime;
    struct tm *localTime;
    time(&currentTime);
    localTime = localtime(&currentTime);
    // Extract the year
    int year = localTime->tm_year + 1900;

    do
    {
      if (correctYear == 0)
      {
        system("clear");
        printf("\nPlease insert a \033[1myear above %d\033[0m.\n", year);
      }

      printf("\nProduct Expiration \033[1mYear\033[0m:");
      if (scanf("%d", &pro[newRow][newColumn].expDate.year) != 1)
      {
        correctYear = 0;
        while (getchar() != '\n')
          ;
        continue;
      }
      else if (pro[newRow][newColumn].expDate.year < year)
      {
        correctYear = 0;
      }
      else
      {
        correctYear = 1;
      }

      getchar();
    } while (correctYear == 0);

    // This Process runs until a valid input is put and checks if contains Characters and restart the loop until it goes ok
    int correctPriceInput = 1;
    int priceConfirmed = 0;
    do
    {
      if (correctPriceInput == 0)
      {
        system("clear");
        printf("\nPlease insert a \033[1mCorrect Input '00.00'\033[0m for the product price.\n");
      }

      printf("\n\033[4mProduct Price (00.00):\033[0m");
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

    ProductTotalInfo(pro[newRow][newColumn], newRow, newColumn);
  }
  else
  {
    printf("\n\033[1mNo available positions\033[0m in this Vending Machine\n");
  }

  // ReturnExitMenu(pro, ProductMenu);
}
// 3. Listar a informação sobre um produto específico, dada a localização (prateleira e posição);
void CheckProduct(struct Products pro[][8])
{
  // Clear the Terminal
  system("clear");
  ShowProducts(pro);

  int newRow, newColumn;
  int existProduct = 1;

  do
  {
    if (existProduct == 0)
    {
      system("clear");
      ShowProducts(pro);
      printf("\nThis Position is \033[1mempty\033[0m. Try a new one.\n\n");
    }

    printf("\t\033[4mProduct Position\033[0m\n");
    newRow = getRowColumn("Product Shelf");
    newColumn = getRowColumn("Product ID");

    existProduct = (strlen(pro[newRow - 1][newColumn - 1].name) != 0) ? 1 : 0;

  } while (existProduct == 0);

  newRow--;
  newColumn--;

  ProductOption(pro, newRow, newColumn);
}
// This ProductOption gives a menu to access the personal information about the Product Selected in CheckProduct
void ProductOption(struct Products pro[][8], int xPos, int yPos)
{

  ProductTotalInfo(pro[xPos][yPos], xPos, yPos);

  int choice = 1;
  int totalChoices = 5;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    MenuTitle("Product Menu");
    MenuLinks(1, "Change Details");
    MenuLinks(2, "Remove Product");
    MenuLinks(3, "Select a new Product");
    MenuLinks(4, "Return");
    MenuLinks(5, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      // AlterProductInformation(pro, xPos, yPos);
      break;
    case 2:
      // RemoveProduct(pro, xPos, yPos);
      break;
    case 3:
      // CheckProduct(pro);
      break;
    case 4:
      // ProductMenu(pro);
      break;
    case 5:
      // EndProgram();
      break;
    }
  } while (wrongInput != 0);
}
// 1. Inserir um novo produto, dado o número da prateleira e posição.
void RemoveProduct(struct Products pro[][8], int xPos, int yPos)
{
  system("clear");

  printf("\nThe Product \033[1m%s was successefully removed\033[0m from this Vending Machine.\n", pro[xPos][yPos].name);

  strcpy(pro[xPos][yPos].type, "");
  strcpy(pro[xPos][yPos].name, "");
  strcpy(pro[xPos][yPos].brand, "");
  pro[xPos][yPos].expDate.day = 0;
  pro[xPos][yPos].expDate.month = 0;
  pro[xPos][yPos].expDate.year = 0;
  pro[xPos][yPos].price = 0.0;
  pro[xPos][yPos].qty = 0;
  pro[xPos][yPos].qtySold = 0;
  pro[xPos][yPos].TotalSales = 0;

  // ReturnExitMenu(pro, ProductMenu);
}
// This Function let me choose to alter personal information about a Product. At the Moment i can only alter the price
void AlterProductInformation(struct Products pro[][8], int xPos, int yPos)
{
  system("clear");

  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4mProduct Information\033[0m\n\n");
    ProductTotalInfo(pro[xPos][yPos], xPos, yPos);

    MenuTitle("Options Menu");
    MenuLinks(1, "Change Product Price");
    MenuLinks(2, "Return To Product Menu");
    MenuLinks(3, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      ProductOption(pro, xPos, yPos);
      break;
    case 3:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}
// 5. Atualizar o preço de um determinado produto, identificado pelo utilizador;
void ChangeProductPrice(struct Products pro[][8], int xPos, int yPos)
{
  int correctPriceInput = 1;
  int priceConfirmed = 0;
  double oldPrice = pro[xPos][yPos].price;

  // This Process runs until a valid input is put and checks if contains Characters and restart the loop until it goes ok
  do
  {
    system("clear");
    printf("\n\t%s old price: %.2lf€\n\n", pro[xPos][yPos].name, oldPrice);

    if (correctPriceInput == 0)
    {
      system("clear");
      printf("\033[4mPlease insert a\033[1m Correct Input '00.00' and bigger then 0\033[0m for a Price.\033[0m\n");
    }

    printf("\033[4mNew Price\033[0m: ");
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
  printf("\n\033[1m%s\033[0m price altered from \033[4m%.2lf€ to %.2lf€\033[0m.\n", pro[xPos][yPos].name, oldPrice, pro[xPos][yPos].price);

  int choice = 1;
  int totalChoices = 3;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    MenuTitle("Options Menu");
    MenuLinks(1, "Return to Options Menu");
    MenuLinks(2, "Return to Product Menu");
    MenuLinks(3, "Exit Program");

    if (wrongInput == 1)
      ValidInput(totalChoices);

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
      AlterProductInformation(pro, xPos, yPos);
      break;
    case 2:
      ProductOption(pro, xPos, yPos);
      break;
    case 3:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
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

  system("clear");

  printf("\n\tProducts \033[1maverage price is %.2lf€\033[0m. \n", average);

  printf("\nProducts \033[4mabove average\033[0m:\n\n");

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (pro[i][j].price > average)
      {
        printf("=> \033[1m%s\033[0m price (%.2lf€) \033[1mis above average\033[0m.\n", pro[i][j].name, pro[i][j].price);
        areProducts = 1;
      }
    }
  }

  if (areProducts == 0)
    printf("There are no products above the average.\n");

  // ReturnExitMenu(pro, ProductMenu);
}
// 15.  Somatório do valor (em €) de todos os produtos armazenados na máquina (ainda não vendidos);
void VerifyItemsToBeSold(struct Products pro[][8])
{
  system("clear");

  printf("\n\t\033[4mQuantity of Money in Products inside\033[0m\n");

  double priceNotSold = 0.0;
  double total = 0.0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) != 0)
      {
        priceNotSold += pro[i][j].price * pro[i][j].qty;
        total += priceNotSold;
        printf("\n Product \033[1m%s %.2lf€\033[0m\n", pro[i][j].name, pro[i][j].price);
        printf("  Quantity \033[1m%d\033[0m | Value: \033[1m%.2lf€\033[0m\n", pro[i][j].qty, priceNotSold);
      }
      priceNotSold = 0.0;
    }
  }

  printf("\n There is a total of \033[1m%.2lf€\033[0m in this Vending Machine.\n", total);

  // ReturnExitMenu(pro, ProductMenu);
}
// 13.  Saber a informação sobre o(s) produto(s) com preço mais alto;
void HighPrices(struct Products pro[][8])
{

  system("clear");

  double highPrice = 1.50;
  int qtyProducts = 0;

  printf("\n\tProducts above \033[1m%.2lf€\033[0m.\n", highPrice);

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (pro[i][j].price >= highPrice)
      {
        qtyProducts++;
        printf("\n\033[1m%s\033[0m as a \033[1mhigh price\033[0m with \033[1m%.2lf€\033[0m.\n", pro[i][j].name, pro[i][j].price);
      }
    }
  }

  if (qtyProducts <= 0)
    printf("\n\033[1mNo Products\033[0m above the High Price.\n");

  // ReturnExitMenu(pro, ProductMenu);
}
// 6. Atualizar, numa percentagem, o preço de todos os produtos;
void ChangeAllPrices(struct Products pro[][8])
{
  system("clear");

  int existProduct = 0;

  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
    {
      if (strlen(pro[i][j].name) != 0)
      {
        existProduct = 1;
        break;
      }
    }
    if (existProduct == 1)
      break;
  }

  if (existProduct == 1)
  {
    int wrongInput = 0;
    double percentage = 0.0;

    do
    {
      if (wrongInput == 1)
        system("clear");

      printf("\nChoose a \033[1mpercentage\033[0m to be added to all prices:\n\n");

      if (wrongInput == 1)
        printf("Please insert a \033[1mvalid Number between 1 and 100\033[0m.\n\n");

      printf("Percentage: ");
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

    system("clear");

    printf("\n\tAll prices were updated to \033[1m%.2lf%%\033[0m\n\n", 100 * percentage);

    double oldPrice = 0.0;

    for (int i = 0; i < 8; i++)
    {
      for (int j = 0; j < 8; j++)
      {
        oldPrice = pro[i][j].price;

        valueToBeAdded = pro[i][j].price * percentage;

        pro[i][j].price += valueToBeAdded;

        if (strlen(pro[i][j].name) != 0)
          printf("\033[1m%s old price %.2lf\033[0m new price \033[1m%.2lf\033[0m.\n\n", pro[i][j].name, oldPrice, pro[i][j].price);
      }
    }
  }
  else
  {
    printf("\n\033[1mNo Products\033[0m in this vending machine.\n");
  }

  // ReturnExitMenu(pro, ProductMenu);
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
      printf("Please insert a \033[1m%s between 1 and 8.\033[0m\n", text);
    }

    printf("\nInsert a \033[1m%s\033[0m: ", text);

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

void MenuTitle(char title[100])
{
  printf("\n\t\033[4m%s\033[0m\n\n", title);
}
void MenuLinks(int orderNumber, char text[100])
{
  printf("\033[1m%d.\033[0m %s\n", orderNumber, text);
}
void ValidInput(int maxChoice)
{
  printf("\nPlease insert a \033[1mvalid number between 1 and %d\033[0m.\n", maxChoice);
}

// Function Create a back exit menu
void ReturnExitMenu(struct Products pro[][8], MenuFunction MenuChoosen)
{
  int choice = 1;
  int totalChoices = 2;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    printf("\n\t\033[4mMenu\033[0m\n\n");
    printf("\033[1m1.\033[0m Return \n");
    printf("\033[1m2.\033[0m End Program \n");

    if (wrongInput == 1)
      printf("\nPlease insert a \033[1mvalid number between 1 and %d\033[0m.\n", totalChoices);

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
      MenuChoosen(pro);
      break;
    case 2:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}
// Function Create a back exit menu
void Return(struct Products pro[][8], Menu MenuChoosen, Users user[], int userState)
{
  int choice = 1;
  int totalChoices = 2;
  int wrongInput = 0;

  do
  {
    if (wrongInput == 1)
      system("clear");

    MenuTitle("Menu");
    MenuLinks(1, "Return");
    MenuLinks(2, "Exit Program");

    if (wrongInput == 1)
      printf("\nPlease insert a \033[1mvalid number between 1 and %d\033[0m.\n", totalChoices);

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
      MenuChoosen(pro, user, userState);
      break;
    case 2:
      EndProgram();
      break;
    }
  } while (wrongInput != 0);
}

void ProductTotalInfo(struct Products product, int shelf, int productID)
{
  system("clear");

  printf("\n\t\033[4mSuccess Adding the following Product\033[0m\n\n");
  printf("Product Shelf: \033[1m%d \033[0m\n", 1 + shelf);
  printf("Product ID: \033[1m%d \033[0m\n", 1 + productID);
  printf("Product Type: \033[1m%s \033[0m\n", product.type);
  printf("Product Name: \033[1m%s \033[0m\n", product.name);
  printf("Product Brand: \033[1m%s \033[0m\n", product.brand);
  printf("Product Expiration Date: \033[1m%d/%d/%d \033[0m\n", product.expDate.day, product.expDate.month, product.expDate.year);
  printf("Product Price: \033[1m%.2lf€ \033[0m\n", product.price);
  printf("Product Quantity: \033[1m%d \033[0m\n", product.qty);
}

void EndProgram()
{
  system("clear");
  printf("\n");
  printf("\t*****************************\n");
  printf("\t*                           *\n");
  printf("\t*      Program Completed    *\n");
  printf("\t*     Thank You for using   *\n");
  printf("\t*       this Program!       *\n");
  printf("\t*                           *\n");
  printf("\t*****************************\n");
  printf("\n");
}
