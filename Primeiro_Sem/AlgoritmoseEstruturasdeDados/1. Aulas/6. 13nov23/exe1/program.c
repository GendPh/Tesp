#include <stdio.h>

int Value()
{
  int value;
  printf("Select a number: ");
  scanf("%d", &value);
  return value;
}

char ChooseOperation()
{
  char operation;
  printf("Choose Operation between + - * / => ");
  scanf(" %c", &operation); // Add a space before %c
  return operation;
}

int Calc(int v1, int v2)
{
  char operation = ChooseOperation();
  printf("%d %c %d =", v1, operation, v2);

  switch (operation)
  {
  case '+':
    return v1 + v2;
  case '-':
    return v1 - v2;
  case '/':
    if (v2 != 0)
    {
      return v1 / v2;
    }
    else
    {
      printf("Error: Division by zero\n");
      return 0;
    }
  case '*':
    return v1 * v2;
  default:
    printf("Error: Invalid operation\n");
    return 0;
  }
}

void GetData()
{
  int value1 = Value();
  int value2 = Value();
  int result = Calc(value1, value2);
  printf("%d\n", result);
}

int main()
{
  GetData();
  return 0;
}
