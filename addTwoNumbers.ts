/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * You are given two non-empty linked lists representing 
 * two non-negative integers. The digits are stored in 
 * reverse order, and each of their nodes contains a 
 * single digit. Add the two numbers and return the
 * sum as a linked list.
 * 
 * You may assume the two numbers do not contain 
 * any leading zero, except the number 0 itself.
 */

class ListNode {

    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const getCount = (node: ListNode) => {
    let count = 1;
    let next = node.next;
    while (next) {
        count++;
        next = next?.next;
    }
    return count
}

const numArrToString = (nums: number[]): string => {
    let str = '';
    nums.forEach(num => str+=num.toString())
    return str;
}

/**
 * @param node Must be first node
 */
const reversedLLArray = (node:ListNode) => {
    const count = getCount(node);
    const arr: number[] = [];
    let i = count-1;
    arr[i] = node.val;
    i--;
    let next = node.next;
    while (next) {
        arr[i] = next.val;
        next = next?.next;
        i--;
    }
    return arr;
}

const strNumToLL = (strNum:string): ListNode => {
    const firstNode = new ListNode(parseInt(strNum[0]));
    let currentNode = firstNode;

    for (let i = 1; i < strNum.length; i++) {
        const num = parseInt(strNum[i]);
        const newNode = new ListNode(num);
        currentNode.next = newNode;
        currentNode = newNode;
    }

    return firstNode;
}

const reverseString = (str:string) => {
    return str.split('').reverse().join('');
}

const addTwoNumbers = (l1: ListNode | null,
    l2: ListNode | null): ListNode | null =>
{
    const reversed1 = reversedLLArray(l1);
    const reversed2 = reversedLLArray(l2);

    let strNum1 = numArrToString(reversed1);
    let strNum2 = numArrToString(reversed2);

    const sum = parseInt(strNum1) + parseInt(strNum2)
    const sumStr = sum.toFixed(20);

    return strNumToLL(reverseString(sumStr));
};

// Test cases

/**
 * Create Linked Lists from an array
 */
const llFromArr = (nums: number[]): ListNode => {
    const firstNode = new ListNode(nums[0]);
    let currentNode = firstNode;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const newNode = new ListNode(num);
        currentNode.next = newNode;
        currentNode = newNode;
    }
    return firstNode;
}

// Case 1
// const list1 = llFromArr([2,4,3]);
// const list2 = llFromArr([5,6,4]);

const list1 = llFromArr([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const list2 = llFromArr([5,6,4]);

const example = addTwoNumbers(list1, list2); // 342 + 465 = 807; so LL will be 7 - 0 - 8

console.log('fin');