/**
 * Given the head of a singly linked list and two integers 
 * left and right where left <= right, reverse the nodes of the list 
 * from position left to position right, and return the reversed list.
 * 
 * Example
 * - Input: head = [1,2,3,4,5], left = 2, right = 4
 * - Output: [1,4,3,2,5]
 * 
 * https://leetcode.com/problems/reverse-linked-list-ii/
 */

// Understand the question, write key points
// get: head, left & right
// left & right = position of the list
// output: reversed list between left and right

// STEP 1: Verify the constraints 
// Q: Do the positions start at 0 or 1? 
// A: 1

// Q: Would we ever have to reverse the entire list? 
// A: Yes

// STEP 2: Test cases. Write out some test cases
// Best case
// - Input: head = [1,2,3,4,5], left = 2, right = 4
// - Output: [1,4,3,2,5]

// Null and single case
// - Input: h = [] left = 1, right = 2
// - Output: []

// - Input: h = [1] left = 1, right = 1
// - Output: [1]

// Low hanging
// - Input: h = [1,2,3], left = 1, 3
// - Output: [3,2,1]

// STEP 3: Brute Force. 
// have to update the pointers of values BEFORE and after left and right
// 1. need nodes: 
// - before = left - 1, after = right + 1
// need:
// - position counter, currentNode, tail
// loop while < left to get node before
    // before = currentNode
    // currentNode = currentNode.next
    // currentPos++
// tail = currentNode
// loop while currentPos >= left && currentPos <= right
    // reverse list 
    // 1. get current node
    // 2. store next value 
    // 3. update next value to list so far
    // 4. store current node as list so far
    // 5. update current node to be next value of 2.
// set before.next = list so far, tail.next = currentNode (right + 1)
// return head, reversedList if left === 1

// steps to reverse:
// STEP 4: Code the brute force
/**
 * 
 * @param {ListNode} head 
 * @param {Number} left 
 * @param {Number} right 
 */
 let reverseBetween = function(head, left, right) {
    if (!head || !head.next) {
        return head;
    }                             
    let currentNode = head, currentPosition = 1;
    let before = head;
    // get the node before, and currentNode to set new tail;
    while (currentPosition < left) {
        before = currentNode;
        currentNode = currentNode.next; 
        currentPosition++;
    }
    
    let reversedList = null, tail = currentNode;
    while (currentPosition >= left && currentPosition <= right) {
        const next = currentNode.next;
        currentNode.next = reversedList; 
        reversedList = currentNode;
        currentNode = next; 
        currentPosition++;
    } 
    
    before.next = reversedList;
    tail.next = currentNode; 
    
    if (left > 1) {
        return head;
    } else { // reversed the whole list
        return reversedList;
    }
}

// STEP 5: Errors, check code for errors 

// STEP 6: Test against cases. 

// STEP 7: Time and Space. Analyze time and space complexities
// O(N) time, O(1) space

// STEP 8: Optimize: can we optimize our solution? 

// STEP 9: Code the optimal solution

// STEP 10: Test, time & space. 

// STEP 11: Ask your interviewer if this is sufficient 