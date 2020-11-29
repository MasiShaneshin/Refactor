const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1 || typeof arr === 'undefined') {
    return [];
  } else {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};