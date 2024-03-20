var Stack = /** @class */ (function () {
    function Stack() {
        this.stackNumber = [];
    }
    Stack.prototype.ShowStack = function () {
        console.log(this.stackNumber);
    };
    Stack.prototype.PushStack = function (value) {
        this.stackNumber.push(value);
    };
    Stack.prototype.PopStack = function () {
        var value = this.stackNumber[this.stackNumber.length - 1];
        this.stackNumber.pop();
        return value;
    };
    Stack.prototype.TopStack = function () {
        var value = this.stackNumber[this.stackNumber.length - 1];
        return value;
    };
    Stack.prototype.LengthStack = function () {
        return this.stackNumber.length;
    };
    Stack.prototype.ResetStack = function () {
        console.log("Stack cleared.");
        this.stackNumber = [];
    };
    return Stack;
}());
var stack = new Stack();
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 91) + 10;
    stack.PushStack(randomNumber);
}
stack.ShowStack();
console.log("You have removed ".concat(stack.PopStack(), " from stack."));
stack.ShowStack();
console.log("Last number of stack is ".concat(stack.TopStack(), "."));
console.log("Size of stacked numbers is ".concat(stack.LengthStack(), "."));
stack.ResetStack();
stack.ShowStack();
