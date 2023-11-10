using System;

namespace Aula_10nov23
{
  class Program
  {
    static void Main(string[] args)
    {

      #region Clock Object
      //Manually set hour, minute and seconds. 
      // int Hours = 10;
      // int Minutes = 30;
      // int Seconds = 15;
      // string Period;
      //Create the object watch and give the constructor the value of Hour, Minute and Seconds
      //Clock watch = new(Hours, Minutes, Seconds);

      //Set my Time
      //watch.SetTime(23, 23, 59);

      //Get the Hour
      //int HourFromWatch = watch.GetHour();

      //Get The Period
      //Period = watch.GetPeriod();

      //Print the Hour with Period
      //System.Console.WriteLine($"Constructor Hour: {HourFromWatch}{Period}");

      //Print the full Time H:M:S Period(AM || PM)
      //watch.ShowTime();
      #endregion

      #region Birthday Class
      //Create the Object Person
      BirthdayDate per = new BirthdayDate();
      //Set the name
      per.SetName("Gabriel Ferreira");
      //Set the Birthday Year
      per.SetBirthdayYear(1998);
      //Set the Size
      per.SetSize(1.90);
      //Show the collected data above
      per.ShowData();
      /* Print ↑
        With Set Methods
        Name: Gabriel Ferreira
        Birthday:1998
        Age: 25
        Size:1,9m
       */

      //Showing Get Methods
      string PersonName = per.GetName();
      int PersonBirthdayYear = per.GetBirthdayYear();
      double PersonSize = per.GetSize();
      double PersonAge = per.GetAge();
      System.Console.WriteLine($"\nWith Get Methods\nName:{PersonName} Birthday:{PersonBirthdayYear} Age:{PersonAge} Size:{PersonSize}m\n");
      /* Print ↑
      With Get Methods
      Name:Gabriel Ferreira Birthday:1998 Age:25 Size:1,9m
      */
      #endregion
    }
  }
}