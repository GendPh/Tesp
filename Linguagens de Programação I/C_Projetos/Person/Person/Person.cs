using System;
namespace welcome
{
	internal class Person
	{
		public string name;
		public int age;

		public void Welcome(string nameInner, int ageInner)
		{
			Console.WriteLine($"Welcome {name} with {age} years old");
            Console.WriteLine($"Welcome {nameInner} with {ageInner} years old");

        }
    }
}

