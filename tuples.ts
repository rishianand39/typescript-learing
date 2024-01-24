
// Tuples in TypeScript are ordered arrays with a fixed number of elements of specified types.

let myTuple: [string, number, boolean];

myTuple = ['Hello', 123, true];



function getUser(): [string, number] {
    return ['John Doe', 30];
}
  
  const [userName, userAge] = getUser();
  console.log(userName);
  console.log(userAge);  



  
export {}