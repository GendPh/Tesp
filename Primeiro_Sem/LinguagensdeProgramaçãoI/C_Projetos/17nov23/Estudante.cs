namespace MainProgram
{
  // Criação da Classe Estudante em relação a Classe Pessoa
  public class Estudante : Pessoa
  {
    private string? school;
    //Criar Construtor para Estudante que vai defenir o Nome Idade e Escola
    public Estudante(string? name, int age, string? school)
    {
      this.name = name;
      this.age = age;
      this.school = school;
    }

    //Criar Mensagem para Mostrar Nome e Idade
    public void Presentation()
    {
      System.Console.WriteLine($"Aluno {name}, Age: {age}.");
    }

    //Criar Mensagem para Mostrar a Escola do Estudante
    public void Education()
    {
      System.Console.WriteLine($"The student {name} studies at {school}.");
    }
  }

}

