namespace bookstoreManagement
{
  public class Book
  {
    public int code { get; set; }
    public string title { get; set; }
    public string author { get; set; }
    public string ISBN { get; set; }
    public string genre { get; set; }
    public double price { get; set; }
    public double iva { get; set; }
    public int stock { get; set; }
    public int sold { get; set; }

    public Book(int code, string title, string author, string ISBN, string genre, double price, double iva, int stock)
    {
      this.code = code;
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.genre = genre;
      this.price = price;
      this.iva = iva;
      this.stock = stock;
    }
  }
}

