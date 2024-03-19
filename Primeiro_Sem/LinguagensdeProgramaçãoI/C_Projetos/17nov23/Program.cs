using System;

namespace MainProgram
{
  class Program
  {
    static void Main(string[] args)
    {
      #region Exercicio criar Funcionario e Aluno
      //Criar Objeto para Funcionário
      Funcionario f = new(1500, "TESP");
      //Atribuir Nome e Email
      f.Name = "Gabriel";
      f.Email = "teste@email.com";
      f.MessageFuncionario();

      //Criar Objeto para Aluno
      Aluno a = new(20, "DMW");
      //Atribuir Nome e Email
      a.Name = "Gabriel";
      a.Email = "teste@email.com";
      //Atribuir Nome e Email
      a.MessageAluno();
      #endregion

      #region Exercicio 2 Criar o objeto estudante com Constructor e 2 metodos
      Estudante student = new("Gabriel", 25, "IPCA");
      student.Presentation();
      student.Education();
      #endregion
    }
  }
}