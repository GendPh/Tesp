namespace Project
{
  class Car : ISummary
  {

    //Define Attributes
    private string? brand;
    private string? model;

    //Define Advisers
    public string? Brand
    {
      get { return brand; }
      set { brand = value; }
    }
    public string? Model
    {
      get { return model; }
      set { model = value; }
    }


    //Constructor with the parameters "b" -> Brand and "m" -> Model
    public Car(string b, string m)
    {
      Brand = b;
      Model = m;
    }

    //ISummary Interface Method Summary()
    public void Summary()
    {
      System.Console.WriteLine($"\n*** Car Brand: {Brand} ***\n*** Car Model: {Model} ***");
    }
  }
  class Person : ISummary
  {

    //Define Attributes
    private string? title;
    private string? lName;

    //Define Advisers
    public string? Title
    {
      get { return title; }
      set { title = value; }
    }
    public string? LName
    {
      get { return lName; }
      set { lName = value; }
    }


    //Constructor with the parameters "t" -> Title and "ln" -> Last Name
    public Person(string t, string ln)
    {
      Title = t;
      LName = ln;
    }

    //ISummary Interface Method Summary()
    public void Summary()
    {
      System.Console.WriteLine($"\n*** Person Title: {Title} ***\n*** Person Model: {LName} ***");
    }
  }
  class Phone : ISummary
  {

    //Define Attributes
    private string? brand;
    private int number;

    //Define Advisers
    public string? Brand
    {
      get { return brand; }
      set { brand = value; }
    }
    public int Number
    {
      get { return number; }
      set { number = value; }
    }


    //Constructor with the parameters "b" -> Brand and "n" -> Number
    public Phone(string b, int n)
    {
      Brand = b;
      Number = n;
    }

    //ISummary Interface Method Summary()
    public void Summary()
    {
      System.Console.WriteLine($"\n*** Phone Brand: {Brand} ***\n*** Phone Number: {Number} ***");
    }
  }

}

