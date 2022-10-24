const arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, n = 1) {
  let newArr = [];
  if (n == 0) {
    return [];
  } else if (n>0) {
    newArr = arr.slice(0, n);
    console.log(newArr);
    return newArr;
  }
}

