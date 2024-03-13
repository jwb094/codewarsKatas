function makeParts(arr, chunkSize) {
const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize ) {
        const chunk = arr.slice(i, i + chunkSize);
        chunks.push(chunk)
    }
    return chunks;
  }


  console.log(makeParts([1,2,3,4,5], 2));
  console.log(makeParts([1,2,3], 1));
  console.log(makeParts([1,2,3,4,5], 10));