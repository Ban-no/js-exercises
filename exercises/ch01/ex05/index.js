export function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}

export function sum(array) {
  let sum = 0;
  for (const x of array) {
    sum += x;
  }
  return sum;
}

export function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

/*function abs(x){
  if (x >= 0){
    return x;
  }
  else{
    return -x
  }
}

function sum(array){
  let sum = 0;
  for(let x of array) {
    sum += x;
  }
  return sum;
}

function factorial(n) {  //階乗を計算する関数
  let product = 1;
  while(n > 1) {
    product *= n;
    n--
  }
  return product
}*/
