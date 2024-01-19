// type cannot be re-opened to add new properties but an interface which is always extendable.

interface TCar {
    brand: string;
    readonly model: string;
    year?: number;
  }
  
  let myCar: TCar = {
    brand: 'Toyota',
    model: 'Camry'
  };
  
//   myCar.model = "giec"

// You can extend or inherit from other interfaces:
interface Shape {
    color: string;
  }
  
  interface Square extends Shape {
    sideLength: number;
  }
  
  // Usage
  let square: Square = {
    color: 'red',
    sideLength: 10
  };
  
  
//   Function Types in inheritance

  interface RAMathOperation {
    (a: number, b: number): number;
  }
  
  // Usage
  let RAadd: RAMathOperation = (a, b) => a + b;
  let RAmultiply: RAMathOperation = (a, b) => a * b;
  