var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.SetName = function (Name) {
        this.name = Name;
    };
    Person.prototype.SetBornDate = function (Date) {
        this.bornDate = Date;
    };
    Person.prototype.SetGender = function (Gender) {
        this.gender = Gender;
    };
    Person.prototype.SetNationality = function (Nationality) {
        this.gender = Nationality;
    };
    Person.prototype.SetHeight = function (Height) {
        this.height = Height;
    };
    Person.prototype.ShowPersonDetails = function () {
        var age = this.CalculateAge();
        console.log("This is ".concat(this.name, ", born in ").concat(this.bornDate, ", with ").concat(age, " years old, gender is ").concat(this.gender, ", nationality is ").concat(this.nationality, " and as a height of ").concat(this.height, "m."));
    };
    Person.prototype.CalculateAge = function () {
        var year = new Date().getFullYear() - 1;
        return year - this.bornDate;
    };
    return Person;
}());
var person = new Person();
person.SetName("Gabriel");
person.SetBornDate(1998);
person.SetGender("Male");
person.SetNationality("Portuguese");
person.SetHeight(1.90);
person.ShowPersonDetails();
