public class Clock
{
  public int hours;
  public int minutes;
  public int seconds;
  public string period = "AM";


  public Clock(int h, int m, int s)
  {
    hours = h;
    minutes = m;
    seconds = s;
  }

  public void SetTime(int h, int m, int s)
  {
    if (h > 0 && h <= 23)
    {
      hours = h;
    }
    if (m > 0 && m <= 59)
    {
      minutes = m;
    }
    if (s > 0 && s <= 59)
    {
      seconds = s;
    }
  }

  public int GetHour()
  {
    return hours;
  }

  public void ShowTime()
  {
    if (hours >= 12)
    {
      period = "PM";
    }
    System.Console.WriteLine($"{hours}:{minutes}:{seconds} {period}");
  }
}
