namespace nov_22_23
{
  class Aluno : Pessoa
  {
    string? school;

    //Construtor para defenir o nome idade e escola do aluno
    public Aluno(string name, int age, string school)
    {
      this.name = name;
      this.age = age;
      this.school = school;
    }


    //Metodo para informar que vai para escola
    public void GoingToSchool()
    {
      System.Console.WriteLine($"I'm going to {school} today.");
    }

  }

}

