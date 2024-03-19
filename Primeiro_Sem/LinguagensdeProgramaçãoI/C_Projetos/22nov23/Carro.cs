namespace nov_22_23
{
  class Carro : Veiculo
  {

    public Carro(double actualSpeed, double topSpeed, bool on)
    {
      this.topSpeed = topSpeed;
      this.actualSpeed = actualSpeed;
      this.on = on;
      System.Console.WriteLine($"Speed: {actualSpeed} Km/h;\nTop Speed: {topSpeed} Km/h;\nOn: {on};");
    }
    public override void Acelarar(double plusSpeed)
    {
      actualSpeed += plusSpeed;
      System.Console.WriteLine($"Accelerated: {actualSpeed} Km/h");
    }

  }


}

