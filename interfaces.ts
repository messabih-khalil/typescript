interface Object {
  // read only id
  readonly id: number;
  fullName: string;
  // salary is optional
  salary?: number;
}

let User: Object = {
  id: 15,
  fullName: "andrew tate -_-",
  salary: 5555555,
};

// interface with methods

interface Pet {
  name: string;

  // is happy

  isHappy(name: string): string;

  // is walking
  isWalking(name: string): string;
}

let cat: Pet = {
  name: "migo",

  isHappy(name) {
    return `${name} is happy`;
  },
  isWalking(name) {
    return `${name} is walking`;
  },
};
