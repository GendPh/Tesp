public class Clock
{

  //Set the Hour Minutes Seconds and Period
  private int Hour;
  private int Minutes;
  private int Seconds;
  private string? Period;

  //Set the constructor with a pre-set value
  public Clock(int h, int m, int s)
  {
    Hour = h;
    Minutes = m;
    Seconds = s;
  }

  #region Set Methods
  //Check the Period AM || PM
  private string SetPeriod(int h)
  {
    if (h < 12)
    {
      return "AM";
    }
    else
    {
      return "PM";
    }
  }

  //Set a personal value to Hour Minutes && Seconds
  public void SetTime(int h, int m, int s)
  {
    if (h > 0 && h <= 23)
    {
      Hour = h;
    }
    else
    {
      System.Console.WriteLine($"Impossible to set this Hour {h}");
    }

    if (m > 0 && m <= 59)
    {
      Minutes = m;
    }
    else
    {
      System.Console.WriteLine($"Impossible to set this Minutes {m}");
    }

    if (s > 0 && s <= 59)
    {
      Seconds = s;
    }
    else
    {
      System.Console.WriteLine($"Impossible to set this Seconds {s}");
    }
  }
  #endregion


  #region Get Methods
  //Get the Hour
  public int GetHour()
  {
    return Hour;
  }

  //Get the Minutes
  public int GetMinutes()
  {
    return Minutes;
  }

  //Get the Seconds
  public int GetSeconds()
  {
    return Seconds;
  }

  //Get the Period
  public string GetPeriod()
  {
    return SetPeriod(Hour);
  }
  #endregion


  #region Show Methods
  //Method to Show to full content H:M:S Period(AM||PM)
  public void ShowTime()
  {
    Period = SetPeriod(Hour);
    System.Console.WriteLine($"{Hour}:{Minutes}:{Seconds}{Period}");
  }
  #endregion
}
