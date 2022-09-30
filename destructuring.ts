// ******** Array destructuring

let array: Array<any> = ["aladin", "rust", 2022];

let [isName, langauge, year] = array;

let bigArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [first_number, ...numbers] = bigArray;

// ******** Object destructuring

let object = {
  name: "aladinn",
  preferredLanguages: ["python", "javascript", "rust"],
};

let o = {
  objectName: "foo",
  preferredLanguages: ["python", "javascript", "rust"],
};
let { objectName, preferredLanguages } = o;

// Property renaming

let { objectName: a, preferredLanguages: b } = o;
