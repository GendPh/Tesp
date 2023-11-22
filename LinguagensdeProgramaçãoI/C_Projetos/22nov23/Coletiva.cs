namespace nov_22_23
{
  class Coletiva : Padrao
  {
    public override void taxaAdmission(double taxa)
    {
      System.Console.WriteLine("Taxa:" + (taxa * 0.5));
    }
  }
}
