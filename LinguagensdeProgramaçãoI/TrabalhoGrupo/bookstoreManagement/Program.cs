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
        // new Book(1,"One Hundred Years of Solitude", "Gabriel Garcia Marquez", "978-0-06-112008-4", "Magical Realism", 19.79, 6, 50),
        // new Book(2, "To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-5", "Fiction", 12.99, 6, 50),
        // new Book(3, "1984", "George Orwell", "978-0-45-152493-5", "Dystopian", 10.75, 6, 50),
        // new Book(4, "The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0", "Fiction", 14.25, 6, 50),
        // new Book(5, "Pride and Prejudice", "Jane Austen", "978-0-48-640648-5", "Romance", 11.50, 6, 50),
        // new Book(6, "The Hobbit", "J.R.R. Tolkien", "978-0-26-110334-4", "Fantasy", 18.99, 6, 50),
        // new Book(7, "The Lord of the Rings", "J.R.R. Tolkien", "978-0-54-457221-1", "Fantasy", 27.99, 6, 50),
        // new Book(8, "Brave New World", "Aldous Huxley", "978-0-60-641322-3", "Dystopian", 13.20, 6, 50),
        // new Book(9, "The Great Gatsby", "F. Scott Fitzgerald", "978-0-74-327356-5", "Fiction", 16.00, 6, 50),
        // new Book(10, "Moby-Dick", "Herman Melville", "978-1-58-049580-9", "Adventure", 22.45, 6, 50),
        // new Book(11, "Frankenstein", "Mary Shelley", "978-0-48-628211-4", "Gothic", 14.99, 6, 50),
        // new Book(12, "The Picture of Dorian Gray", "Oscar Wilde", "978-0-14-143957-0", "Gothic", 9.75, 6, 50),
        // new Book(13, "Crime and Punishment", "Fyodor Dostoevsky", "978-0-67-973450-5", "Psychological Fiction", 17.80, 6, 50),
        // new Book(14, "The Odyssey", "Homer", "978-0-14-303995-2", "Epic", 11.30, 6, 50),
        // new Book(15, "The Road", "Cormac McCarthy", "978-0-30-738789-9", "Post-Apocalyptic", 16.85, 6, 50),
        // new Book(16, "The Alchemist", "Paulo Coelho", "978-0-06-112241-5", "Philosophical", 14.50, 6, 50),
        // new Book(17, "The Brothers Karamazov", "Fyodor Dostoevsky", "978-0-14-119861-9", "Philosophical", 19.25, 6, 50),
        // new Book(18, "The Three Musketeers", "Alexandre Dumas", "978-0-19-283543-9", "Adventure", 12.90, 6, 50),
        // new Book(19, "Dracula", "Bram Stoker", "978-0-48-645401-1", "Gothic", 15.75, 6, 50),
        // new Book(20, "War and Peace", "Leo Tolstoy", "978-1-86-050940-6", "Historical Fiction", 24.99, 0, 50),
      };
      #endregion


      #region List Cart
      List<Book> cart = new List<Book>();
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

      StartProgram(employees, books, cart);
    }
    static void StartProgram(List<Employee> employees, List<Book> books, List<Book> cart)
    {
      int employeeId = /* Login(employees) */1;

      // if (employees[employeeId] is Stocker stocker)
      // {
      //   stocker.RemoveBook(books);
      // }

      EmployeeMenu(employees, employees[employeeId], books, cart);
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


    // Method: Menu
    // Purpose: Display a menu to the user, prompt for a choice, and validate the input.
    //          This method ensures the user selects a valid option from the menu.
    // Parameters:
    //   - menuOptions: A list of strings representing the menu options.
    //   - employee: An Employee object representing the current user.
    // Returns:
    //   - An integer representing the user's valid menu choice.
    static int Menu(List<string> menuOptions, Employee employee)
    {
      // Initialize variables
      bool correctChoice = true;
      int choice = 0;

      // Execute the menu loop until a correct choice is made
      do
      {
        // Clear the console if the previous choice was incorrect
        if (!correctChoice)
        {
          Console.Clear();
        }

        // Display the employee's menu header
        System.Console.WriteLine($"\t{employee.name} Menu\n");

        // Display the menu options with corresponding numbers
        for (int i = 0; i < menuOptions.Count; i++)
        {
          Console.WriteLine($"{i + 1}. {menuOptions[i]}");
        }

        // Display an error message if the previous choice was incorrect
        if (!correctChoice)
        {
          // Determine the error message based on the number of menu options
          string? errorMessage = (menuOptions.Count > 1) ? $"Invalid input.\nPlease enter a number between 1 and {menuOptions.Count} corresponding to the menu options." : "Invalid input.\nPlease enter 1 for the available menu option.";
          System.Console.WriteLine($"\n{errorMessage}");
        }

        // Prompt the user for their choice
        System.Console.Write("\nChoice: ");

        try
        {
          // Attempt to convert user input to an integer
          choice = Convert.ToInt32(Console.ReadLine());

          // Update the correctChoice flag based on the validity of the input
          correctChoice = (choice >= 1 && choice <= menuOptions.Count) ? true : false;
        }
        catch (FormatException)
        {
          // If a FormatException occurs (non-integer input), set correctChoice to false
          correctChoice = false;
        }

      } while (!correctChoice); // Repeat the loop until a correct choice is made

      // Return the user's valid choice
      return choice;
    }

    // Method: ReturnMenu
    // Purpose: Execute the provided menu action.
    // Parameters:
    //   - menu: Action representing the menu to be executed.
    static void ReturnMenu(Action menu)
    {
      // Invoke the provided menu action
      menu();
    }

    // Method: ReturnMenu
    // Purpose: Execute the provided menu action after displaying a simple return menu.
    // Parameters:
    //   - employee: An Employee object representing the current user.
    //   - menu: Action representing the menu to be executed.
    static void ReturnMenu(Employee employee, Action menu)
    {
      // Create a list with a single menu option for returning
      var menuOptions = new List<string> { "Return" };

      // Display a menu with the single return option and get the user's choice
      int choice = Menu(menuOptions, employee);

      // Invoke the provided menu action
      menu();
    }

    // Method: EmployeeMenu
    // Purpose: Display the menu for different types of employees (Manager, Stocker, Cashier).
    //          Allow employees to navigate to specific menus based on their roles.
    // Parameters:
    //   - employees: A list of all employees in the system.
    //   - employee: An Employee object representing the current user.
    //   - books: A list of Book objects representing the available books.
    //   - cart: A list of Book objects representing the user's cart.
    static void EmployeeMenu(List<Employee> employees, Employee employee, List<Book> books, List<Book> cart)
    {
      // Clear the console for a clean display
      Console.Clear();

      // Display employee information
      Console.WriteLine($"\n{employee.position} {employee.name} ID {employee.id}\n");

      // Get user choice using the Menu function
      int choice = 0;

      // Define common menu options for all employees
      var menuOptions = new List<string> { "Log Out", "Books" };

      // Define additional menu options for specific employee types
      var additionalOptions = new List<string> { };

      if (employee is Manager manager)
      {
        additionalOptions = new List<string> { "Users" };
        menuOptions.AddRange(additionalOptions);

        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);

        // Execute specific actions based on the user's choice
        switch (choice)
        {
          case 3:
            UsersMenu(employees, manager, books, cart);
            break;
        }
      }
      else if (employee is Stocker stocker)
      {
        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);
      }
      else if (employee is Cashier cashier)
      {
        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);
      }

      // Execute actions based on the user's final choice
      switch (choice)
      {
        case 0:
          // If the employee is not a Manager, Stocker, or Cashier, display a specific message
          System.Console.WriteLine("Access Denied: Only Managers, Stockers, and Cashiers have permission to access this menu.");
          break;
        case 1:
          // Log out and return to the main program
          StartProgram(employees, books, cart);
          break;
        case 2:
          // View or manipulate the book inventory
          BooksMenu(employees, employee, books, cart);
          break;
      }


    }

    // Method: BooksMenu
    // Purpose: Display the menu for managing books based on the employee's role (Manager, Stocker, Cashier).
    //          Allow employees to perform specific actions related to the book inventory.
    // Parameters:
    //   - employees: A list of all employees in the system.
    //   - employee: An Employee object representing the current user.
    //   - books: A list of Book objects representing the available books.
    //   - cart: A list of Book objects representing the user's cart.
    static void BooksMenu(List<Employee> employees, Employee employee, List<Book> books, List<Book> cart)
    {
      // Clear the console for a clean display
      Console.Clear();
      System.Console.WriteLine("");

      // Define common menu options for all employees
      var menuOptions = new List<string> { "Return", "All Books", "Book by Code", "Book by Genre", "Book by Author", "Books Stock" };

      // Define additional menu options for specific employee types
      var additionalOptions = new List<string> { };

      // Get user choice using the Menu function
      int choice = 0;

      // Check the employee type and adjust menu options accordingly
      if (employee is Manager manager)
      {
        additionalOptions = new List<string> { "Sell Book" };
        menuOptions.AddRange(additionalOptions);

        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);

        // Execute specific actions based on the user's choice
        switch (choice)
        {
          case 7:
            manager.SellBook(books, cart, employee);
            // Return to the BooksMenu after the action is performed
            ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
            break;
        }
      }
      else if (employee is Stocker stocker)
      {

        additionalOptions = new List<string> { "Add Book", "Remove Book", "Restock Book" };
        menuOptions.AddRange(additionalOptions);

        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);

        // Execute specific actions based on the user's choice
        switch (choice)
        {
          case 7:
            stocker.AddBook(books);
            // Return to the BooksMenu after the action is performed
            ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
            break;
          case 8:
            stocker.RemoveBook(books);
            // Return to the BooksMenu after the action is performed
            ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
            break;
          case 9:
            stocker.RestockBook(books);
            // Return to the BooksMenu after the action is performed
            ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
            break;
        }
      }
      else if (employee is Cashier cashier)
      {
        additionalOptions = new List<string> { "Sell Book", "Buy Book" };
        menuOptions.AddRange(additionalOptions);

        // Display the menu and get the user's choice
        choice = Menu(menuOptions, employee);

        // Execute specific actions based on the user's choice
        switch (choice)
        {
          case 7:
            cashier.SellBook(books, cart, employee);
            // Return to the BooksMenu after the action is performed
            ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
            break;
        }
      }

      // Common options for all employees
      switch (choice)
      {
        case 1:
          // Return to the EmployeeMenu
          ReturnMenu(() => EmployeeMenu(employees, employee, books, cart));
          break;
        case 2:
          // Consult the entire book list
          employee.ConsultBookList(books);
          // Return to the BooksMenu
          ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
          break;
        case 3:
          // Consult a book by its code
          employee.ConsultBookByCode(books);
          // Return to the BooksMenu
          ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
          break;
        case 4:
          // Consult books by genre
          employee.ConsultBookByGenre(books);
          // Return to the BooksMenu
          ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
          break;
        case 5:
          // Consult books by author
          employee.ConsultBookByAuthor(books);
          // Return to the BooksMenu
          ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
          break;
        case 6:
          // Consult the book stock
          employee.ConsultStock(books);
          // Return to the BooksMenu
          ReturnMenu(employee, () => BooksMenu(employees, employee, books, cart));
          break;
      }
    }


    // Method: UsersMenu
    // Purpose: Display the menu for managing users, specifically designed for the Manager role.
    //          Allow the Manager to view, add, remove, and promote users.
    // Parameters:
    //   - employees: A list of all employees in the system.
    //   - employee: An Employee object representing the current user (Manager).
    //   - books: A list of Book objects representing the available books.
    //   - cart: A list of Book objects representing the user's cart.
    static void UsersMenu(List<Employee> employees, Employee employee, List<Book> books, List<Book> cart)
    {
      // Clear the console for a clean display
      Console.Clear();

      // Check if the employee is a Manager
      if (employee is Manager manager)
      {
        // Display information about all users in the system
        manager.ShowUsers(employees);

        // Define menu options for user management
        var menuOptions = new List<string> { "Add User", "Remove User", "Change Role", "Return" };

        // Get the user's choice using the Menu function
        int choice = Menu(menuOptions, manager);

        // Execute specific actions based on the user's choice
        switch (choice)
        {
          case 1:
            // Add a new user and return to the UsersMenu
            manager.AddUsers(employees);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books, cart));
            break;
          case 2:
            // Remove a user and return to the UsersMenu
            manager.RemoveUsers(employees, manager);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books, cart));
            break;
          case 3:
            // Change the role of a user and return to the UsersMenu
            manager.PromoteUsers(employees, manager);
            ReturnMenu(manager, () => UsersMenu(employees, manager, books, cart));
            break;
          case 4:
            // Return to the EmployeeMenu
            EmployeeMenu(employees, manager, books, cart);
            break;
        }
      }
    }
  }
}
