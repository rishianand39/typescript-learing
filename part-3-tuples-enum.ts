
// Tuples in TypeScript are ordered arrays with a fixed number of elements of specified types.

let myTuple: [string, number, boolean];

myTuple = ['Hello', 123, true];



function getUser(): [string, number] {
    return ['John Doe', 30];
  }
  
  const [userName, userAge] = getUser();
  console.log(userName);
  console.log(userAge);  


//   Enums
// a way to define a set of named constant values. Enums make it easier to work with sets of related values and can improve code readability.

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
  }
  
  // Usage
  let userDirection: Direction = Direction.Up;
  console.log(userDirection); // Output: 0


  enum RADirection {
    Up = 1,
    Down,
    Left,
    Right,
  }
//   RADirection.Up has the value 1, Down has 2, Left has 3, and Right has 4.
  

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
    Inactive = 1
  }
  
  // Usage
  let selectedColor: Color = Color.Green;
  console.log(selectedColor); // Output: GREEN
  
export {}