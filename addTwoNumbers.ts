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

    // getCount() {
    //     let count = 1;
    //     let next = this.next;
    //     while (next) {
    //         count++;
    //         next = next?.next;
    //     }
    //     return count;
    // }
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
    const arr = Array.apply(null, Array(count)).map(()=>null);
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

function addTwoNumbers(l1: ListNode | null,
    l2: ListNode | null): ListNode | null
{
    console.log(getCount(l1));
    const reversed1 = reversedLLArray(l1);
    const reversed2 = reversedLLArray(l2);

    for (let index = 0; index < reversed1.length; index++) {
        
    }

    return null;
};

const list1 =
new ListNode(2,
    new ListNode(4,
        new ListNode(3)));

const list2 =
new ListNode(5,
    new ListNode(6,
        new ListNode(4)));

const ex1 = addTwoNumbers(list1, list2); // 342 + 465 = 807