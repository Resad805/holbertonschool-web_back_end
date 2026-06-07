export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const idx = array.indexOf(item);
    array[idx] = appendString + item;
  }

  return array;
}
