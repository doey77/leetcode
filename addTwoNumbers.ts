class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null,
    l2: ListNode | null): ListNode | null
{
    

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