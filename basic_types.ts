// let "name of variable" : type = value

// ********* numbers

let decimal: number = 6;
let double: number = 6.5;

// ********* strings

let my_name: string = "aladin";

// overwirte name

my_name = "khalil";

// ********* template string ``

let color: string = "red";

let opacity: number = 0.8;

let color_opacity: string = `color : ${color} \nopacity : ${opacity}`;

// ********* arrays

let listOfNumber: number[] = [1, 2, 3];

let listOfNumber2: Array<number> = [1, 2, 3];

// ********* Tuple

let tuple: [string, number] = ["aladin", 20];

// ********* enum

enum Color {
  red = "red",
  green = "green",
  black = "black",
}

let getColorFromEnum: Color = Color.red;

// ********* Any

let dontKnowTheType: any;

// ********* Void

let voidType: void = undefined;

// Boolean

let isActive: boolean = true;
let isMember: boolean = false;


