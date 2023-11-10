public class BirthdayDate
{
  private string? name;
  private int BirthdayYear;

  private float size;


  public void SetName(string n)
  {
    if (n.length > 0)
    {
      name = n;
    }
    else
    {
      name = "Gabriel"
      System.Console.WriteLine("Unavailable name. Name set to Gabriel");
    }
  }
  public void SetBirthdayYear(int y)
  {
    if (y.length > 0 && y.length <= 4)
    {
      BirthdayYear = y;
    }
    else
    {
      BirthdayYear = 1998;
      System.Console.WriteLine("Unavailable Year. Year set to 1998");
    }
  }
}
