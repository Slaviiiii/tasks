function addAndRemoveEl(arr) {
  let counter = 0;
  let newArr = [];
  for (let element of arr) {
    if (element === 'add') {
      counter++;
      newArr.push(counter);
    } else {
      newArr.pop();
      counter++;
    }
  }
  if (newArr.length < 1) {
    console.log(`Empty`);
  } else {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === undefined || newArr[i] == '') {
      } else {
        console.log(newArr[i]);
      }
    }
  }
}
addAndRemoveEl(['add',
  'add',
  'remove',
  'add',
  'add'])