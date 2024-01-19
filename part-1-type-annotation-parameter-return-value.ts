// types in TS
// string, number, boolean, array, any, 

// number[], string[], Array<number>
// we can use either number[] or Array<number> syntax, both serves the same purpose

// any, use whenever you don't want a particular value to cause typechecking errors. By writing type any you are convincing TypeScript that a particular line of code is okay.


// Type Annotations on Variables
let myName: string = "Alice";

// In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code


// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// greet(42);


// Return Type Annotations
function getFavoriteNumber(): number {
    return 26;
}

// Functions Which Return Promises
async function getFavoritePromiseNumber(): Promise<number> {
    return 26;
}

// Anonymous Functions 
// For anaoymous function, TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
// process is called contextual typing
const names = ["Alice", "Bob", "Eve"];
 
names.forEach((s) => {
    console.log(s.toUpperCase());
  });

export {}