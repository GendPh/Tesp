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
                new Manager(1, "Olivia", "Teste2", "Manager"),
                new Stocker(2, "Jackson", "Teste3", "Stocker"),
                new Cashier(3, "Maya", "Teste4", "Cashier"),
                new Manager(4, "Gabriel", "Teste2", "Manager"),
            };
      #endregion

      StartProgram(employees, books);
    }
    static void StartProgram(List<Employee> employees)
    {
      int employee = Login(employees);
      string? employeeName = employees[employee].name;

      if (employees[employee] is Manager manager)
      {
        ManagerMenu(employees, manager);
        //manager.removeUsers(employees);

      }
      else if (employees[employee] is Stocker stocker)
      {
        StockerMenu(employees, stocker);
      }
      else if (employees[employee] is Cashier cashier)
      {
        CashierMenu(employees, cashier);
      }
    }
    static void StartProgram(List<Employee> employees, List<Book> bookList)
    {
      int employee = /* Login(employees) */ 0;
      string? employeeName = employees[employee].name;

      if (employees[employee] is Manager manager)
      {
        ManagerMenu(employees, manager);
      }
      else if (employees[employee] is Stocker stocker)
      {
        StockerMenu(employees, stocker);
      }
      else if (employees[employee] is Cashier cashier)
      {
        CashierMenu(employees, cashier);
      }
    }

    static string UnderlineText(string? input)
    {
      // ASCII escape sequence for underline: \x1B[4m
      // ASCII escape sequence to reset formatting: \x1B[0m
      return $"\x1B[4m{input}\x1B[0m";
    }
    static string BoldText(string? input)
    {
      // ASCII escape sequence for bold: \x1B[1m
      // ASCII escape sequence to reset formatting: \x1B[0m
      return $"\x1B[1m{input}\x1B[0m";
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

    static int Menu(List<string> menuOptions, Employee employee)
    {
      bool correctChoice = true;
      int choice = 0;

      do
      {
        if (!correctChoice)
        {
          Console.Clear();
        }

        System.Console.WriteLine($"\t{employee.position} Menu\n");

        for (int i = 0; i < menuOptions.Count; i++)
        {
          Console.WriteLine($"{i + 1}. {menuOptions[i]}");
        }

        if (!correctChoice)
        {
          System.Console.WriteLine($"\n\tPlease insert a valid input between 1 and {menuOptions.Count}");
        }

        System.Console.Write("\nChoice: ");
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
    static void ReturnMenu(List<Employee> employees, Manager manager, Action<List<Employee>, Manager> menu)
    {
      var menuOptions = new List<string> { "Return" };
      int choice = Menu(menuOptions, employees[manager.id - 1]);

      // Invoke the provided menu function
      menu(employees, manager);
    }

    static void ManagerMenu(List<Employee> employees, Manager manager)
    {
      Console.Clear();

      Console.WriteLine($"\n{BoldText(manager.position)} {UnderlineText(manager.name)} {BoldText("ID")} {UnderlineText(manager.id.ToString())}\n");

      var menuOptions = new List<string> { "Users", "Log Out" };
      int choice = Menu(menuOptions, employees[manager.id - 1]);

      switch (choice)
      {
        case 1:
          UsersMenu(employees, manager);
          break;
        case 2:
          StartProgram(employees);
          break;
      }
    }
    static void UsersMenu(List<Employee> employees, Manager manager)
    {
      Console.Clear();
      manager.showUsers(employees);

      var menuOptions = new List<string> { "Add User", "Remove User", "Change Role", "Return" };
      int choice = Menu(menuOptions, employees[manager.id - 1]);

      switch (choice)
      {
        case 1:
          manager.addUsers(employees);
          ReturnMenu(employees, manager, UsersMenu);
          break;
        case 2:
          manager.removeUsers(employees, manager);
          ReturnMenu(employees, manager, UsersMenu);
          break;
        case 3:
          manager.promoteUsers(employees, manager);
          ReturnMenu(employees, manager, UsersMenu);
          break;
        case 4:
          ManagerMenu(employees, manager);
          break;
      }
    }


    static void StockerMenu(List<Employee> employees, Stocker stocker)
    {
      Console.Clear();
      var menuOptions = new List<string> { "stocker", "Return" };
      int choice = Menu(menuOptions, employees[stocker.id - 1]);

      switch (choice)
      {
        case 1:
          System.Console.WriteLine("1");
          break;
        case 2:
          System.Console.WriteLine("Return");
          break;
      }
    }
    static void CashierMenu(List<Employee> employees, Cashier cashier)
    {
      Console.Clear();
      var menuOptions = new List<string> { "Cashier", "Return" };
      int choice = Menu(menuOptions, employees[cashier.id - 1]);

      switch (choice)
      {
        case 1:
          System.Console.WriteLine("1");
          break;
        case 2:
          System.Console.WriteLine("Return");
          break;
      }
    }

  }
}
