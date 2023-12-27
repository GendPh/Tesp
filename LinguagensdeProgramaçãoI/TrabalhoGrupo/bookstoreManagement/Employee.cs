namespace bookstoreManagement
{

  public class Employee
  {
    public int id { get; protected set; }
    public string name { get; protected set; }
    public string password { get; protected set; }

    // Position 1: Admin; 2: Manager; 3: Stocker; 4: Cashier;
    public int position { get; protected set; }

    public Employee(int id, string name, string password, int position)
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

  public class Stocker : Employee, AbsStocker
  {
    public Stocker(int id, string name, string password, int position) : base(id, name, password, position) { }

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
  public class Manager : Employee, AbsManager
  {
    public Manager(int id, string name, string password, int position) : base(id, name, password, position) { }

    public void showUsers(List<Employee> listUsers)
    {
      foreach (Employee user in listUsers)
      {
        System.Console.WriteLine($"Manager ID: {id}");
        System.Console.WriteLine($"Manager Name: {name}");
        System.Console.WriteLine($"Manager Password: {password}");
        System.Console.WriteLine($"Manager Position: {position}");
        System.Console.WriteLine("");
      }
    }
    public void addUsers(List<Employee> listUsers)
    {
      System.Console.WriteLine($"Manager ID: {id}");
      System.Console.WriteLine($"Manager Name: {name}");
      System.Console.WriteLine($"Manager Password: {password}");
      System.Console.WriteLine($"Manager Position: {position}");

    }
    public void removeUsers(List<Employee> listUsers)
    {
      System.Console.WriteLine($"Manager ID: {id}");
      System.Console.WriteLine($"Manager Name: {name}");
      System.Console.WriteLine($"Manager Password: {password}");
      System.Console.WriteLine($"Manager Position: {position}");
    }
    public void promoteUsers(List<Employee> listUsers)
    {
      System.Console.WriteLine($"Manager ID: {id}");
      System.Console.WriteLine($"Manager Name: {name}");
      System.Console.WriteLine($"Manager Password: {password}");
      System.Console.WriteLine($"Manager Position: {position}");
    }

  }
  public class Cashier : Employee, AbsCashier
  {
    private int booksSold { get; set; }
    private int booksBought { get; set; }
    private double moneyEarned { get; set; }

    public Cashier(int id, string name, string password, int position) : base(id, name, password, position)
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