namespace nov_22_23
{

  class Gerente : Funcionário
  {
    double afterExtra;

    public Gerente(string name, double income)
    {
      this.name = name;
      this.income = income;
    }


    public override void Bonificação(double value)
    {
      afterExtra = income * value;
    }

    public void Resultado()
    {
      income += afterExtra;
      System.Console.WriteLine($"O Gerente {name} tem um income de {income} e com o extra de {afterExtra} fica com {income}");
    }


  }

}

