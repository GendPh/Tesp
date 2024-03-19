namespace nov_22_23
{
  //Classe que vai ser para erdar 
  class Pessoa
  {
    protected string? name;
    protected int age;

//Metodos para Cumprimentar e informar idade
    public void Hello()
    {
      System.Console.WriteLine($"Hello my name is {name}\n");
    }
    public void InformAge()
    {
      System.Console.WriteLine($"I have {age} years old\n");
    }

  }


}

