
//enums allow developers to define named constant values. This can improve code readability and maintainability.

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
let direction: Direction = Direction.Up;
console.log(direction)

enum SecondDirection {
    Up=1,
    Down,  
    Left,  
    Right  
}

enum ADirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    Inactive = 1
  }






export {}