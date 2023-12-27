namespace bookstoreManagement
{
  public interface AbsCashier
  {
    void sellBook(List<Book> listBook);
    void buyBook(List<Book> listBook);
  }
  public interface AbsStocker
  {
    void addBook(List<Book> listBook);
    void removeBook(List<Book> listBook);
    void updateBook(List<Book> listBook);
  }
  public interface AbsManager
  {
    void showUsers(List<Employee> listUsers);
    void addUsers(List<Employee> listUsers);
    void removeUsers(List<Employee> listUsers);
    void promoteUsers(List<Employee> listUsers);
  }

}

