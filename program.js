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

function simple(a) {
  return a;
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

// console.log(fibonacci(6));
// addition(3, 2);
// addition(13, 4);
// addition(13, 4);
// addition(13, 4);
// addition(12, 4);

// isBiggerThanTen(9);
// isBiggerThanTen(20);
// console.log("done");