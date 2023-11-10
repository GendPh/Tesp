using System;
namespace aula31123
{
	public class exemploPratico1
	{
		//Atributos
		public string name;
		public int nota1;
        public int nota2;
        private int media;

		//Metodo 1
        public void inserirNotas()
		{
			Console.WriteLine("Inserir Primeira Nota: ");
			nota1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Inserir Segunda Nota: ");
            nota2 = Convert.ToInt32(Console.ReadLine());
        }
        //Metodo 2
        public void comunicacao(string name)
		{
			media = (nota1 + nota2) / 2;

			if (media > 9.5)
			{
				Console.WriteLine($"Olá {name} voce está: Aprovado");
			}
			else
			{
				Console.WriteLine($"Olá {name} voce está: Reprovado");
			}
		}
		
    }
}

