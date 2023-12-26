namespace bookstoreManagement
{
  public class Employee
  {
    protected string name { get; set; }
    protected string password { get; set; }

    public Employee(string name, string password)
    {
      this.name = name;
      this.password = password;
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

  public class Cashier : Employee
  {
    private int booksSold { get; set; }
    private int booksBought { get; set; }
    private double moneyEarned { get; set; }

    public Cashier(string name, string password) : base(name, password)
    {
      booksBought = 0;
      booksSold = 0;
      moneyEarned = 0;
    }
  }
}