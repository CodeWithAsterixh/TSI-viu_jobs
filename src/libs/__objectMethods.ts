// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function areValuesEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true // true for same reference

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null)
    return false // different types or its null

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  const len1 = keys1.length
  const len2 = keys2.length
  if (len1 !== len2) return false // different lengths

  if (keys1.length !== keys2.length) return false

  const equalLen = keys1
    .map((k1) => keys2.map((k2) => JSON.stringify(obj1[k1]) === JSON.stringify(obj2[k2]))) //map through the arrays and get the a boolean whether the content are equal or not
    .flat() // flatten the array to be a single array without nested arrays and stuff
    .filter((i) => i).length // filter for only the boolean value of true // return the length of the array

  /**
   * return the boolean of whether the amount of equal items is equal to the original object length
   */
  return equalLen === len1
}
