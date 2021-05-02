/**
 * Given two strings S and T, return if they equal
 * when both are typed out. Any '#' that appears 
 * in the string counts as a backspace.
 * 
 * Example:
 * S: 'ab#c', T: 'ad#c'
 * Output: true
 * Explanation: Both S and T become 'ac'
 * 
 * https://leetcode.com/problems/backspace-string-compare/
 */

/**
 * Approach
 * Before you start: understand the question, write key points
*/
// # = backspace

/**
 * STEP 1: Verify the constraints 
 * Ask your interviewer questions to understand what are
 * the edge cases, inputs, variables, etc.
 */
// Q: Should the ouput be case sensitive?
// A: Yes it should. "A" is not equal to "a"

// Q: What happens when two #'s appear beside each other?
// A: Delete the two values before the first #

// Q: What happens if there are no characters to backspace?
// A: It deletes nothing just like backspace would

// Q: Are two empty results equal to each other?
// A: Yes, consider two empty strings as equal


/**
 * STEP 2: Test cases. Write out some test cases
 * Ask your interviewer if it's okay to write out some test cases
 * to capture the constraints of the answers to the questions asked in step 1.
 */
// Best case
// Input: S: 'abd#c' T: 'b#ac#bc' 
// Output: true => 'abc' === 'abc'

// Edge cases
// - case sensitive
// Input: S: 'A' T: 'b#a'
// Output: false => 'A' !== 'a'

// - backspace cases
// Input: S: 'bc##a', T: '##a'
// Output: true => 'a' === 'a'

// - empty string
// Input: S: 'ab##' T: 'a#'
// Output: true => '' === ''


/**
 * STEP 3: Brute Force. Figure out a solution without code
 * Think about a working logical solution without the context of code
 * and say it out loud. No need to optimize, just a working solution.
 * Cover the test cases
 */

// STEP 4: Code the brute force
let buildString = function(str) {
    const builtArray = [];
    for (let p = 0; p < str.length; p++){
        // 2. pop if # else push into array
        if (str[p] === '#') {
            builtArray.pop();
        } else {
            builtArray.push(str[p]);
        }
    } // O(s) time and space

    return builtArray;
}
/**
 * Checks wether S and T are equal and returns a boolean 
 * @param {String} S
 * @param {String} T
 * @returns {Boolean}
 */
let areEqualTypings = function(S, T) {
    // 1. iterate over S
    const sArray = buildString(S); // O(s) time & space
    // 3. Repeat for T
    const tArray = buildString(T); // O(t) time & space

    if (sArray.length !== tArray.length) {
        return false;
    }

    for (let p = 0; p < sArray.length; p++) {
        if (sArray[p] !== tArray[p]) {
            return false;
        }
    }
    // 4. return comparison
    return true; // O(s + t) time
} 



// STEP 5: Errors. Double check errors
// syntax, edge cases, closing loops etc...

// STEP 6: Test. Test the code against the test cases
// best case example
let S = 'abd#c';
let T = 'b#ac#bc';
areEqualTypings(S,T); // true

// edge cases
S = 'abd#c', T = 'b#ac#bc';
areEqualTypings(S, T); // true

// case sensitive
S = 'A',  T = 'b#a';
areEqualTypings(S, T); // false

// empty string
S = 'ab##', T = 'a#';
areEqualTypings(S, T); // true

// backspace cases
S = 'bc##a', T = '##a';
areEqualTypings(S, T); // true

// STEP 7: Time and Space. Analyze space and time complexity.
// time: O(s + t)
// space: O(s + t)

// STEP 8: Optimize: can we optimize our solution? 
// Can't optimize for time (have to visit every charater of the typing)
// But we can optimize for space. Don't need the array, can do in place
// - use two pointers
// - starting from the end of the strings
// 1. iterate over each string backwards, checking indeces
// 2. check if index is '#'
    // yes
        // is next value also #? 
            // yes =>  move pointer by 2 x count of consecutive # 
            // no => move pointer by two
    // no => compare values at each p
    // shift next index value to prev index value
    // ab#cd => ac

// STEP 9: Code the optimal solution
let areEqualTypings = function(S, T) {
    let p1 = S.length -1, p2 = T.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        // S
        if (S[p1] === '#' || T[p2] === '#') {
            if (S[p1] === '#') {
                let skipCount = 2;
                while (skipCount > 0) {
                    p1--;
                    skipCount--;

                    if (S[p1] === '#') {
                        skipCount += 2;
                    }
                }
            }

            if (T[p2] === '#') {
                let skipCount = 2;
                while (skipCount > 0){
                    p2--;
                    skipCount--;

                    if (T[p2] === '#') {
                        skipCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
}
// STEP 10: Repeat step 6 and step 7. 
// - 6. Test the cases again 
// - 7. Analyze the space and time complexity.
// 
// 
// STEP 11: Ask your interviewer if this is sufficient 
// 