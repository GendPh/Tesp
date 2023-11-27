/* 

* *  Project Objectives * * * * * * * * * * * * 
*                                             *
* -- Interface Summary                        *
* ----Method to call the summary              *
*                                             *
* --Class Car that implements the ISummary    *
* ----Encapsulates Brand, Model               *
* ----Constructor                             *
* ----Advisors                                *
*                                             *
* --Class Person that implements the ISummary *
* ----Encapsulates Title, Last Name           *
* ----Constructor                             *
* ----Advisors                                *
*                                             *
* --Class Phone that implements the ISummary  *
* ----Encapsulates Brand, Number              *
* ----Constructor                             *
* ----Advisors                                *
*                                             *
* * * * * * * * * * * * * * * * * * * * * * * *

*/


namespace Project
{
  class Program
  {
    static void Main(string[] args)
    {

      //First Object Car
      Car carObject = new("Toyota", "Corolla");
      carObject.Summary();

      //Second Object Person
      Person personObject = new("Student", "Ferreira");
      personObject.Summary();

      //Third Object Phone
      Phone phoneObject = new("IPhone", 912345678);
      phoneObject.Summary();

      //Just a clear Line
      System.Console.WriteLine();
      Console.Beep();
      /* 
          * * Output  * * * * * * * * * * * *
          *                                 *
          * *** Car Brand: Toyota ***       *
          * *** Car Model: Corolla ***      *
          *                                 *
          * *** Person Title: Student ***   *
          * *** Person Model: Ferreira ***  *
          *                                 *
          * *** Phone Brand: IPhone ***     *
          * *** Phone Number: 912345678 *** *
          *                                 *
          * * * * * * * * * * * * * * * * * * 
      */

    }
  }
}