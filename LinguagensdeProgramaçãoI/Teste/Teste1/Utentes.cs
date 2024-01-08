namespace Teste
{

  // Criação da Interface Para Utentes
  interface IntUtentes
  {
    string Nome { get; set; }
    int CalcularIdade();

  }
  public class Utentes : IntUtentes
  {
    public string Nome { get; set; }
    private int anoNascimento { get; set; }

    //COnstrutor Utentes Nome e Ano de Nascimento
    public Utentes(string Nome, int anoNascimento)
    {
      this.Nome = Nome;
      this.anoNascimento = anoNascimento;
    }

    //Method para calcular a idade atual do Utente
    public int CalcularIdade()
    {
      //Ano Atual
      int anoAtual = DateTime.Now.Year;
      //Calculo para calcula a Idade 
      return anoAtual - anoNascimento;
    }

    // Method para mostrar a idade
    public void Inf()
    {
      int age = this.CalcularIdade();

      System.Console.WriteLine($"{Nome} que nasceu em {anoNascimento} tem hoje {age} anos.\n");
    }

  }

}

