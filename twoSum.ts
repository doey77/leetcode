/**
 * This is O(n^2) :/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumNaive = (nums, target) => {
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        for (let index2 = 0; index2 < nums.length; index2++) {
            if (index !== index2) {
                const num2 = nums[index2];
                if (num+num2 === target) {
                    return [index, index2];
                }
            }
        }
    }
}

const twoSum = twoSumNaive;

// note that order of indices is irrelevant

const ex1 = twoSum([2,7,11,15],9); // [0,1]
const ex2 = twoSum([3,2,4],6) // [1,2]
const ex3 = twoSum([3,3],6) // [0,1]

console.log(ex1);
console.log(ex2);
console.log(ex3);