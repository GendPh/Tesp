namespace nov24_23
{
  class Pessoa
  {
    private string? name;
    private int phone;

    public string? Name
    {
      get { return name; }
      set { name = value; }
    }
    public int Phone
    {
      get { return phone; }
      set { phone = value; }
    }

    public Pessoa(string name, int phone)
    {
      Name = name;
      Phone = phone;
    }

    public void hello()
    {
      System.Console.WriteLine($"{Name} {Phone}");
    }
  }
}

