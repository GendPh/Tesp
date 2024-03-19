namespace Teste
{
  public class Pessoa
  {
    protected string name { get; set; }
    protected int telefone { get; set; }

    //Constructor para a Pessoa que obtem Nome e Telefone
    public Pessoa(string name, int telefone)
    {
      this.name = name;
      this.telefone = telefone;
    }

    //Method para mostrar o Nome e Telefone
    public void Inf()
    {
      System.Console.WriteLine($"Pessoa Nome: {name};\nPessoa Telefone: {telefone}.\n");
    }
  }

  //Classe Amigo que herda a Pessoa
  public class Amigo : Pessoa
  {
    private string local { get; set; }
    private int anoNascimento { get; set; }

    //Constructor do Amigo que tem nome, telefone, local e anoNascimento. Da pessoa tem como base nome e telefone 
    public Amigo(string name, int telefone, string local, int anoNascimento) : base(name, telefone)
    {
      this.local = local;
      this.anoNascimento = anoNascimento;
    }

    public void AmInf()
    {
      System.Console.WriteLine($"Amigo Nome: {name};\nAmigo Telefone: {telefone};\nAmigo Local: {local};\nAmigo Ano Nascimento: {anoNascimento}\n");
    }
  }

  //Class Colega que herda Pessoa
  public class Colega : Pessoa
  {
    private string profissao { get; set; }
    private string localTrabalho { get; set; }

    //Constructor do Colega que tem nome, telefone, profissao e local trabalho. Da pessoa tem como base nome e telefone
    public Colega(string name, int telefone, string profissao, string localTrabalho) : base(name, telefone)
    {
      this.profissao = profissao;
      this.localTrabalho = localTrabalho;
    }
    //Method para mostrar a informação do Colega
    public void ColInf()
    {
      System.Console.WriteLine($"Colega Nome: {name};\nColega Telefone: {telefone};\nColega Posição: {profissao};\nColega Local Trabalho: {localTrabalho}\n");

    }
  }
}
