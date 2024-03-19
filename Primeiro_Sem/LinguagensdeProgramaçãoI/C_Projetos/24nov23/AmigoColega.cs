namespace nov24_23
{
  class Amigo : Pessoa
  {
    private string? local { get; set; }
    private int year { get; set; }



    //Constructor for Amigo that get from Pessoa throw base(name and phone)
    public Amigo(string name, int phone, string local, int year) : base(name, phone)
    {
      this.local = local;
      this.year = year;
    }


    //Method to call a text for this respective Class
    public void Conhecimento(string? person)
    {
      System.Console.WriteLine($"O {person} conheceu {this.Name} em {year}");
    }

  }
  class Colega : Pessoa
  {
    private string? local { get; set; }
    private string? job { get; set; }

    //Constructor for Colega that get from Pessoa throw base(name and phone)
    public Colega(string name, int phone, string local, string job) : base(name, phone)
    {
      this.local = local;
      this.job = job;
    }

    //Method to call a text for this respective Class
    public void Conhecimento(string? person)
    {
      System.Console.WriteLine($"O {person} conheceu {this.Name} em {local} que trabalha em {job}");
    }
  }

}