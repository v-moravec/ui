export function removeDuplicates(arr: string[]) {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}
