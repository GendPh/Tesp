namespace bookstoreManagement
{
  public interface AbsCashier
  {
    void sellBook(List<Book> listBook);
    void BuyBook(List<Book> listBook);
  }
  public interface AbsStocker
  {
    void AddBook(List<Book> listBook);
    void RemoveBook(List<Book> listBook);
    void RestockBook(List<Book> listBook);
  }
  public interface AbsManager
  {
    void ShowUsers(List<Employee> listUsers);
    void AddUsers(List<Employee> listUsers);
    void RemoveUsers(List<Employee> listUsers, Manager manager);
  }
}

