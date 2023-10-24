using System;
namespace welcome
{
	internal class Person
	{
		public string name;
		public int age;

		public void Welcome()
		{
			Console.WriteLine($"Welcome {name} with {age} years old");
		}
	}
}

