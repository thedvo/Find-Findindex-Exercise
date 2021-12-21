/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username){
  return usersArray.find(function(obj){
      return obj.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIdx =  usersArray.findIndex(function(obj){
    return obj.username === username;
  })
    if (foundIdx === -1) return undefined;

    return usersArray.splice(foundIdx, 1)[0];
}
// we use .splice() to remove the selected user(obj) from the array. Reason we use (foundIdx, 1) is to isolate that user into their own new array. Then we use [0] to access the value.