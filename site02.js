//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
// Driver function used for display and passing values.
function checkBrackets() {
    // Test brackets examples
    const testBrackets = [
        "[()]{}{[()()]()}", // balanced
        "([{}])", // balanced
        "{(})[]", // not balanced
        "[(])", // not balanced
        "[()" // not balanced
    ];

    // Change testIndex here to test different scenarios
    const testIndex = 1; // Change this to test different scenarios

    // Get the test brackets from the array based on testIndex
    let testbrackets = testBrackets[testIndex];

    // Implement isBalanced function. Checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    // Used for display, no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    // Display the message
    document.getElementById("results").innerHTML = msg;
}

// Function to check if the brackets are balanced
function isBalanced(brackets) {
    let stack = [];

    for (let index = 0; index < brackets.length; index++) {
        let item = brackets[index];

        if (item === '(' || item === '{' || item === '[') {
            stack.push(item);
            continue;
        } else if (item === ')' || item === '}' || item === ']') {
            if (stack.length === 0) {
                return false;
            }

            let check = stack.pop();
            switch (item) {
                case ')':
                    if (check !== '(') {
                        return false;
                    }
                    break;
                case '}':
                    if (check !== '{') {
                        return false;
                    }
                    break;
                case ']':
                    if (check !== '[') {
                        return false;
                    }
                    break;
            }
        }
    }

    return stack.length === 0;
}
