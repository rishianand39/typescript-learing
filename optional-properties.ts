// Optional properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printName(obj: { first: string; last?: string }) {

}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


function RprintName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    // console.log(obj.last.toUpperCase());
    
//   'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
  }