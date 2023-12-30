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
                new Book(1,"One Hundred Years of Solitude", "Gabriel Garcia Marquez", "978-0-06-112008-4", "Magical Realism", 19.79, 0,50),
                new Book(2, "To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-5", "Fiction", 12.99, 0, 50),
                new Book(3, "1984", "George Orwell", "978-0-45-152493-5", "Dystopian", 10.75, 0, 50),
                new Book(4, "The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0", "Fiction", 14.25, 0, 50),
                new Book(5, "Pride and Prejudice", "Jane Austen", "978-0-48-640648-5", "Romance", 11.50, 0, 50),
                new Book(6, "The Hobbit", "J.R.R. Tolkien", "978-0-26-110334-4", "Fantasy", 18.99, 0, 50),
                new Book(7, "The Lord of the Rings", "J.R.R. Tolkien", "978-0-54-457221-1", "Fantasy", 27.99, 0, 50),
                new Book(8, "Brave New World", "Aldous Huxley", "978-0-60-641322-3", "Dystopian", 13.20, 0, 50),
                new Book(9, "The Great Gatsby", "F. Scott Fitzgerald", "978-0-74-327356-5", "Fiction", 16.00, 0, 50),
                new Book(10, "Moby-Dick", "Herman Melville", "978-1-58-049580-9", "Adventure", 22.45, 0, 50),
                new Book(11, "Frankenstein", "Mary Shelley", "978-0-48-628211-4", "Gothic", 14.99, 0, 50),
                new Book(12, "The Picture of Dorian Gray", "Oscar Wilde", "978-0-14-143957-0", "Gothic", 9.75, 0, 50),
                new Book(13, "Crime and Punishment", "Fyodor Dostoevsky", "978-0-67-973450-5", "Psychological Fiction", 17.80, 0, 50),
                new Book(14, "The Odyssey", "Homer", "978-0-14-303995-2", "Epic", 11.30, 0, 50),
                new Book(15, "The Road", "Cormac McCarthy", "978-0-30-738789-9", "Post-Apocalyptic", 16.85, 0, 50),
                new Book(16, "The Alchemist", "Paulo Coelho", "978-0-06-112241-5", "Philosophical", 14.50, 0, 50),
                new Book(17, "The Brothers Karamazov", "Fyodor Dostoevsky", "978-0-14-119861-9", "Philosophical", 19.25, 0, 50),
                new Book(18, "The Three Musketeers", "Alexandre Dumas", "978-0-19-283543-9", "Adventure", 12.90, 0, 50),
                new Book(19, "Dracula", "Bram Stoker", "978-0-48-645401-1", "Gothic", 15.75, 0, 50),
                new Book(20, "War and Peace", "Leo Tolstoy", "978-1-86-050940-6", "Historical Fiction", 24.99, 0, 50),
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
    static void StartProgram(List<Employee> employees, List<Book> books)
    {
      int employee = /* Login(employees) */1;
      string? employeeName = employees[employee].name;

      if (employees[employee] is Manager manager)
      {
        ManagerMenu(employees, manager, books);
      }
      else if (employees[employee] is Stocker stocker)
      {
        StockerMenu(employees, stocker, books);
      }
      else if (employees[employee] is Cashier cashier)
      {
        //CashierMenu(employees, cashier);
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

        System.Console.WriteLine($"\t{employee.name} Menu\n");

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
    static void ReturnMenu(Action menu)
    {
      menu();
    }
    static void ReturnMenu(Employee employee, Action menu)
    {
      var menuOptions = new List<string> { "Return" };
      int choice = Menu(menuOptions, employee);

      // Invoke the provided menu function
      menu();
    }

    static void ManagerMenu(List<Employee> employees, Employee employee, List<Book> books)
    {
      Console.Clear();

      if (employee is Manager manager)
      {
        Console.WriteLine($"\n{manager.position} {manager.name} ID {manager.id}\n");

        var menuOptions = new List<string> { "Users", "Books", "Log Out" };
        int choice = Menu(menuOptions, manager);

        switch (choice)
        {
          case 1:
            UsersMenu(employees, manager, books);
            break;
          case 2:
            BooksMenu(employees, manager, books);
            break;
          case 3:
            StartProgram(employees, books);
            break;
        }
      }
    }
    static void UsersMenu(List<Employee> employees, Employee employee, List<Book> books)
    {
      Console.Clear();
      if (employee is Manager manager)
      {

        manager.showUsers(employees);

        var menuOptions = new List<string> { "Add User", "Remove User", "Change Role", "Return" };
        int choice = Menu(menuOptions, manager);

        switch (choice)
        {
          case 1:
            manager.addUsers(employees);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books));
            break;
          case 2:
            manager.removeUsers(employees, manager);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books));
            break;
          case 3:
            manager.promoteUsers(employees, manager);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books));
            break;
          case 4:
            ManagerMenu(employees, manager, books);
            break;
        }
      }
      else
      {
        System.Console.WriteLine("You are not allowed here.");
      }
    }

    static void BooksMenu(List<Employee> employees, Employee employee, List<Book> books)
    {
      Console.Clear();
      System.Console.WriteLine("");

      var menuOptions = new List<string> { "All Books", "Book by Code", "Book by Genre", "Book by Author", "Books Stock", "Return" };
      int choice = Menu(menuOptions, employee);

      switch (choice)
      {
        case 1:
          employee.consultBookList(books);
          ReturnMenu(employee, () => BooksMenu(employees, employee, books));
          break;
        case 2:
          employee.consultBookByCode(books);
          ReturnMenu(employee, () => BooksMenu(employees, employee, books));
          break;
        case 3:
          employee.consultBookByGenre(books);
          ReturnMenu(employee, () => BooksMenu(employees, employee, books));
          break;
        case 4:
          employee.consultBookByAuthor(books);
          ReturnMenu(employee, () => BooksMenu(employees, employee, books));
          break;
        case 5:
          employee.consultStock(books);
          ReturnMenu(employee, () => BooksMenu(employees, employee, books));
          break;
        case 6:
          ReturnMenu(() => ManagerMenu(employees, employee, books));
          break;
      }
    }

    static void StockerMenu(List<Employee> employees, Employee employee, List<Book> books)
    {
      Console.Clear();
      System.Console.WriteLine("");

      if (employee is Stocker stocker)
      {
        var menuOptions = new List<string> { "All Books", "Book by Code", "Book by Genre", "Book by Author", "Books Stock", "Add Book", "Remove Book", "Update Book", "Log Out" };
        int choice = Menu(menuOptions, employee);

        switch (choice)
        {
          case 1:
            employee.consultBookList(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 2:
            employee.consultBookByCode(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 3:
            employee.consultBookByGenre(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 4:
            employee.consultBookByAuthor(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 5:
            employee.consultStock(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 6:
            stocker.addBook(books);
            ReturnMenu(employee, () => StockerMenu(employees, employee, books));
            break;
          case 7:
            // Remove
            break;
          case 8:
            // Update
            break;
          case 9:
            StartProgram(employees, books);
            break;
        }
      }
    }



    static void CashierMenu(List<Employee> employees, Employee employee, List<Book> books)
    {
      Console.Clear();
      var menuOptions = new List<string> { "Cashier", "Return" };
      int choice = Menu(menuOptions, employee);

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
