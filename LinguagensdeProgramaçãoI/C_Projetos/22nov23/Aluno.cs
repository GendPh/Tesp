namespace nov_22_23
{
  class Aluno : Pessoa
  {
    string? school;
    public Aluno(string name, int age, string school)
    {
      this.name = name;
      this.age = age;
      this.school = school;
    }

    public void GoingToSchool()
    {
      System.Console.WriteLine($"I'm going to {school} today.");
    }

  }

}

