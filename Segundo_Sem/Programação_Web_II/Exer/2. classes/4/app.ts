class Stack {
  stackNumber: number[] = [];

  ShowStack(): void {
    console.log(this.stackNumber);
  }

  PushStack(value: number): void {
    this.stackNumber.push(value);
  }

  PopStack(): number {
    const value = this.stackNumber[this.stackNumber.length - 1];
    this.stackNumber.pop();
    return value;
  }

  TopStack(): any {
    const value = this.stackNumber[this.stackNumber.length - 1];
    return value;
  }

  LengthStack(): number {
    return this.stackNumber.length;
  }

  ResetStack(): void {
    console.log("Stack cleared.")
    this.stackNumber = [];
  }
}

const stack: Stack = new Stack();

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 91) + 10;
  stack.PushStack(randomNumber);
}

stack.ShowStack();

console.log(`You have removed ${stack.PopStack()} from stack.`);

stack.ShowStack();

console.log(`Last number of stack is ${stack.TopStack()}.`);

console.log(stack.toString());

console.log(`Size of stacked numbers is ${stack.LengthStack()}.`);

stack.ResetStack();

stack.ShowStack();