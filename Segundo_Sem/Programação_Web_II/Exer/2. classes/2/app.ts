class Person {
  private name: string;
  private bornDate: number;
  private gender: string;
  private nationality: string;
  private height: number;

  SetName(Name: string): void {
    this.name = Name;
  }
  SetBornDate(Date: number): void {
    this.bornDate = Date;
  }
  SetGender(Gender: string): void {
    this.gender = Gender;
  }
  SetNationality(Nationality: string): void {
    this.gender = Nationality;
  }
  SetHeight(Height: number): void {
    this.height = Height;
  }

  ShowPersonDetails(): void {
    const age: number = this.CalculateAge();
    console.log(`This is ${this.name}, born in ${this.bornDate}, with ${age} years old, gender is ${this.gender}, nationality is ${this.nationality} and as a height of ${this.height}m.`)
  }
  private CalculateAge(): number {
    const year: number = new Date().getFullYear() - 1;
    return year - this.bornDate;
  }
}



const person: Person = new Person();
person.SetName("Gabriel");
person.SetBornDate(1998);
person.SetGender("Male");
person.SetNationality("Portuguese");
person.SetHeight(1.90);

person.ShowPersonDetails();