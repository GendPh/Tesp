public class BirthdayDate
{
  #region Variables
  //Will be collected in Method SetName()
  private string? name = "Gabriel";

  public string Nome
  {
    get { return name; }
    set { name = value; }
  }

  //Will be collected in Method SetBirthdayYear()
  private int BirthdayYear;

  //Will be collected in Method GetAge()
  private int Age;

  //Will be collected in Method SetSize()
  private double size;
  #endregion

  #region Set Methods
  //Method to Set the Name
  public void SetName(string n)
  {
    name = n;
  }

  //Method to Set the Birthday year
  public void SetBirthdayYear(int y)
  {
    BirthdayYear = y;
  }

  //Method to Set the Size
  public void SetSize(double s)
  {
    size = s;
  }
  #endregion
  //Method to get the Age

  #region Get Methods
  //Method to Get the Name
  public string GetName()
  {
    return name;
  }
  //Method to Get the BirthdayYear
  public int GetBirthdayYear()
  {
    return BirthdayYear;
  }
  //Method to Get the Size
  public double GetSize()
  {
    return size;
  }

  private int GetCurrentYear()
  {
    DateTime current_year = DateTime.Now;
    return current_year.Year;
  }
  //Get the Age
  public int GetAge()
  {
    return GetCurrentYear() - BirthdayYear;
  }
  #endregion

  //Method to show all the Data collected
  public void ShowData()
  {
    Age = GetAge();
    System.Console.WriteLine($"\nWith Set Methods\nName:{name}\nBirthday:{BirthdayYear}\nAge:{Age}\nSize:{size}m");
  }

}
