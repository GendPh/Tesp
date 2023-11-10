using System;

namespace Aula_10nov23
{
  class Program
  {
    static void Main(string[] args)
    {

      // #region Clock Object
      // //Manually set hour, minute and seconds. 
      // // int Hours = 10;
      // // int Minutes = 30;
      // // int Seconds = 15;
      // // string Period;
      // //Create the object watch and give the constructor the value of Hour, Minute and Seconds
      // //Clock watch = new(Hours, Minutes, Seconds);

      // //Set my Time
      // //watch.SetTime(23, 23, 59);

      // //Get the Hour
      // //int HourFromWatch = watch.GetHour();

      // //Get The Period
      // //Period = watch.GetPeriod();

      // //Print the Hour with Period
      // //System.Console.WriteLine($"Constructor Hour: {HourFromWatch}{Period}");

      // //Print the full Time H:M:S Period(AM || PM)
      // //watch.ShowTime();
      // #endregion

      BirthdayDate per = new BirthdayDate();
      per.SetName("Gabriel Ferreira");

    }
  }
}