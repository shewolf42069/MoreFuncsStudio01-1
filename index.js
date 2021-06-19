//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function findMinimumValue(numArray){
let smallestNumber = numArray[0];

  for (i = 0; i < numArray.length; i++){
    if (numArray[i] < smallestNumber) {
    smallestNumber = numArray[i];
    }
  }
return smallestNumber;
}

function sortAscending(numArray) {
let newArray = []; 


  for (i=0; i = numArray.length; i++){
    if (numArray[i] !=0) {
      console.log(numArray[i] +  " is starting num");
      let smallestNumber = findMinimumValue(numArray);
      newArray.push(smallestNumber);
      console.log(newArray + " status of new array")
      let arrayIndex = numArray.indexOf(smallestNumber);
      console.log(arrayIndex + " array index");
      numArray.splice(arrayIndex,1); 
      console.log(numArray);
      } else if (numArray[i] = 0) {
        newArray.push(smallestNumber);
        console.log(newArray + " status of new array else")
        let arrayIndex = numArray.indexOf(smallestNumber);
        console.log(arrayIndex + " array index else");
        numArray.splice(arrayIndex,1); 
        console.log(numArray);
        sortAscending(numArray);
      }
    }
  console.log(newArray + "should be done");
  return newArray;
};

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(sortAscending(nums3));