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
            new Book(2,"To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", "Fiction", 12.49, 0,50),
            new Book(3,"1984", "George Orwell", "978-0-452-28423-4", "Dystopian", 10.99, 0,50),
            new Book(4,"The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0", "Fiction", 14.79, 0,50),
            new Book(5,"Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "978-0-439-82790-4", "Fantasy", 19.99, 0,50),
            new Book(6,"The Hobbit", "J.R.R. Tolkien", "978-0-618-17812-2", "Fantasy", 17.49, 0,50),
            new Book(7,"Pride and Prejudice", "Jane Austen", "978-0-486-60496-7", "Romance", 11.29, 0,50),
            new Book(8,"The Lord of the Rings", "J.R.R. Tolkien", "978-0-618-34625-2", "Fantasy", 27.99, 0,50),
            new Book(9,"The Da Vinci Code", "Dan Brown", "978-0-385-50420-4", "Mystery", 16.59, 0,50),
            new Book(10,"The Hunger Games", "Suzanne Collins", "978-0-439-02348-1", "Science Fiction", 14.99, 0,50),
            new Book(11,"The Alchemist", "Paulo Coelho", "978-0-06-112008-4", "Fiction", 13.79, 0,50),
            new Book(12,"The Shining", "Stephen King", "978-0-385-50420-4", "Horror", 18.49, 0,50),
            new Book(13,"The Road", "Cormac McCarthy", "978-0-307-26664-9", "Post-apocalyptic", 12.99, 0,50),
            new Book(14,"The Girl with the Dragon Tattoo", "Stieg Larsson", "978-0-307-26666-3", "Mystery", 15.29, 0,50),
            new Book(15,"Brave New World", "Aldous Huxley", "978-0-06-085052-4", "Dystopian", 11.99, 0,50),
            new Book(16,"The Martian", "Andy Weir", "978-0-553-41802-6", "Science Fiction", 20.99, 0,50),
            new Book(17,"The Kite Runner", "Khaled Hosseini", "978-1-59463-193-1", "Fiction", 14.79, 0,50),
            new Book(18,"The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0-345-39180-3", "Science Fiction", 16.49, 0,50),
            new Book(19,"Gone with the Wind", "Margaret Mitchell", "978-1-4165-9110-4", "Historical Fiction", 22.99, 0,50),
            new Book(20,"One Hundred Years of Solitude", "Gabriel Garcia Marquez", "978-0-06-112008-4", "Magical Realism", 19.79, 0,50)
        };
      #endregion


      Cashier cashier = new("Gabriel", "Password");
      cashier.consultBookByGenre(books, "fantasy");
    }
  }
}