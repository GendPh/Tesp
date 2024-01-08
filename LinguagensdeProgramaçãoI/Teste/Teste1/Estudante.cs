namespace Teste
{
  public class Estudante
  {
    private string name { get; set; }
    private double nota1 { get; set; }
    private double nota2 { get; set; }

    //Constructor de Estudante
    public Estudante(string name, double nota1, double nota2)
    {
      this.name = name;
      this.nota1 = nota1;
      this.nota2 = nota2;
    }

    //Method para mostrar a a média das duas notas do estudante
    public void ClassFinal()
    {
      double media = (nota1 + nota2) / 2;

      System.Console.WriteLine($"A Média dos dois Teste é {media}.");
    }

  }
}
