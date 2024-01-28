
// type guard & Narrowing

// Within our if check, TypeScript sees typeof padding === "number" and understands that as a special form of code called a type guard. TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called type guards) and assignments, and the process of refining types to more specific types than declared is called narrowing.

function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
                          
    }
    return padding + input;
             
  }
