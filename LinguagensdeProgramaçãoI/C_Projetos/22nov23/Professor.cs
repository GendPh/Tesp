namespace nov_22_23
{
  class Professor : Pessoa
  {
    public Professor(string name, int age)
    {
      this.name = name;
      this.age = age;
    }

    public void ExplainMatter(string matter)
    {
      System.Console.WriteLine($"Today im going to talk about {matter}.\n");
    }

  }

}

