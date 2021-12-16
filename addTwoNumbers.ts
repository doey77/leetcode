class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    console.log('hi')

    return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
class LinkedNode {

    /**
     * @param {number} val 
     * @param {LinkedNode} next 
     *
    constructor(val, next) {
        this.val = val===undefined ? 0 : val;
        this.next = next===undefined ? null : next;
    }

    getSize() {
        let count = 0;
        let node = this.next;
        while (node !== undefined) {
            count++;
            node = node?.next;
        }
        return count;
    }
}

/**
 * @param {LinkedNode} l1 
 * @param {LinkedNode} l2 
 *
const addTwoNumbers = function(l1, l2) {

};

const list1 =
new LinkedNode(2,
    new LinkedNode(4,
        new LinkedNode(3)));

const list2 =
new LinkedNode(5,
    new LinkedNode(6,
        new LinkedNode(4)));

const ex1 = addTwoNumbers(list1, list2); // 342 + 465 = 807 */