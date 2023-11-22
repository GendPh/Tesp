namespace nov_22_23
{
  class Professor : Pessoa
  {
    //Construtor para defenir nome e idade do professor
    public Professor(string name, int age)
    {
      this.name = name;
      this.age = age;
    }


    //Metodo para informar a matéria a explicar
    public void ExplainMatter(string matter)
    {
      System.Console.WriteLine($"Today im going to talk about {matter}.\n");
    }

  }

}

