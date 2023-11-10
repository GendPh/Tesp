using System;
using static System.Net.Mime.MediaTypeNames;
using System.Runtime.Intrinsics.X86;
using imcCalculation;

class Program
{
    static void Main(string[] args)
    {
        #region If statments learning
        //int value;
        //Console.Write("Please enter an integer: ");
        //value = Convert.ToInt32(Console.ReadLine());

        //if (value >= 20)
        //{
        //    Console.WriteLine("Number Bigger or Equal then 20");
        //}
        //else if (value >= 15 && value < 20)
        //{
        //    Console.WriteLine("Number Lower then 20 and Bigger or Equal 15");
        //}
        //else
        //{
        //    Console.WriteLine("Number Lower then 15");
        //}
        #endregion

        #region Desafio 1: verifique se dois números introduzidos pelo utilizador são iguais
        //int number1, number2;
        //Console.WriteLine("Insert Number 1:");
        //number1 = Convert.ToInt32(Console.ReadLine());
        //Console.WriteLine("Insert Number 2:");
        //number2 = Convert.ToInt32(Console.ReadLine());
        //if (number1 == number2)
        //{
        //    Console.WriteLine($"Number 1: {number1} is equal to Number 2: {number2}");
        //}
        //else
        //{
        //    Console.WriteLine($"Number 1: {number1} isn't equal to Number 2: {number2}");

        //}
        #endregion

        #region Desafio 2 e 3: Escreva um programa que determine se um estudante foi aprovado a uma disciplina, com base na nota do teste, ou seja, terá de obter uma nota superior ou igual a 9,5 valores

        //double nota;
        //Console.WriteLine("Student grade:");
        //nota = Convert.ToDouble(Console.ReadLine());
        //if (nota >= 9.5)
        //{
        //    Console.WriteLine("Student Pass!");
        //}
        //else
        //{
        //    Console.WriteLine("Student Reproved");
        //}

        #endregion

        #region Desafio 4: Inserir doins inputs e ver qual maior

        //int value1, value2, bigger;
        //Console.WriteLine("Insert Number 1:");
        //value1 = Convert.ToInt32(Console.ReadLine());
        //Console.WriteLine("Insert Number 2:");
        //value2 = Convert.ToInt32(Console.ReadLine());

        //if(value1> value2)
        //{
        //    bigger = value1;
        //}
        //else
        //{
        //    bigger = value2;
        //}
        //Console.WriteLine($"The biggest number is {bigger}");

        #endregion

        #region Desafio 5: par ou ímpar 
        //int input =-100;
        //Console.WriteLine("Insert a number to check if its pair:");
        //input = Convert.ToInt32(Console.ReadLine());
        //if ((input % 2) == 0)
        //{
        //    Console.WriteLine("Numero Par");
        //}
        //else
        //{
        //    Console.WriteLine("Number not Par");
        //}
        //for (int i = 0; i < 20; i++)
        //{
        //    if ((i%2)!=0)
        //    {
        //        Console.WriteLine($"{i} é impar");
        //    }
        //}
        //int input = -1;

        //while (input<20)
        //{
        //    if ((input % 2) != 0)
        //    {
        //        Console.WriteLine($"{input} é impar");
        //    }
        //    input++;
        //}
        #endregion

        #region Desafio 6: Verificar as idades de 10 pessoas

        //int qty = 0;
        //int idade = 0;

        //for (int i = 0; i < 10; i++)
        //{
        //    Console.WriteLine("Insert age:");
        //    idade = Convert.ToInt32(Console.ReadLine());
        //    if (idade >= 18)
        //    {
        //        qty ++;
        //    }
        //}
        //Console.WriteLine($"Betwen 10 people there are {qty} with 18 plus years old");

        #endregion

        #region Desafio 7: calcule e mostre o salário reajustado de dez funcionários de acordo 11 com a seguinte regra: Salário até 300, reajuste de 50 %; Salários maiores que 300, reajuste de 30 % .

        //double income = 0;
        //double newIncome = 0;

        //for (int i = 0; i < 2; i++)
        //{
        //    Console.WriteLine("Income: ");
        //    income = Convert.ToDouble(Console.ReadLine());
        //    if (income<=300)
        //    {
        //        newIncome = (income * 50)/100;
        //        income = newIncome + income;
        //        Console.WriteLine($"New income is: {income}");
        //    }
        //    else
        //    {
        //        newIncome = (income * 30) / 100;
        //        income = newIncome + income;
        //        Console.WriteLine($"New income is: {income}");
        //    }
        //}


        #endregion

        #region Desafio 8: implemente uma máquina de calcular. A máquina de calcular deverá ler do utilizador os dois números e a operação(+, -, *, /) a realizar.

        //double number1, number2, result;
        //char operation;

        //Console.WriteLine("Insert First Number");
        //number1 = Convert.ToDouble(Console.ReadLine());
        //Console.WriteLine("Insert Second Number");
        //number2 = Convert.ToDouble(Console.ReadLine());
        //Console.WriteLine("Insert Operation => + - * / :");
        //operation= Convert.ToChar(Console.ReadLine());

        //switch (operation)
        //{
        //    case '+':
        //        result = number1 + number2;
        //        Console.WriteLine($"{number1} + {number2} = {result}");
        //        break;

        //    case '-':
        //        result = number1 - number2;
        //        Console.WriteLine($"{number1} - {number2} = {result}");
        //        break;

        //    case '*':
        //        result = number1 * number2;
        //        Console.WriteLine($"{number1} * {number2} = {result}");
        //        break;

        //    case '/':
        //        result = number1 / number2;
        //        Console.WriteLine($"{number1} / {number2} = {result}");
        //        break;

        //    default:
        //        if(operation != '+' || operation != '-' || operation != '*' || operation != '/')
        //        {
        //            Console.WriteLine("Wrong Input");
        //        }
        //        break;
        //}

        #endregion


        #region Desafio Dado pela Aula / Desafio 9: Escreva um programa que leia a altura e o peso de um indivíduo e indique o escalão em que se encontra.;

        /*
            1- Projeto chamda IMC
            2- Criar um classe Pessoa e adicionar os atributos: peso e altura
            3- Criar um metodo que devolva o IMC(do tipo double cujo calulo 'e : peso/(altura*altura);
            4- Criar um método que devolva uma string de acordo com o valor de IMC:
                - <18.5 - Abaixo do peso
                - <25 - Peso Normal
                - <30 - Acima do Peso
                - <35 - Obesidade do Tipo I
                - <40 - Obesidade do Tipo II
                - >= 40 - Obesidade do Tipo III
         */

        //Criar objeto Person
        PesoIMC person = new();
        
        double peso, altura;

        //Inserir Peso na Consola
        Console.WriteLine("Inserir Peso em Kg:");
        peso = Convert.ToDouble(Console.ReadLine());

        //Inserir Altura na Consola
        Console.WriteLine("Inserir Altura em metros (1.50m):");
        altura = Convert.ToDouble(Console.ReadLine());

        //Calcular o IMC em relação do Peso e Altura
        person.calculateIMC(peso, altura);
        #endregion
    }
}
