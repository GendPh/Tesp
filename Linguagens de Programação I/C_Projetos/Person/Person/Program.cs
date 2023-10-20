using System;
using welcome;

namespace Program
{
    internal class Pessoa
    {
        static void Main(string[] args)
        {
            Person p1 = new Person();
            p1.name = "Gabriel";
            p1.age = 25;
            p1.Welcome("Gabriel Ferreira", 25);

            Person p2 = new Person();
            p2.name = "Dinis";
            p2.age = 19;
            p2.Welcome("Dinis Teixeira", 19);
        }
    }
}