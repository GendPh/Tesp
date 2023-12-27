namespace bookstoreManagement
{

  public class Employee
  {
    public int id { get; protected set; }
    public string? name { get; protected set; }
    public string? password { get; protected set; }
    public string? position { get; protected set; }

    public Employee(int id, string? name, string? password, string? position)
    {
      this.id = id;
      this.name = name;
      this.password = password;
      this.position = position;
    }

    public void PrintEmployeeDetails()
    {
      System.Console.WriteLine($"Manager ID: {id}");
      System.Console.WriteLine($"Manager Name: {name}");
      System.Console.WriteLine($"Manager Password: {password}");
      System.Console.WriteLine($"Manager Position: {position}");
    }
    public void consultBookList(List<Book> bookList)
    {
      foreach (Book book in bookList)
      {
        Console.WriteLine($"Code: {book.code}");
        Console.WriteLine($"Title: {book.title}");
        Console.WriteLine($"Author: {book.author}");
        Console.WriteLine($"ISBN: {book.ISBN}");
        Console.WriteLine($"Genre: {book.genre}");
        Console.WriteLine($"Price: {book.price:C}");
        Console.WriteLine($"IVA: {book.iva}%");
        Console.WriteLine($"Stock: {book.stock}");
        Console.WriteLine($"Sold: {book.sold}");
        Console.WriteLine();
      }
    }
    public void consultBookByCode(List<Book> bookList, int Code)
    {
      Console.Clear();

      int size = bookList.Count;

      if (Code >= 1 && Code <= size)
      {
        for (int i = 0; i < size; i++)
        {
          if (bookList[i].code == Code)
          {
            Console.WriteLine($"Code: {bookList[i].code}");
            Console.WriteLine($"Title: {bookList[i].title}");
            Console.WriteLine($"Author: {bookList[i].author}");
            Console.WriteLine($"ISBN: {bookList[i].ISBN}");
            Console.WriteLine($"Genre: {bookList[i].genre}");
            Console.WriteLine($"Price: {bookList[i].price:C}");
            Console.WriteLine($"IVA: {bookList[i].iva}%");
            Console.WriteLine($"Stock: {bookList[i].stock}");
            Console.WriteLine($"Sold: {bookList[i].sold}");
            break;
          }
        }
      }
      else
      {
        System.Console.WriteLine("Wasn't able to find this book");
      }
    }
    public void consultStock(List<Book> bookList)
    {
      int totalStock = 0;
      foreach (Book book in bookList)
      {
        totalStock += book.stock;
      }
      System.Console.WriteLine($"There are a total of {totalStock} books.");
    }
    public void consultBookByGenre(List<Book> bookList, string Genre)
    {
      int exist = 0;

      for (int i = 0; i < bookList.Count; i++)
      {
        if (bookList[i].genre.ToLowerInvariant().Contains(Genre.ToLowerInvariant()))
        {
          exist = 1;
          Console.WriteLine($"Code: {bookList[i].code}");
          Console.WriteLine($"Title: {bookList[i].title}");
          Console.WriteLine($"Author: {bookList[i].author}");
          Console.WriteLine($"ISBN: {bookList[i].ISBN}");
          Console.WriteLine($"Genre: {bookList[i].genre}");
          Console.WriteLine($"Price: {bookList[i].price:C}");
          Console.WriteLine($"IVA: {bookList[i].iva}%");
          Console.WriteLine($"Stock: {bookList[i].stock}");
          Console.WriteLine($"Sold: {bookList[i].sold}");
          Console.WriteLine("");
        }
      }

      if (exist == 0)
      {
        Console.WriteLine($"No books found with the genre {Genre}.");
      }
    }
    public void consultBookByAuthor(List<Book> bookList, string Author)
    {
      int exist = 0;

      for (int i = 0; i < bookList.Count; i++)
      {
        if (bookList[i].author.ToLowerInvariant().Contains(Author.ToLowerInvariant()))
        {
          exist = 1;
          Console.WriteLine($"Code: {bookList[i].code}");
          Console.WriteLine($"Title: {bookList[i].title}");
          Console.WriteLine($"Author: {bookList[i].author}");
          Console.WriteLine($"ISBN: {bookList[i].ISBN}");
          Console.WriteLine($"Genre: {bookList[i].genre}");
          Console.WriteLine($"Price: {bookList[i].price:C}");
          Console.WriteLine($"IVA: {bookList[i].iva}%");
          Console.WriteLine($"Stock: {bookList[i].stock}");
          Console.WriteLine($"Sold: {bookList[i].sold}");
          Console.WriteLine("");
        }
      }

      if (exist == 0)
      {
        Console.WriteLine($"No books found with the genre {Author}.");
      }
    }
  }

  public class Manager : Employee, AbsManager
  {
    private new string? position { get; set; }

    public Manager(int id, string? name, string? password, string? position) : base(id, name, password, position)
    {
    }

    public void showUsers(List<Employee> listUsers)
    {
      System.Console.WriteLine("");
      for (int i = 0; i < listUsers.Count; i++)
      {
        System.Console.WriteLine($"Employee ID: {listUsers[i].id}");
        System.Console.WriteLine($"Employee Name: {listUsers[i].name}");
        System.Console.WriteLine($"Employee Password: {listUsers[i].password}");
        System.Console.WriteLine($"Employee Position: {listUsers[i].position}");
        System.Console.WriteLine("");
      }
    }
    public void addUsers(List<Employee> listUsers)
    {
      int Id = listUsers[listUsers.Count - 1].id + 1;
      string? Name;
      string? Password;
      string? Position = "Unknown";

      bool addUser = false;
      do
      {
        Console.Clear();

        System.Console.WriteLine("\nCreate a new user profile by entering:\n - Unique name;\n - Secure password;\n - Role (Manager, Stocker, or Cashier).\n\n The system will assign a unique ID for identification purposes.\n");

        // Define a id
        System.Console.WriteLine($"User ID defined: {Id}.");

        // Define a name
        string? errorMessage = " ";

        bool hasName = false;
        do
        {
          if (hasName)
          {
            Console.Clear();
            System.Console.WriteLine($"\n{errorMessage}\n");
          }

          System.Console.Write("Choose a Name: ");
          Name = Console.ReadLine();

          if (Name?.Length > 4)
          {
            for (int i = 0; i < listUsers.Count; i++)
            {
              if (listUsers[i].name == Name)
              {
                hasName = true;
                errorMessage = "Already exist user name.";
                break;
              }
              else
              {
                hasName = false;
              }
            }
          }
          else
          {
            hasName = true;
            errorMessage = "User Name as to be at least 5 characters long.";
          }

        } while (hasName);

        bool hasPassword = false;
        do
        {
          if (hasPassword)
          {
            Console.Clear();
            System.Console.WriteLine($"{errorMessage}\n");
          }

          System.Console.Write("Choose a Password: ");
          Password = Console.ReadLine();

          if (Password?.Length > 4)
          {
            for (int i = 0; i < listUsers.Count; i++)
            {
              if (listUsers[i].password == Password)
              {
                hasPassword = true;
                errorMessage = "Already exist user password.";
                break;
              }
              else
              {
                hasPassword = false;
              }
            }
          }
          else
          {
            hasPassword = true;
            errorMessage = "User Password as to be at least 5 characters long.";
          }

        } while (hasPassword);

        // Define a position
        int choice = 0;
        bool correctPosition = true;

        do
        {

          if (!correctPosition)
          {
            Console.Clear();
            System.Console.WriteLine($"\n{errorMessage}\n");
          }

          System.Console.WriteLine("Choose positions:\n");
          System.Console.WriteLine("1. Manager");
          System.Console.WriteLine("2. Stocker");
          System.Console.WriteLine("3. Cashier");

          System.Console.Write("\nPosition: ");
          try
          {
            choice = Convert.ToInt32(Console.ReadLine());
            correctPosition = (choice >= 1 && choice <= 3);

            if (correctPosition)
            {
              // Assign a value to Position based on user's choice
              switch (choice)
              {
                case 1:
                  Position = "Manager";
                  break;
                case 2:
                  Position = "Stocker";
                  break;
                case 3:
                  Position = "Cashier";
                  break;
                default:
                  Position = null; // Set to null if an unexpected choice is made
                  break;
              }
            }
            else
            {
              errorMessage = "Insert a valid number between 1 and 3";
            }
          }
          catch (FormatException)
          {
            correctPosition = false;
            errorMessage = "Insert a valid number between 1 and 3";
          }

        } while (!correctPosition);

        bool validAnswer = true;
        string? addConfirmation;
        do
        {
          Console.Clear();
          System.Console.WriteLine("\nThe following user will be added:\n");
          System.Console.WriteLine($" -ID: {Id};\n -Name: {Name};\n -Password: {Password};\n -Role: {Position};\n");

          if (!validAnswer)
          {
            System.Console.WriteLine("Please choose between y/n");
          }

          System.Console.Write("Do you want to continue(y/n): ");
          addConfirmation = Console.ReadLine();

          if (addConfirmation != null)
          {
            switch (addConfirmation.ToLower())
            {
              case "y":
                validAnswer = true;
                addUser = true;
                break;
              case "n":
                validAnswer = true;
                addUser = false;
                break;
              default:
                validAnswer = false;
                break;
            }
          }

        } while (!validAnswer);

      } while (!addUser);

      // Now you can safely use Position in the rest of your code
      if (Position == "Manager")
      {
        Manager newManager = new(Id, Name, Password, Position);
        listUsers.Add(newManager);
      }
      else if (Position == "Stocker")
      {
        Stocker newStocker = new(Id, Name, Password, Position);
        listUsers.Add(newStocker);
      }
      else if (Position == "Cashier")
      {
        Cashier newCashier = new(Id, Name, Password, Position);
        listUsers.Add(newCashier);
      }

      Console.Clear();
      System.Console.WriteLine("\nUser added successfully!");

      showUsers(listUsers);
    }
    public void removeUsers(List<Employee> listUsers, Manager manager)
    {
      int userId = 0;

      Employee? employeeToRemove = listUsers.Find(e => e.id == 0);


      bool removeUser = false;
      do
      {
        Console.Clear();

        showUsers(listUsers);

        System.Console.WriteLine("\nRemove a user profile by entering:\n - Unique ID;\n\nThis action will permanently delete the user's profile from the system.\nPlease be cautious when removing users.\n");

        System.Console.WriteLine($"There are a total of {listUsers.Count} users.\n");

        string? errorMessage = "Error";
        bool availableId = true;

        do
        {
          if (!availableId)
          {
            Console.Clear();
            System.Console.WriteLine($"{errorMessage}.\n");
          }

          System.Console.Write("Please select one of the above users Id: ");

          userId = Convert.ToInt32(Console.ReadLine());

          if (userId >= 1 && userId <= listUsers.Count && userId != manager.id)
          {
            availableId = true;
            employeeToRemove = listUsers.Find(e => e.id == userId);
          }
          else
          {
            availableId = false;
            errorMessage = $"Please inset a number between 1 and {listUsers.Count} with exception {manager.id}";
            continue;
          }

          bool removeAuth = true;
          string? addConfirmation = "Answer";
          do
          {
            Console.Clear();

            if (employeeToRemove != null)
            {
              System.Console.WriteLine("\nUser selected\n");
              System.Console.WriteLine($"ID: {employeeToRemove.id}");
              System.Console.WriteLine($"Name: {employeeToRemove.name}");
              System.Console.WriteLine($"Role: {employeeToRemove.position}\n");
            }

            if (!removeAuth)
            {
              System.Console.WriteLine("Please choose between y or n.\n");
            }

            System.Console.Write("Do you want to remove the user above?(y/n) ");
            addConfirmation = Console.ReadLine();

            if (addConfirmation != null)
            {
              switch (addConfirmation.ToLower())
              {
                case "y":
                  removeAuth = true;
                  removeUser = true;
                  break;
                case "n":
                  removeAuth = true;
                  removeUser = false;
                  break;
                default:
                  removeAuth = false;
                  break;
              }
            }
          } while (!removeAuth);


        } while (!availableId);

      } while (!removeUser);

      if (employeeToRemove != null)
        listUsers.Remove(employeeToRemove);

      Console.Clear();

      showUsers(listUsers);

      System.Console.WriteLine("User removed successfully!\n");

    }
    protected internal void promoteUsers(List<Employee> listUsers, Manager manager)
    {
      int userId = 0;
      Employee? employeeToPromote = listUsers.Find(e => e.id == 0);

      bool promoteUser = false;

      do
      {
        Console.Clear();

        showUsers(listUsers);

        System.Console.WriteLine("\nPromote a user role by entering:\n - Unique ID;\n\nThis action will change the user's role within the system.\nPlease exercise caution when promoting users.\n");

        System.Console.WriteLine($"There are a total of {listUsers.Count} users.\n");

        string? errorMessage = "Error";
        bool availableId = true;

        do
        {
          if (!availableId)
          {
            Console.Clear();
            System.Console.WriteLine($"{errorMessage}.\n");
          }

          System.Console.Write("Please select one of the above users Id: ");

          userId = Convert.ToInt32(Console.ReadLine());

          if (userId >= 1 && userId <= listUsers.Count && userId != manager.id)
          {
            availableId = true;
            employeeToPromote = listUsers.Find(e => e.id == userId);
          }
          else
          {
            availableId = false;
            errorMessage = $"Please inset a number between 1 and {listUsers.Count} with exception of {manager.id}";
            continue;
          }
        } while (!availableId);

        bool promoteAuth = true;
        var options = new List<string> { "Manager", "Stocker", "Cashier" };
        string? roleUnavailable = "...";
        int roleChosen = 0;
        string? roleChosenText = " ";
        do
        {
          Console.Clear();

          if (employeeToPromote != null)
          {
            System.Console.WriteLine("\nUser selected\n");
            System.Console.WriteLine($"ID: {employeeToPromote.id}");
            System.Console.WriteLine($"Name: {employeeToPromote.name}");
            System.Console.WriteLine($"Role: {employeeToPromote.position}\n");

            if (!promoteAuth)
            {
              System.Console.WriteLine("Please choose between 1 or 2.\n");
            }

            System.Console.WriteLine("Options: ");

            int index = 0;
            for (int i = 0; i < options.Count; i++)
            {
              if (employeeToPromote.position != options[i])
              {
                index++;
                System.Console.WriteLine($"{index} {options[i]}");
              }
              else
              {
                roleUnavailable = options[i];
              }
            }
            options.Remove(roleUnavailable);

            System.Console.Write("\nChoose a Role: ");

            roleChosen = Convert.ToInt32(Console.ReadLine());

            if (roleChosen >= 1 && roleChosen <= 2)
            {
              promoteAuth = true;
            }
            else
            {
              promoteAuth = false;
              continue;
            }

            switch (roleChosen)
            {
              case 1:
                roleChosenText = options[roleChosen - 1];
                break;
              case 2:
                roleChosenText = options[roleChosen - 1];
                break;
            }

            bool promote = true;
            string? promoteAnswer = "Y";
            do
            {

              Console.Clear();

              if (!promote)
                System.Console.WriteLine("Please insert y or n.");

              System.Console.Write($"\nDo you want to Promote {employeeToPromote.name} from {employeeToPromote.position} to {roleChosenText}?(y/n) ");

              promoteAnswer = Console.ReadLine();
              if (promoteAnswer != null)
              {
                switch (promoteAnswer.ToLower())
                {
                  case "y":
                    promote = true;
                    promoteAuth = true;
                    promoteUser = true;

                    switch (roleChosenText)
                    {
                      case "Manager":
                        Manager newManager = new Manager(listUsers[userId - 1].id, listUsers[userId - 1].name, listUsers[userId - 1].password, "Manager");
                        listUsers[userId - 1] = newManager;
                        break;
                      case "Stocker":
                        Stocker newStocker = new Stocker(listUsers[userId - 1].id, listUsers[userId - 1].name, listUsers[userId - 1].password, "Stocker");
                        listUsers[userId - 1] = newStocker;
                        break;
                      case "Cashier":
                        Cashier newCashier = new Cashier(listUsers[userId - 1].id, listUsers[userId - 1].name, listUsers[userId - 1].password, "Cashier");
                        listUsers[userId - 1] = newCashier;
                        break;
                    }
                    break;

                  case "n":
                    promote = true;
                    break;
                  default:
                    promote = false;
                    break;
                }
              }

            } while (!promote);
          }
        } while (!promoteAuth);

      } while (!promoteUser);

      Console.Clear();
      showUsers(listUsers);
    }
  }

  public class Stocker : Employee, AbsStocker
  {
    public Stocker(int id, string? name, string? password, string? position) : base(id, name, password, position) { }

    public void addBook(List<Book> listBook)
    {
      System.Console.WriteLine($"Stocker ID: {id}");
      System.Console.WriteLine($"Stocker Name: {name}");
      System.Console.WriteLine($"Stocker Password: {password}");
      System.Console.WriteLine($"Stocker Position: {position}");
    }
    public void removeBook(List<Book> listBook)
    {
      System.Console.WriteLine($"Stocker ID: {id}");
      System.Console.WriteLine($"Stocker Name: {name}");
      System.Console.WriteLine($"Stocker Password: {password}");
      System.Console.WriteLine($"Stocker Position: {position}");
    }
    public void updateBook(List<Book> listBook)
    {
      System.Console.WriteLine($"Stocker ID: {id}");
      System.Console.WriteLine($"Stocker Name: {name}");
      System.Console.WriteLine($"Stocker Password: {password}");
      System.Console.WriteLine($"Stocker Position: {position}");
    }
  }

  public class Cashier : Employee, AbsCashier
  {
    private int booksSold { get; set; }
    private int booksBought { get; set; }
    private double moneyEarned { get; set; }

    public Cashier(int id, string? name, string? password, string? position) : base(id, name, password, position)
    {
      booksBought = 0;
      booksSold = 0;
      moneyEarned = 0;
    }
    public void sellBook(List<Book> listBook)
    {
      System.Console.WriteLine($"Cashier ID: {id}");
      System.Console.WriteLine($"Cashier Name: {name}");
      System.Console.WriteLine($"Cashier Password: {password}");
      System.Console.WriteLine($"Cashier Position: {position}");
    }
    public void buyBook(List<Book> listBook)
    {
      System.Console.WriteLine($"Cashier ID: {id}");
      System.Console.WriteLine($"Cashier Name: {name}");
      System.Console.WriteLine($"Cashier Password: {password}");
      System.Console.WriteLine($"Cashier Position: {position}");
    }
  }
}