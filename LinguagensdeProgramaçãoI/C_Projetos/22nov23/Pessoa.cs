namespace nov_22_23
{
  class Pessoa
  {
    protected string? name;
    protected int age;


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

