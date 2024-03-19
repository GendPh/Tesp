using System;
using System.Runtime.Intrinsics.X86;

namespace imcCalculation
{
	public class PesoIMC
	{
		//Variaveis peso e altura
		public double imc;

		//Calcular IMC
		//4 - Criar um método que devolva uma string de acordo com o valor de IMC:
		//    - < 18.5 - Abaixo do peso
		//    - < 25 - Peso Normal
		//    - < 30 - Acima do Peso
		//    - < 35 - Obesidade do Tipo I
		//    - < 40 - Obesidade do Tipo II
		//    - >= 40 - Obesidade do Tipo III

		public void calculateIMC(double getPeso, double getAltura)
		{
			//Calculo do IMC e reduzir a duas casa decimais
			imc =Math.Round(getPeso / (getAltura * getAltura),2);

			//Em realação ao resultado do IMC detetar o Tipo
            switch (imc)
			{
				case < 18.5:
					Console.WriteLine($"IMC: {imc}. Abaixo de peso ");
					break;
                case < 25:
                    Console.WriteLine($"IMC: {imc}. Peso Normal ");
                    break;
                case < 30:
                    Console.WriteLine($"IMC: {imc}. Acima do Peso ");
                    break;
                case < 35:
                    Console.WriteLine($"IMC: {imc}. Obesidade do Tipo I");
                    break;
                case < 40:
                    Console.WriteLine($"IMC: {imc}. Obesidade do Tipo II");
                    break;
                case >=40:
                    Console.WriteLine($"IMC: {imc}. Obesidade do Tipo III");
                    break;
				default:
					Console.WriteLine("Erro ao calcular o IMC");
					break;
			}
		}
	}
}

