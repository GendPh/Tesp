namespace MainProgram
{
  public class Funcionario : Pessoa
  {
    private double income;
    private string? company;
    public Funcionario(double income, string company)
    {
      this.income = income;
      this.company = company;
    }

    public void MessageFuncionario()
    {
      System.Console.WriteLine($"\n|Funcionário:{name}| |Email:{email}| |Company:{company}| |Income:{income}|");
    }
  }

}

