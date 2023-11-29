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