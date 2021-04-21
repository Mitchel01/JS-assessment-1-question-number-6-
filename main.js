var numArray = [24,8,23,32,5,62];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);
document.getElementById("out").innerHTML = numArray;