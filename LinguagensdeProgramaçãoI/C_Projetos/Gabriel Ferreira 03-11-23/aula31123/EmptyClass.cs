using System;
namespace aula31123
{
	public class Pessoa
	{
		
		
			public void comunicar(){
				Console.WriteLine("Hello!");
			}
            public void comunicar(string name)
            {
                Console.WriteLine($"Hello {name}!");
            }
        
	}
}

