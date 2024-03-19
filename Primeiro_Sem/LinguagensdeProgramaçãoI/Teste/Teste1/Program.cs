namespace Teste
{
  internal class Program
  {
    static void Main(string[] args)
    {
      Console.Clear();
      Pergunta2();
      Pergunta3();
      Pergunta4();
      Pergunta5();
    }

    // Tendo em conta o código abaixo:
    // - Crie uma exceção para a eventualidade de inserir uma letra e não um algarismo.
    // - Crie uma exceção para a eventualidade de dividir por zero
    static void Pergunta2()
    {
      decimal x, y, r;

      //Verifica se o resultado de X corresponde ao formato Decimal.
      try
      {
        Console.Write("x= ");
        x = Convert.ToDecimal(Console.ReadLine());
      }
      catch (FormatException)
      {
        Console.WriteLine("Input inválido para x.Só é permitido Numeros.");
        //Em Caso de Erro Termina a Função
        return;
      }

      //Verifica se o resultado de X corresponde ao formato Decimal.
      try
      {
        Console.Write("y= ");
        y = Convert.ToDecimal(Console.ReadLine());
      }
      catch (FormatException)
      {
        Console.WriteLine("Input inválido para y.Só é permitido Numeros.");
        //Em Caso de Erro Termina a Função
        return;
      }

      //Verifica se y não é 0.
      try
      {
        r = x / y;
        Console.WriteLine("Result: " + r);
      }
      catch (DivideByZeroException)
      {
        Console.WriteLine("Cannot divide by zero");
      }
    }

    // Defina a classe Estudante de informática com as variáveis de instante, Nome, Teste1 e Teste2.
    // A classe deverá conter:
    // - Um construtor que receba três parâmetros: o nome do aluno e as notas dos dois testes;
    // - O método ClassFinal, que calcula a média aritmética das notas dos dois testes.
    static void Pergunta3()
    {
      //Criação do Objeto Estudante
      Estudante est = new("Gabriel", 20, 19.9);
      //Method para mostrar a Media das Duas Notas do Estudante
      est.ClassFinal();
    }

    // Defina a classe Amigo e Colega que derivam de Pessoa:
    // A classe Pessoa encapsula:
    // • Duas variáveis de instante, Nome e Tel;
    // • Construtores;
    // • Acessores para ler os valores das variáveis de instante.
    // A subclasse Amigo encapsula:
    // • Duas variáveis de instante, Local e Ano de nascimento;
    // • Um construtor;
    // • Acessores para ler os valores das variáveis de instante.
    // A subclasse Colega encapsula:
    // • Duas variáveis de instante, Local de trabalho e Profissão;
    // • Um construtor;
    // • Acessores para ler os valores das variáveis de instante.
    // Elabore um programa de teste.
    static void Pergunta4()
    {
      //Criação do Objeto Pessoa
      Pessoa p1 = new("Gabriel", 123456789);
      //Method para mostrar as informações de Pessoa
      p1.Inf();

      //Criação do Objeto Amigo
      Amigo a1 = new("Gabriel2", 912345678, "V.N.Famalicão", 1998);
      //Method para mostrar as informações de Amigo
      a1.AmInf();

      //Criação do Objeto Colega
      Colega c1 = new("Gabriel3", 987654321, "Estudante", "IPCA");
      //Method para mostrar as informações de Colega
      c1.ColInf();
    }

    // Crie um interface que defina a assinatura de um acessor para ler o valor corrente da variável de instante Nome e de um método para calcular a idade, em anos, de uma pessoa. Defina, ainda, a classe Utente que, implemente o interface definido anteriormente e imprima o nome e idade dos seguintes utentes:

    //   Maria, Fernandes, 1972;
    //   Joaquim, Silva, 1950;
    //   Rui, Pereira, 1990;
    //   José, Martins, 1980
    static void Pergunta5()
    {
      //Criação do Primeiro Objeto do Utente
      Utentes u1 = new("Maria Fernandes", 1972);
      //Method para mostrar a Idade do Primeiro Utente
      u1.Inf();

      //Criação do Segundo Objeto do Utente
      Utentes u2 = new("Joaquim Silva", 1950);
      //Method para mostrar a Idade do Segundo Utente
      u2.Inf();

      //Criação do Terceiro Objeto do Utente
      Utentes u3 = new("Rui Pereira", 1990);
      //Method para mostrar a Idade do Terceiro Utente
      u3.Inf();

      //Criação do Quarto Objeto do Utente
      Utentes u4 = new("José Martins", 1980);
      //Method para mostrar a Idade do Quarto Utente
      u4.Inf();
    }
  }
}