namespace bookstoreManagement
{
  // Define a class named Employee
  public class Employee
  {
    // Properties for the employee's ID, name, password, and position
    public int id { get; protected set; }
    public string? name { get; protected set; }
    public string? password { get; protected set; }
    public string? position { get; protected set; }

    // Constructor for creating an instance of the Employee class
    // Takes parameters for ID, name, password, and position
    public Employee(int id, string? name, string? password, string? position)
    {
      // Initialize the properties with the provided values
      this.id = id;
      this.name = name;
      this.password = password;
      this.position = position;
    }
    protected void PrintBookDetail(Book book)
    {
      // Print the details of the book in a formatted manner
      Console.WriteLine($" - Code: {book.Code}");
      Console.WriteLine($" - Title: {book.Title}");
      Console.WriteLine($" - Author: {book.Author}");
      Console.WriteLine($" - ISBN: {book.ISBN}");
      Console.WriteLine($" - Genre: {book.Genre}");
      Console.WriteLine($" - Price: {book.Price}€");
      Console.WriteLine($" - IVA: {book.Iva}%");
      Console.WriteLine($" - Stock: {book.Stock}");
      //Console.WriteLine($" - Possible Stock: {book.PossibleStock}");
      Console.WriteLine($" - Sold: {book.Sold}");
      Console.WriteLine($" - Earned: {book.Earned}€\n");
    }

    public void ConsultBookList(List<Book> bookList)
    {
      Console.Clear();

      if (bookList.Count > 0)
      {
        foreach (Book book in bookList)
        {
          PrintBookDetail(book);
        }
      }
      else
      {
        System.Console.WriteLine("\nBook Store is Empty.\n");
      }
    }
    public void ConsultBookByCode(List<Book> bookList)
    {
      Console.Clear();

      string? targetISBN = "978-0-06-112008-4";

      System.Console.Write("Insert a ISBN (978-0-06-112008-4): ");

      targetISBN = Console.ReadLine();

      System.Console.WriteLine("");

      Book? book = bookList.Find(e => e.ISBN == targetISBN);

      if (book != null)
      {
        PrintBookDetail(book);
      }
      else
      {
        Console.WriteLine($"Book with ISBN {targetISBN} not found.\n");
      }
    }
    public void ConsultStock(List<Book> bookList)
    {
      Console.Clear();

      int stock = 0;

      foreach (Book book in bookList)
      {
        stock += book.Stock;
      }

      System.Console.WriteLine($"\nThere is a total of {stock} books available.\n");
    }
    public void ConsultBookByGenre(List<Book> bookList)
    {

      List<string> allGenres = bookList.Select(book => book.Genre).Distinct().ToList();

      bool showGenre = true;
      string? errorMessage = " ";
      do
      {
        Console.Clear();

        // Display the list of genres
        Console.WriteLine("\nList of all genres:\n");

        for (int index = 0; index < allGenres.Count; index++)
        {
          Console.WriteLine($"\t{index + 1}. {allGenres[index]};");
        }

        System.Console.Write((!showGenre) ? $"\n{errorMessage}\n" : " ");

        System.Console.Write("\nInsert a Genre ID: ");

        try
        {
          int genreId = Convert.ToInt32(Console.ReadLine());

          if (genreId > 0 && genreId <= allGenres.Count)
          {
            genreId--;
            string? choose_genre = allGenres[genreId];

            List<Book>? books_genre = bookList.Where(book => book.Genre.ToLower().Contains(choose_genre.ToLower())).ToList();

            Console.Clear();
            if (books_genre != null)
            {
              foreach (Book book in books_genre)
              {
                PrintBookDetail(book);
              }
            }
            else
            {
              System.Console.WriteLine($"There wasn't found any book with {choose_genre}.\n");
            }
          }
          else
          {
            showGenre = false;
            errorMessage = $"The id {genreId} wasn't found.";
            continue;
          }
        }
        catch (FormatException)
        {
          showGenre = false;
          errorMessage = "Please insert a proper Id.";
          continue;
        }
        showGenre = true;
      } while (!showGenre);
    }
    public void ConsultBookByAuthor(List<Book> bookList)
    {
      Console.Clear();

      List<string> allAuthors = bookList.Select(book => book.Author).Distinct().ToList();

      // Display the list of genres
      Console.WriteLine("\nList of all Authors:\n");

      for (int index = 0; index < allAuthors.Count; index++)
      {
        Console.WriteLine($"\t{index + 1}. {allAuthors[index]};");
      }

      string? authorSelected;
      System.Console.Write("\nSelect one off the Authors above: ");
      authorSelected = Console.ReadLine();

      if (authorSelected == null)
        authorSelected = "Empty";


      List<Book>? selectedAuthors = bookList.Where(book => book.Author.ToLower().Contains(authorSelected.ToLower())).ToList();

      Console.Clear();
      System.Console.WriteLine("");

      if (selectedAuthors != null && selectedAuthors.Count > 0)
      {
        foreach (Book book in selectedAuthors)
        {
          PrintBookDetail(book);
        }
      }
      else
      {
        System.Console.WriteLine($"No books found with the Author {authorSelected}.\n");
      }
    }

    protected void OperationSellBook(List<Book> bookList, List<Book> cart, Employee employee)
    {
      // Flag to control the main operation loop
      bool operationBuy = true;

      do
      {
        // Clear the console screen
        Console.Clear();

        // Display the available books to the employee
        employee.ConsultBookList(bookList);

        // Display the contents of the cart
        System.Console.WriteLine("Your Cart\n");
        double total_cart = 0;

        if (cart.Count < 1)
        {
          System.Console.WriteLine("Cart Empty");
        }
        else
        {
          // Group the books in the cart by title and calculate quantities and prices
          var titleCounts = cart.GroupBy(book => book.Title).Select(group => new { Title = group.Key, Count = group.Count(), Price = group.First().Price, Iva = group.First().Iva }).ToList();

          // Display the titles, quantities, prices, and total price for each book in the cart
          foreach (var titleCount in titleCounts)
          {
            double book_price_count = Math.Round(((titleCount.Price + (titleCount.Price * (titleCount.Iva / 100))) * titleCount.Count), 2);
            Console.WriteLine($"Book: '{titleCount.Title}' | Quantity: {titleCount.Count} | Price: {book_price_count}€ | IVA: {titleCount.Iva}%");
            total_cart = Math.Round((total_cart + book_price_count), 2);
          }

          System.Console.WriteLine($"\nTotal Cart: {total_cart}€");
        }

        // Prompt the user to input a book ID to add to the cart (0 to stop the operation)
        System.Console.Write("\nPlease insert a Book ID (0 to stop the operation): ");

        int book_id = 0;

        try
        {
          // Read the user input and convert it to an integer
          book_id = Convert.ToInt32(Console.ReadLine());

          if (book_id != 0)
          {
            operationBuy = false;

            // Find the book with the specified ID in the bookList
            Book? searched_book = bookList.Find(book => book.Code == book_id);

            // Check if the book exists and is in stock
            if (searched_book != null && searched_book.Stock > 0)
            {
              int cart_book_stock = 1;

              // Check if the book is already in the cart and get its quantity
              var targetBook = cart.GroupBy(book => book.Title).Where(group => group.Key == searched_book.Title).Select(group => new { Title = group.Key, Count = group.Count() }).FirstOrDefault();

              if (targetBook != null)
              {
                cart_book_stock = targetBook.Count + 1;
              }

              // Calculate the available stock of the book in the cart
              searched_book.PossibleStock = searched_book.Stock - cart_book_stock;

              // Add the book to the cart if there is available stock
              if (searched_book.PossibleStock >= 0)
              {
                cart.Add(searched_book);
              }
            }
          }
          else
          {
            // Check if the cart is not empty
            if (cart.Count != 0)
            {
              Console.Clear();
              System.Console.WriteLine("\nThis is your final cart:\n");

              // Display the contents of the cart with quantities, prices, and total price for each book
              var titleCounts = cart.GroupBy(book => book.Title).Select(group => new { Title = group.Key, Count = group.Count(), Price = group.First().Price, Iva = group.First().Iva }).ToList();

              foreach (var titleCount in titleCounts)
              {
                double book_price_count = Math.Round(((titleCount.Price + (titleCount.Price * (titleCount.Iva / 100))) * titleCount.Count), 2);
                Console.WriteLine($"Book: '{titleCount.Title}' | Quantity: {titleCount.Count} | Price: {book_price_count}€ | IVA: {titleCount.Iva}%");
              }

              System.Console.WriteLine("\nInformation:");

              // Calculate and display the discount based on the total cart value
              double Discount = (total_cart >= 50) ? 0.10 : 0;
              System.Console.WriteLine($"- Discount: {Discount * 100}%");

              // Apply the discount to the total cart value
              total_cart = Math.Round((total_cart - (total_cart * Discount)), 2);
              System.Console.WriteLine($"- Total Cart: {total_cart}€\n");

              // Get user validation to proceed or cancel the operation
              string? val = GetContinueValidation();

              Console.Clear();

              // Process the user's choice
              switch (val)
              {
                case "y":
                  // Apply the discount and update the stock and sales information for each book in the cart
                  foreach (var titleCount in titleCounts)
                  {
                    double book_price_with_iva = titleCount.Price + (titleCount.Price * (titleCount.Iva / 100));
                    double book_price_with_discount = book_price_with_iva - (book_price_with_iva * Discount);
                    double book_price_count = Math.Round((book_price_with_discount * titleCount.Count), 2);
                    Book? book_in_list = bookList.Find(book => book.Title == titleCount.Title);
                    if (book_in_list != null)
                    {
                      book_in_list.Sold += titleCount.Count;
                      book_in_list.Stock -= titleCount.Count;
                      book_in_list.Earned = book_price_count;
                    }
                  }

                  System.Console.WriteLine("\nYou successfully completed the operation.\n\nCart Cleared.\n");
                  break;

                case "n":
                  System.Console.WriteLine("\nYou canceled the operation.\n\nCart Cleared.\n");
                  break;
              }

              // Clear the cart after completing the operation
              cart.Clear();
              operationBuy = true;
            }
            else
            {
              Console.Clear();
              System.Console.WriteLine("\nYou canceled the operation.\n");
            }
          }
        }
        catch (FormatException)
        {
          // Handle the case where the user enters invalid input
          operationBuy = false;
        }
      } while (!operationBuy); // Repeat the loop until the user decides to stop the operation
    }

    protected int GetNumber(string? text)
    {
      int number = 0;

      System.Console.Write($"Enter a Book {text}: ");

      try
      {
        number = Convert.ToInt32(Console.ReadLine());
      }
      catch (FormatException)
      {
        return 0;
      }
      catch (OverflowException)
      {
        return 0;
      }


      return number;
    }
    protected string GetContinueValidation()
    {
      string answer = "n"; // Initialize to a default value
      bool continueVal = true;

      do
      {

        if (!continueVal)
        {
          Console.Clear();
          System.Console.WriteLine("\nPlease choose between:\n'y' -> to continue;\n'n' -> to cancel change\n");
        }

        System.Console.Write("Do you wish to continue (y/n): ");

        answer = Console.ReadLine()?.ToLower() ?? ""; // Use the null-conditional operator and provide a default value

        if (!string.IsNullOrEmpty(answer) && (answer == "y" || answer == "n"))
        {
          continueVal = true;
        }
        else
        {
          continueVal = false;
        }

      } while (!continueVal);

      return answer;
    }
  }

  public class Manager : Employee, IntManager
  {
    private new string? position { get; set; }

    public Manager(int id, string? name, string? password, string? position) : base(id, name, password, position)
    {
    }

    public void ShowUsers(List<Employee> listUsers)
    {
      System.Console.WriteLine("");
      for (int i = 0; i < listUsers.Count; i++)
      {
        System.Console.WriteLine($"Employee ID: {listUsers[i].id}");
        System.Console.WriteLine($"Employee Name: {listUsers[i].name}");
        System.Console.WriteLine($"Employee Password: {listUsers[i].password}");
        System.Console.WriteLine($"Employee Position: {listUsers[i].position}\n");
      }
    }
    public void AddUsers(List<Employee> listUsers)
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

          if (Password?.Length < 5)
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

      ShowUsers(listUsers);
    }
    public void RemoveUsers(List<Employee> listUsers, Manager manager)
    {
      bool removed = true;
      int userId = -1;
      Employee? empToRemove;
      string? errorMessage = " ";
      do
      {
        Console.Clear();

        ShowUsers(listUsers);

        System.Console.WriteLine("\nRemove a user profile by entering:\n - Unique ID;\n\nThis action will permanently delete the user's profile from the system.\nPlease be cautious when removing users.\n");

        if (!removed)
        {
          System.Console.WriteLine($"{errorMessage}\n");
        }

        System.Console.Write("Please insert the user ID (0 to cancel):");
        try
        {
          userId = Convert.ToInt32(Console.ReadLine());

          if (userId == manager.id)
          {
            removed = false;
            errorMessage = "You can't choose your ID.";
            continue;
          }
        }
        catch (FormatException)
        {
          removed = false;
          errorMessage = "Please insert a proper ID.";
          continue;
        }

        Console.Clear();

        if (userId == 0)
        {
          System.Console.WriteLine("\nOperation Canceled.\n");
          removed = true;
        }
        else
        {
          empToRemove = listUsers.Find(empToRemove => empToRemove.id == userId);

          if (empToRemove != null)
          {
            System.Console.WriteLine("\nUser selected\n");
            System.Console.WriteLine($"ID: {empToRemove.id}");
            System.Console.WriteLine($"Name: {empToRemove.name}");
            System.Console.WriteLine($"Role: {empToRemove.position}\n");

            string? val = GetContinueValidation();

            Console.Clear();
            switch (val)
            {
              case "y":
                System.Console.WriteLine($"\nOperation to remove the user {empToRemove.name}, was a success.\n");
                listUsers.Remove(empToRemove);
                break;
              case "n":
                System.Console.WriteLine($"\nOperation to remove the user {empToRemove.name}, was cancelled.\n");
                break;
            }
          }
          else
          {
            removed = false;
            errorMessage = $"The user with the ID {userId}, couldn't be found.";
            continue;
          }
        }

        removed = true;
      } while (!removed);

    }
    protected internal void PromoteUsers(List<Employee> listUsers, Manager manager)
    {


      int userId = 0;
      Employee? empToPromote;
      string? errorMessage = " ";

      bool promote = true;

      do
      {

        Console.Clear();

        ShowUsers(listUsers);

        System.Console.WriteLine("\nPromote a user role by entering:\n - Unique ID;\n\nThis action will change the user's role within the system.\nPlease exercise caution when promoting users.\n");

        if (!promote)
        {
          System.Console.WriteLine($"{errorMessage}\n");
        }

        System.Console.Write("Please insert the user ID (0 to cancel):");
        try
        {
          userId = Convert.ToInt32(Console.ReadLine());

          if (userId == manager.id)
          {
            promote = false;
            errorMessage = "You can't choose your ID.";
            continue;
          }
        }
        catch (FormatException)
        {
          promote = false;
          errorMessage = "Please insert a proper ID.";
          continue;
        }

        Console.Clear();

        if (userId == 0)
        {
          System.Console.WriteLine("\nOperation Canceled.\n");
          promote = true;
        }
        else
        {
          empToPromote = listUsers.Find(empToPromote => empToPromote.id == userId);

          if (empToPromote != null)
          {

            System.Console.WriteLine("\nUser selected\n");
            System.Console.WriteLine($"\tID: {empToPromote.id}");
            System.Console.WriteLine($"\tName: {empToPromote.name}");
            System.Console.WriteLine($"\tRole: {empToPromote.position}\n");


            bool correctPosition = true;
            var options = new List<string> { "Manager", "Stocker", "Cashier" };

            string? roleUnavailable = "...";
            int roleChosen = -1;
            string? roleChosenText = " ";

            do
            {
              if (!correctPosition)
              {
                Console.Clear();
                System.Console.WriteLine($"\n{errorMessage}\n");
              }

              int index = 0;

              System.Console.WriteLine("Please choose a role to Promote.\n");
              for (int i = 0; i < options.Count; i++)
              {
                if (empToPromote.position != options[i])
                {
                  index++;
                  System.Console.WriteLine($"\t{index} {options[i]}");
                }
                else
                {
                  roleUnavailable = options[i];
                }
              }

              options.Remove(roleUnavailable);

              System.Console.Write("\nChoose a Role: ");

              try
              {
                roleChosen = Convert.ToInt32(Console.ReadLine());

                if (roleChosen < 1 || roleChosen > 2)
                {
                  correctPosition = false;
                  errorMessage = "Please insert a value between 1 and 2.";
                  continue;
                }
                else
                {
                  switch (roleChosen)
                  {
                    case 1:
                      roleChosenText = options[roleChosen - 1];
                      break;
                    case 2:
                      roleChosenText = options[roleChosen - 1];
                      break;
                  }

                  Console.Clear();
                  System.Console.WriteLine($"\nDo you wish to change the user {empToPromote.name} from {empToPromote.position} to {roleChosenText}?\n");

                  string? val = GetContinueValidation();

                  Console.Clear();
                  switch (val)
                  {
                    case "y":
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
                      System.Console.WriteLine($"\nOperation to promote the user {empToPromote.name} to {roleChosenText}, was a success.\n");
                      break;
                    case "n":
                      System.Console.WriteLine($"\nOperation to promote the user {empToPromote.name}, was cancelled.\n");
                      break;
                  }
                }

              }
              catch (FormatException)
              {
                correctPosition = false;
                errorMessage = "Please insert a value between 1 and 2.";
                continue;
              }

              correctPosition = true;
            } while (!correctPosition);


          }
          else
          {
            promote = false;
            errorMessage = $"The user with the ID {userId}, couldn't be found.";
            continue;
          }
        }

        promote = true;
      } while (!promote);
    }
    internal void SellBook(List<Book> bookList, List<Book> cart, Employee employee)
    {
      // Manager can access the internal method of the base class
      OperationSellBook(bookList, cart, employee);
    }
  }

  public class Stocker : Employee, IntStocker
  {
    public Stocker(int id, string? name, string? password, string? position) : base(id, name, password, position) { }

    public void AddBook(List<Book> listBook)
    {
      Console.Clear();

      bool createdBook = false;
      Random random = new Random();

      int id = listBook[listBook.Count - 1].Code + 1;
      string? titleBook;
      string? authorBook;
      string? newISBN;
      string? genreBook;
      float priceBook = 0;
      int ivaBook = random.Next(0, 2) == 0 ? 6 : 23;

      do
      {
        System.Console.WriteLine("\nAdd a new Book by entering:\n - Book Id;\n - Book Title;\n - Book Author;\n - Book ISBN;\n - Book Genre;\n - Book Price;\n - Iva;\n - Stock;\n - Sold;\n\nThe system will assign a unique ID, ISBN and Iva.\n");


        bool possibleTitle = true;
        do
        {
          if (!possibleTitle)
          {
            Console.Clear();
            System.Console.WriteLine("\nPlease insert a title.");
          }

          System.Console.Write("Book Title: ");
          titleBook = Console.ReadLine();

          if (string.IsNullOrEmpty(titleBook))
          {
            possibleTitle = false;
          }
          else
          {
            possibleTitle = true;
          }

        } while (!possibleTitle);

        bool possibleAuthor = true;
        do
        {
          if (!possibleAuthor)
          {
            Console.Clear();
            System.Console.WriteLine("\nPlease insert a Author.");
          }

          System.Console.Write("Book Author: ");
          authorBook = Console.ReadLine();

          if (string.IsNullOrEmpty(authorBook))
          {
            possibleAuthor = false;
          }
          else
          {
            possibleAuthor = true;
          }

        } while (!possibleAuthor);

        bool availableISBN = true;
        do
        {
          int part1 = random.Next(0, 1000);
          int part2 = random.Next(0, 10);
          int part3 = random.Next(0, 100);
          int part4 = random.Next(0, 1000000);
          int part5 = random.Next(0, 10);

          newISBN = $"{part1:D3}-{part2}-{part3}-{part4:D5}-{part5}";

          for (int i = 0; i < listBook.Count; i++)
          {
            if (listBook[i].ISBN == newISBN)
            {
              availableISBN = false;
              break;
            }
          }
        } while (!availableISBN);

        bool possibleGenre = true;
        do
        {
          if (!possibleGenre)
          {
            Console.Clear();
            System.Console.WriteLine("\nPlease insert a Genre.");
          }

          System.Console.Write("Book Genre: ");
          genreBook = Console.ReadLine();

          if (string.IsNullOrEmpty(genreBook))
          {
            possibleGenre = false;
          }
          else
          {
            possibleGenre = true;
          }

        } while (!possibleGenre);


        bool availablePrice = false;

        do
        {
          try
          {
            System.Console.Write("Book Price: ");
            priceBook = Convert.ToSingle(Console.ReadLine());
            availablePrice = true;
          }
          catch (FormatException)
          {
            Console.Clear();
            Console.WriteLine("\nInvalid input. Please enter a valid numeric value for the book price.");
          }
          catch (OverflowException)
          {
            Console.Clear();
            Console.WriteLine("\nEntered value is too large or too small for a float.");
          }
          catch (Exception ex)
          {
            Console.Clear();
            Console.WriteLine($"\nAn unexpected error occurred: {ex.Message}");
          }
        } while (!availablePrice);

        bool valid_stock = true;
        int stockBook = 0;
        do
        {
          if (!valid_stock)
          {
            Console.Clear();
            System.Console.WriteLine("\nPlease insert a valid Stock.\n");
          }

          System.Console.Write("Insert stock to be added: ");
          try
          {
            stockBook = Convert.ToInt32(Console.ReadLine());

            if (stockBook < 1)
            {
              valid_stock = false;
              continue;
            }
          }
          catch (FormatException)
          {
            valid_stock = false;
            continue;
          }

          valid_stock = true;
        } while (!valid_stock);


        string? validation;
        bool availableAuth = true;

        do
        {
          Console.Clear();
          System.Console.WriteLine("\n\tNew Book\n");
          System.Console.WriteLine($"Book Code: {id}");
          System.Console.WriteLine($"Book Title: {titleBook}");
          System.Console.WriteLine($"Book Author: {authorBook}");
          System.Console.WriteLine($"Book Genre: {genreBook}");
          System.Console.WriteLine($"Book ISBN: {newISBN}");
          System.Console.WriteLine($"Book IVA: {ivaBook}");
          System.Console.WriteLine($"Book Price: {priceBook}");
          System.Console.WriteLine($"Book Stock: {stockBook}\n");

          if (!availableAuth)
            System.Console.WriteLine("Please insert y or n.");

          System.Console.Write("Do you wish to add this book?(y/n) ");
          validation = Console.ReadLine();

          if (!string.IsNullOrEmpty(validation))
          {
            switch (validation.ToLower())
            {
              case "y":
                createdBook = true;
                availableAuth = true;

                if (titleBook != null && authorBook != null && newISBN != null && genreBook != null)
                {
                  Book newBook = new Book(id, titleBook, authorBook, newISBN, genreBook, priceBook, ivaBook, stockBook);
                  listBook.Add(newBook);
                  System.Console.WriteLine("\nBook Added successfully!\n");
                }
                else
                {
                  System.Console.WriteLine("Something went wrong!");
                }

                break;
              case "n":
                createdBook = true;
                availableAuth = true;
                Console.Clear();
                System.Console.WriteLine("\nOperation Cancelled.\n");
                break;
              default:
                createdBook = false;
                availableAuth = false;
                break;
            }
          }
          else
          {
            availableAuth = false;
          }

        } while (!availableAuth);

      } while (!createdBook);

    }
    public void RemoveBook(List<Book> listBook)
    {
      int bookId = -1;
      string? errorMessage = " ";
      Book? bookToReStock;
      bool reStock = true;
      do
      {
        Console.Clear();

        ConsultBookList(listBook);

        System.Console.WriteLine("\nRemove a book by entering:\n - Book ID;\n\nWarning: This action will permanently remove the book from the inventory, including the stock defined.\n");

        if (!reStock)
          System.Console.WriteLine($"{errorMessage}\n");

        System.Console.Write("Please select a ID Book (0 to cancel): ");

        try
        {
          bookId = Convert.ToInt32(Console.ReadLine());

          Console.Clear();

          if (bookId == 0)
          {
            System.Console.WriteLine("\nOperation Canceled");
          }
          else
          {
            bookToReStock = listBook.Find(bookToReStock => bookToReStock.Code == bookId);

            if (bookToReStock != null)
            {

              if (bookToReStock.Stock == 0)
              {
                errorMessage = "This Book isn't available to remove Stock.";
                reStock = false;
                continue;
              }


              int stockToRemove = -1;
              bool quantityAvailable = true;

              do
              {
                Console.Clear();
                System.Console.WriteLine("");

                PrintBookDetail(bookToReStock);

                if (!quantityAvailable)
                  System.Console.WriteLine($"{errorMessage}\n");

                System.Console.Write("Select a quantity to remove: ");
                try
                {
                  stockToRemove = Convert.ToInt32(Console.ReadLine());

                  if (stockToRemove < 1 || stockToRemove > bookToReStock.Stock)
                  {
                    errorMessage = "Please insert a proper quantity.";
                    quantityAvailable = false;
                    continue;
                  }
                  else
                  {
                    Console.Clear();
                    System.Console.WriteLine($"\nDo you want to remove {stockToRemove} units from '{bookToReStock.Title}'?\n");

                    string? val = GetContinueValidation();

                    Console.Clear();
                    switch (val)
                    {
                      case "y":
                        System.Console.WriteLine($"\nOperation to remove the {stockToRemove} units from '{bookToReStock.Title}', was a success.\n");
                        listBook[bookId - 1].Stock -= stockToRemove;
                        break;
                      case "n":
                        System.Console.WriteLine($"\nOperation to remove the stock from '{bookToReStock.Title}', was cancelled.\n");
                        break;
                    }
                  }

                }
                catch (FormatException)
                {
                  errorMessage = "Please select a proper quantity.";
                  quantityAvailable = false;
                  continue;
                }

                quantityAvailable = true;
              } while (!quantityAvailable);


            }
            else
            {
              errorMessage = $"Can't find a book with the ID of {bookId}.";
              reStock = false;
              continue;
            }
          }
        }
        catch (FormatException)
        {
          errorMessage = "Please select a proper ID book.";
          reStock = false;
          continue;
        }


        reStock = true;
      } while (!reStock);
    }
    public void RestockBook(List<Book> listBook)
    {
      int bookId = 0;
      bool availableBook = true;
      do
      {
        Console.Clear();

        ConsultBookList(listBook);

        System.Console.WriteLine("\nChange a Book Stock by entering:\n - Book ID;\n\nWarning: This action will permanently change the stock from the inventory, including all existing stock.\n");

        bookId = GetNumber("ID");

        availableBook = (bookId > 0 && bookId <= listBook.Count) ? true : false;

        if (!availableBook)
        {
          Console.Clear();

          System.Console.WriteLine($"\nError retrieving the book with the ID: {bookId}.\nPlease confirm the ID to insert.\n\nPress Any Key to Continue.");
          Console.ReadKey();
          continue;
        }
        else
        {
          bookId--;
        }

        int stockQtyToInsert = 0;
        bool correctQty = true;

        do
        {
          Console.Clear();

          System.Console.WriteLine("\nYou selected the following Book:\n");

          PrintBookDetail(listBook[bookId]);

          stockQtyToInsert = GetNumber("Quantity");

          correctQty = (stockQtyToInsert > 0) ? true : false;

          if (!correctQty)
          {
            Console.Clear();

            System.Console.WriteLine($"\nError retrieving the book quantity: {stockQtyToInsert}.\nPlease confirm the quantity to be higher then 0.\n\nPress Any Key to Continue.");
            Console.ReadKey();
            continue;
          }
        } while (!correctQty);

        int prevCount = listBook[bookId].Stock;
        int futureCount = listBook[bookId].Stock + stockQtyToInsert;

        Console.Clear();

        System.Console.WriteLine($"\nThe Book {listBook[bookId].Title} Stock will go from {prevCount} to {futureCount} units.\n");

        string? val = GetContinueValidation();

        switch (val)
        {
          case "y":
            listBook[bookId].Stock = futureCount;
            Console.Clear();
            System.Console.WriteLine($"\nYou successfully increased the Book '{listBook[bookId].Title}' Stock to {listBook[bookId].Stock} units!\n");
            break;
          case "n":
            availableBook = false;

            Console.Clear();
            System.Console.WriteLine("\nYou have cancel this operation!\n\nPress any Key to restart process.");
            Console.ReadKey();
            break;
        }

      } while (!availableBook);


    }
    public void ChangeIva(List<Book> listBook){
      
    }
  }


  public class Cashier : Employee, IntCashier
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
    public void BuyBook(List<Book> listBook, List<Employee> listEmployees, Employee employee)
    {
      //ConsultBookList(listBook);
      bool buyBook = true;
      string? errorMessage = " ";
      string? new_book_title = " ";
      do
      {
        Console.Clear();
        System.Console.Write((!buyBook) ? $"\n{errorMessage}\n" : " ");

        System.Console.Write("\nPlease insert the Book Title: ");

        new_book_title = Console.ReadLine();

        if (new_book_title != null)
        {
          new_book_title = new_book_title.Trim();

          if (string.IsNullOrWhiteSpace(new_book_title))
          {
            buyBook = false;
            errorMessage = "Please insert a title.";
            continue;
          }


          Book? exist_book = listBook.Find(book => book.Title.ToLower() == new_book_title.ToLower());

          Console.Clear();

          if (exist_book != null)
          {
            System.Console.WriteLine($"\nDo you want to buy the Book '{exist_book.Title}'.\n");

            string? val = GetContinueValidation();
            Console.Clear();
            switch (val)
            {
              case "y":
                exist_book.Stock++;
                System.Console.WriteLine($"\nYou purchased the book '{exist_book.Title}'.\nYour new stock is {exist_book.Stock}.\n");
                break;
              case "n":
                System.Console.WriteLine($"\nYou have canceled the operation to purchase the book '{exist_book.Title}'.\n");
                break;
            }
          }
          else
          {
            System.Console.WriteLine($"\nThis library doesn't contain the book '{new_book_title}'.");
            System.Console.WriteLine("\nIf you wish to continue you will need a Stocker validation.\n");

            string? create_book_validation = GetContinueValidation();

            Console.Clear();

            switch (create_book_validation)
            {
              case "y":
                LoginStockerAddBook(listBook, listEmployees, new_book_title);
                break;
              case "n":
                System.Console.WriteLine($"\nYou have canceled the operation to purchase the book '{new_book_title}'.\n");
                break;
            }
          }
        }
        buyBook = true;
      } while (!buyBook);
    }
    internal void SellBook(List<Book> bookList, List<Book> cart, Employee employee)
    {
      // Manager can access the internal method of the base class
      OperationSellBook(bookList, cart, employee);
    }

    private void LoginStockerAddBook(List<Book> listBook, List<Employee> listEmployees, string? new_book_title)
    {
      if (new_book_title != null)
      {
        bool validateStocker = true;
        string? stockerLoginError = " ";
        string? stockerName = " ";
        Employee? stocker;
        Book? confirm_book_added;

        do
        {
          Console.Clear();
          System.Console.WriteLine("\nValidate Stocker User.");

          System.Console.Write((!validateStocker) ? $"\n{stockerLoginError}\n" : " ");

          System.Console.Write("\nStocker Name: ");
          stockerName = Console.ReadLine();

          stocker = listEmployees.Find(user => user.name == stockerName);

          if (stocker != null && stocker is Stocker stocker_confirm)
          {
            System.Console.WriteLine($"Stocker ID: {stocker_confirm.id}");
            stocker_confirm.AddBook(listBook);

            confirm_book_added = listBook.Find(book => book.Title.ToLower() == new_book_title.ToLower());

            Console.Clear();

            System.Console.WriteLine((confirm_book_added?.Title != null)
                ? $"\nYou have purchased the new book '{new_book_title}'.\n"
                : $"\nFail to add the Book '{new_book_title}'.\n");


          }
          else
          {
            validateStocker = false;
            stockerLoginError = $"The user {stockerName} isn't a Stocker.";
            continue;
          }
          validateStocker = true;
        } while (!validateStocker);
      }
    }
  }
}