// void function

function func1(): void {
  console.log("func1");
}

// return function

function func2(c: number): number {
  return c;
}

// arrow function

const func3 = (x: number, y: number) => {
  return x + y;
};

let myAdd: (baseValue: number, increment: number) => number = (x, y) => {
  return x + y;
};

// virtual params

function virtualPararm(number: number, text?: string): number {
  return number;
}
