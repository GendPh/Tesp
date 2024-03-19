namespace nov_22_23
{

  class Gerente : Funcionário
  {
    //Variavel que vai receber o valor extra para no futuro adicionar em salario
    double afterExtra;

    //Contrutor para defenir nome e salario
    public Gerente(string name, double income)
    {
      this.name = name;
      this.income = income;
    }

    //Metodo para calcular o bonus
    public override void Bonificação(double value)
    {
      afterExtra = income * value;
    }

    //Metodo para mostrar o resultado final do bonus e salario
    public void Resultado()
    {
      income += afterExtra;
      System.Console.WriteLine($"O Gerente {name} tem um income de {income} e com o extra de {afterExtra} fica com {income}");
    }


  }

}

