function getFavoriteNumber(): number {
    return 26;
}

// Functions Which Return Promises
async function getFavoritePromiseNumber(): Promise<number> {
    return 26;
}


const names = ["Alice", "Bob", "Eve"];
 

// Anonymous Functions 

// For anaoymous function, TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
// process is called contextual typing


names.forEach((s) => {
    console.log(s.toUpperCase());
  });