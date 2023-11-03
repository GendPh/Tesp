using System;
namespace aula31123
{
	public class Exercicio2
	{
		private string? name;
        private int saldo;

		private int Deposito(int valor)
		{
			return valor + 500;
		}

		public void Mensagem()
		{
            Console.WriteLine("Qual é o seu nome: ");
            name = Convert.ToString(Console.ReadLine());

            Console.WriteLine("Inserir Saldo: ");
			saldo = Convert.ToInt32(Console.ReadLine());

			Console.WriteLine($"Olá {name} o seu novo saldo é de " +  Deposito(saldo));
		}

    }
}

