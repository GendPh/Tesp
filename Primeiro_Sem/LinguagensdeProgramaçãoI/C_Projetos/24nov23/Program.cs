using System;

namespace nov24_23
{

  class Program
  {
    static void Main(string[] args)
    {
      #region Exercise to create 3 Class with 1 Method and a Constructor
      //   Pessoa p = new("Gabriel", 912683066);
      //   p.hello();

      //   Amigo a = new("Dinis", 123213, "IPCA", 2023);
      //   a.Conhecimento(p.Name);

      //   Colega c = new("Dinis", 1323213, "IPCA", "WebDev");
      //   c.Conhecimento(p.Name);
      // }
      #endregion

      #region Testing Interface
      CNome n = new("Gabriel", "Ferreira");
      System.Console.WriteLine(n.FullName());
      #endregion
    }

  }
}