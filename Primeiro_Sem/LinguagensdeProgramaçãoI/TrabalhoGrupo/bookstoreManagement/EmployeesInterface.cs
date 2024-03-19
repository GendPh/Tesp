namespace bookstoreManagement
{
  public interface IntCashier
  {
    void BuyBook(List<Book> listBook, List<Employee> listEmployees, Employee employee);
  }
  public interface IntStocker
  {
    void AddBook(List<Book> listBook);
    void RemoveBook(List<Book> listBook);
    void RestockBook(List<Book> listBook);
  }
  public interface IntManager
  {
    void ShowUsers(List<Employee> listUsers);
    void AddUsers(List<Employee> listUsers);
    void RemoveUsers(List<Employee> listUsers, Manager manager);
  }
}

