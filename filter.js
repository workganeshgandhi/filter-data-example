/*
You are given an array of objects, where each object represents a user
with a name and a score. Your task is to complete the
getUsersByScore function. This function should take two arguments:
    data: An array of user objects (see the example data array below).
    scoreAbove: A number representing the minimum score.

The function should return a new array containing only the user objects
whose score is strictly greater than scoreAbove.
*/

const data = [
{name:"John",score:82},
{name:"Doe",score:64},
{name:"Bob",score:94},
{name:"Will",score:77},
{name:"Smith",score:86},
{name:"Jen",score:54}
];

const result = [];
//Complete the below function

function getUsersByScore(data, scoreAbove) {
  //write your solution here
  // for (let i=0; i<data.length; i++)
  // {
    
  //   if( data[i].score > scoreAbove) {
  //     result.push(data[i]);
  //   }
   
  // }
  // return result;
  return data.filter(user => user.score > scoreAbove);
}

const results = getUsersByScore(data, 80); 
console.log(results); 

/* Expected Output:

[
  {name:"John",score:82},
  {name:"Bob",score:94},
  {name:"Smith",score:86}
]

*/
