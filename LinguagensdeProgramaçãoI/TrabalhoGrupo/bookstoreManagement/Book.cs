namespace bookstoreManagement
{
  public class Book
  {
    public int Code { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public string ISBN { get; set; }
    public string Genre { get; set; }
    public double Price { get; set; }
    public double Iva { get; set; }
    public int Stock { get; set; }
    public int Sold { get; set; }

    public Book(int code, string title, string author, string ISBN, string genre, double price, double iva, int stock)
    {
      Code = code;
      Title = title;
      Author = author;
      this.ISBN = ISBN;
      Genre = genre;
      Price = price;
      Iva = iva;
      Stock = stock;
    }
  }
}

