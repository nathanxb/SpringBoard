//Q1
//new Set([1, 1, 2, 2, 3, 4])

//returns Set(4) {1, 2, 3, 4}

//Q2
[...new Set("referee")].join("")

//returns 'ref'

//Q3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);


//Map m:  0: {Array(3) => true}
//        1: {Array(3) => false}


//hasDuplicate
//accepts array, returns true or false if array has duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length


//vowelCount
//accepts string, returns map
//keys are vowels, and values are the count of vowels in the string

const isVowel = char => "aeiou".includes(char);

const vowelCount = (str) => {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            vowelMap.has(lowerCaseChar) ?
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1) :
                vowelMap.set(lowerCaseChar, 1);
        }
    }
    return vowelMap;
}