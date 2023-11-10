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
            p1.Welcome();

            Person p2 = new Person
            {
                name = "Dinis",
                age = 19
            };
            p2.Welcome();
        }
    }
}