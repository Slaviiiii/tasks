function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  })
  let sortedL = sorted.length;
  if (sortedL % 2 !== 0) {
    let halfNum = Math.floor(sortedL / 2);
    let biggerHalf = sorted.slice(halfNum, sortedL);
    return biggerHalf;
  } else {
    let biggerHalf = sorted.slice(sortedL / 2);
    return biggerHalf;
  }
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]) 