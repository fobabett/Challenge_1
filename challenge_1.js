exports.sumOfAMultiple = function(n){
  var sum = 0; //store the answer
  // do your work here
  //loop from 1 to 10
  for (var i =0; i<n; i++){
    //gets multiples of 3 and 5
    if(i%3==0 || i%5==0){
      sum+=i;
    }
    //get sum of multiples
  
  }
  
  return sum; 

};