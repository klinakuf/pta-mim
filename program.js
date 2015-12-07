function addition(a, b) {
  return a + b;
}

function isBiggerThanTen(n) {
  if (n > 10) {
    return true;
  }
  else {
    if (n % 10 == 0) {
      return true;
    }
  }
}

function isLessThanTen(n) {

}

function returnString(s){
  return s;
}

function simple(a) {
  return a;
}
function multiply(a,b,c,d) {
  return a * b * c * d;
}
var garr = [];
function pushToArray(obj){
  return garr.push(obj);
}

function fibonacci(n){
  if(n <= 2){
    return 1;
  }else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

var test = 3;


simple(1);
simple(1);
simple(4);
simple(5);
simple(5);

multiply(2,3,3,1);
multiply(2,3,3,2);
multiply(2,3,3,4);
multiply(2,3,3,1);

returnString("foo");
returnString("somw");
returnString("foo");
returnString("somw");

addition(3, 2);
addition(3, 1);
addition(3, 1);

//pushToArray(2);
//pushToArray(22);
//pushToArray(222);
//pushToArray(22);

// console.log(fibonacci(6));
// addition(3, 2);
// addition(13, 4);
// addition(13, 4);
// addition(13, 4);
// addition(12, 4);

// isBiggerThanTen(9);
// isBiggerThanTen(20);
// console.log("done");