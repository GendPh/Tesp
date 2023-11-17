namespace MainProgram
{
  public class Aluno : Pessoa
  {
    private double nota;
    private string? curso;
    public Aluno(double nota, string curso)
    {
      this.nota = nota;
      this.curso = curso;
    }

    public void MessageAluno()
    {
      System.Console.WriteLine($"\n|Aluno:{name}| |Email:{email}| |Curso:{curso}| |Nota:{nota}|");
    }
  }

}

