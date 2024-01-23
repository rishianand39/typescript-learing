// Type Aliases
// We’ve been using object types and union types by writing them directly in type annotations.
// They provide a way to create reusable types in your TypeScript code.
//  This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

type Point = {
    x: number;
    y: number;
  };
  
let coordinates: Point = { x: 10, y: 20 };
  
// Union Type Aliases

type Result = string | number;

let outcome: Result = 'Success';
outcome = 42;

// Function Type Aliases
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let multiply: MathOperation = (a, b) => a * b;


// Generics with Type Alias:
type Pair<T> = {
  first: T;
  second: T;
};

// Usage
let numberPair: Pair<number> = { first: 1, second: 2 };
let stringPair: Pair<string> = { first: 'a', second: 'b' };


// Intersection Type Alias:
type Car = {
    brand: string;
    model: string;
  };
  
  type ElectricCar = Car & {
    batteryCapacity: number;
  };
  
  let tesla: ElectricCar = {
    brand: 'Tesla',
    model: 'Model S',
    batteryCapacity: 100
  };
  
//   Mapped Type Aliases
  type OptionalProps<T> = {
    [P in keyof T]?: T[P];
  };
  
  // Usage
  type User = {
    name: string;
    age: number;
  };
  
  type OptionalUser = OptionalProps<User>;
  // OptionalUser is { name?: string; age?: number; }
  
  