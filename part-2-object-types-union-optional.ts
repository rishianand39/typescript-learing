// Object Types

let person: { name: string; age: number };
person = { name: "John", age: 30 };


// Optional properties
function printName(obj: { first: string; last?: string }) {

}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


//   Union Types
// A union type is a type formed from two or more other types

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: Array<string> | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
export { }