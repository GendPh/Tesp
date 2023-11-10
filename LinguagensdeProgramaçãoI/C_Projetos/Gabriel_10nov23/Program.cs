using System;

namespace Aula_10nov23
{
  class Program
  {
    static void Main(string[] args)
    {

      int Hours = 10;
      int Minutes = 30;
      int Seconds = 15;

      Clock watch = new(Hours, Minutes, Seconds);
      watch.SetTime(23, 23, 59);

      int HourFromWatch = watch.GetHour();
      System.Console.WriteLine($"Constructor Hour:{HourFromWatch}");

      watch.ShowTime();
    }
  }
}