using System;
using System.Collections.Generic;

namespace bookstoreManagement
{
  class Program
  {
    static void Main(string[] args)
    {
      #region Create a list of books
      List<Book> books = new List<Book>
            {
                // Initialize the list with 20 Book objects
                new Book(1,"The Great Gatsby", "F. Scott Fitzgerald", "978-3-16-148410-0", "Fiction", 15.45, 0,50),
                // ... (other book entries)
                new Book(20,"One Hundred Years of Solitude", "Gabriel Garcia Marquez", "978-0-06-112008-4", "Magical Realism", 19.79, 0,50)
            };
      #endregion

      #region List of users
      List<Employee> employees = new List<Employee>
            {
                new Manager(2, "Olivia", "Teste2", 2),
                new Stocker(3, "Jackson", "Teste3", 3),
                new Cashier(4, "Maya", "Teste4", 4),
            };
      #endregion

      int employee = Login(employees);
      string? employeeName = employees[employee].name;

      if (employees[employee] is Manager manager)
      {
        ManagerMenu(employees, employeeName);
      }
      else if (employees[employee] is Stocker stocker)
      {
        StockerMenu(books, employeeName);
      }
      else if (employees[employee] is Cashier cashier)
      {
        CashierMenu(books, employeeName);
      }
    }

    static int Login(List<Employee> employees)
    {

      bool error = false;
      string errorMessage = "None";
      int index = 0;

      string? Name = "";
      bool correctName = false;
      string? Password = "";

      do
      {
        Console.Clear();
        Console.WriteLine("Login");

        if (error)
        {
          Console.WriteLine($"{errorMessage}");
        }

        Console.Write($"Name: {Name}");

        if (!correctName)
        {
          Name = Console.ReadLine();

          for (int i = 0; i < employees.Count; i++)
          {
            if (employees[i].name == Name)
            {
              error = false;
              index = i;
              correctName = true;
              break;
            }
            else
            {
              error = true;
              errorMessage = "Name doesn't exist";
            }
          }

          if (error)
          {
            Name = "";
            continue;
          }
        }

        System.Console.WriteLine("");

        Console.Write($"Password: {Password}");

        Password = Console.ReadLine();

        if (employees[index].password != Password)
        {
          error = true;
          errorMessage = "Wrong Password";
          Password = "";
          continue;
        }
        else
        {
          error = false;
        }

      } while (error);

      return index;
    }

    static void ManagerMenu(List<Employee> employees, string? employeeName)
    {
      var menuOptions = new List<string> { "Users", "Return" };
      int choice = Menu(menuOptions, employeeName, "Manager");

      switch (choice)
      {
        case 1:
          System.Console.WriteLine("Option 1");
          break;
        case 2:
          break;
      }
    }
    static void StockerMenu(List<Book> books, string? employeeName)
    {
      var menuOptions = new List<string> { "Books", "Return" };
      int choice = Menu(menuOptions, employeeName, "Stocker");

      switch (choice)
      {
        case 1:
          System.Console.WriteLine("Option 1");
          break;
        case 2:
          System.Console.WriteLine("Option 2");
          break;
      }
    }
    static void CashierMenu(List<Book> books, string? employeeName)
    {
      var menuOptions = new List<string> { "Buy Book", "Sell Book", "Return" };
      int choice = Menu(menuOptions, employeeName, "Cashier");

      switch (choice)
      {
        case 1:
          System.Console.WriteLine("Option 1");
          break;
        case 2:
          System.Console.WriteLine("Option 2");
          break;
        case 3:
          System.Console.WriteLine("Option 3");
          break;
      }
    }

    static int Menu(List<string> menuOptions, string? employeeName, string? Position)
    {
      bool correctChoice = true;
      int choice = 0;

      do
      {
        Console.Clear();
        System.Console.WriteLine($"Welcome {Position} {employeeName}!");
        System.Console.WriteLine("");
        System.Console.WriteLine($"{Position} Menu");
        System.Console.WriteLine("");

        for (int i = 0; i < menuOptions.Count; i++)
        {
          Console.WriteLine($"{i + 1}. {menuOptions[i]}");
        }

        System.Console.WriteLine("");

        if (!correctChoice)
        {
          System.Console.WriteLine($"Please insert a valid input between 1 and {menuOptions.Count}");
          System.Console.WriteLine("");
        }

        System.Console.Write("Choice: ");
        try
        {
          choice = Convert.ToInt32(Console.ReadLine());
          correctChoice = (choice >= 1 && choice <= menuOptions.Count) ? true : false;
        }
        catch (FormatException)
        {
          correctChoice = false;
        }

      } while (!correctChoice);

      return choice;
    }
  }
}
