namespace nov_22_23
{
  abstract class Forma
  {
    protected string? color { get; set; }
    protected double area { get; set; }
    protected double perimeter { get; set; }
    
    public abstract void Area();
    public abstract void Perimeter();
    public abstract void SetColor();
  }
}
