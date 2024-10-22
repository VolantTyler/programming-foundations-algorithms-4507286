const items = [6, 20, 8, 19, 56, 23, 87, 41, 49];

function mergesort(dataset) {
  if (dataset.length > 1) {
    const mid = Math.floor(dataset.length / 2)
    const leftarr = dataset.slice(0, mid);
    const rightarr = dataset.slice(mid, dataset.length);

    mergesort(leftarr)
    mergesort(rightarr)

    let i=0
    let j=0
    let k=0

    while (i < leftarr.length && j < rightarr.length) {
      if (leftarr[i] < rightarr[j]) {
        dataset[k] = leftarr[i]
        i++
      } else {
        dataset[k] = rightarr[j]
        j++
      }
      k++
    }

    while (i < leftarr.length) {
      dataset[k] = leftarr[i]
      i++
      k++
    }
    while (j < rightarr.length) {
      dataset[k] = rightarr[j];
      j++;
      k++;
    }
  }

}

console.log(items);
mergesort(items);
console.log(items);