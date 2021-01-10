const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfString: Array<string> = ['123', '2346', '678']

function reverse<T> (array: T[]): T[] {
    return array.reverse()
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfString));
