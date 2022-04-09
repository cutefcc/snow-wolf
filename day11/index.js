/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // 获取链表长度
    const getLen = (root: ListNode): number => {
        let len = 0;
        if (!root) return 0;
        if (!root.next) return 1;
        root = root.next;
        len = 2;
        while(root.next) {
            len++;
            root = root.next;
        }
        return len;
    }
    // 找到最后 两个个节点
    const findLastTwoNode = (root: ListNode): (ListNode | null)[] => {
        let head = root;
        if (!head) return [null, null]
        if (!head.next) return [head, null];
        if (!head.next.next) return [head, head.next];
        while(head.next.next.next){
            head = head.next;
        }
        return [head.next, head.next.next];
    }
    let root = head;
    let len = getLen(head);
    if (k === 0) return head;
    if (len === 0) return null;
    if (len === 1) return head;

    for (let i = 0; i< k % len; i++) {
       const [a, b] = findLastTwoNode(root);
       a.next = null;
       b.next = root;
       root = b;
    }
    return root;
};