namespace nov24_23
{
  class CNome : INome
  {
    string? firstName { get; set; }
    string? lastName { get; set; }


    //Constructor for CNome
    public CNome(string fName, string lName)
    {
      firstName = fName;
      lastName = lName;
    }


    // Interface from INome
    public string FullName()
    {
      return $"Exm {firstName} {lastName}";
    }
  }
}