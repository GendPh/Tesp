namespace MainProgram
{
  public class Pessoa
  {
    protected string? name;
    protected string? email;
    protected int age;

    //Criar Metodo Get e Set para Name
    public string? Name
    {
      get { return name; }
      set { name = value; }
    }

    //Criar Metodo Get e Set para Email
    public string? Email
    {
      get { return email; }
      set { email = value; }
    }

    //Criar Metodo Get e Set para Age
    public int Age
    {
      get { return age; }
      set { age = value; }
    }
  }
}
