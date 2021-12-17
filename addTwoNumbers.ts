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

    let strNum1 = "";
    let strNum2 = "";

    for (let index = 0; index < reversed1.length; index++) {
        strNum1 += reversed1[index].toString();
        strNum2 += reversed2[index].toString();
    }

    const sumStr = (parseInt(strNum1) + parseInt(strNum2)).toString();

    return strNumToLL(reverseString(sumStr));
};

const list1 =
new ListNode(2,
    new ListNode(4,
        new ListNode(3)));

const list2 =
new ListNode(5,
    new ListNode(6,
        new ListNode(4)));

const ex1 = addTwoNumbers(list1, list2); // 342 + 465 = 807; so LL will be 7 - 0 - 8

console.log('fin');