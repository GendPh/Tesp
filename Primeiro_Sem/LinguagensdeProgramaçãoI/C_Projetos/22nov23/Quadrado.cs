namespace nov_22_23
{
  class Square : Forma
  {

    double size;

    //Constructor to define the size of the square
    public Square(double size)
    {
      this.size = size;
    }

    //Abstract Method to Define the Color of Square
    public override void SetColor()
    {
      System.Console.Write("Set Color: ");
      color = Console.ReadLine();
    }

    //Abstract Method to Define the Formula to the Area of Square
    public override void Area()
    {
      area = size * size;
      System.Console.WriteLine($"\nArea of Square with the color {color}, size of {size} it's {area}\n");
    }

    //Abstract Method to Define the Formula to the Perimeter of Square
    public override void Perimeter()
    {
      perimeter = size * 4;
      System.Console.WriteLine($"\nPerimeter of Square with the color {color}, size of {size} it's {perimeter}");
    }
  }

}

