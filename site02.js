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
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets2;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {

    let stack = [];

    for (let index = 0; index < brackets.length; index++) {
        let item = brackets[index];

        if (item === '(' || item === '{' || item === '[') {
            stack.push(item);
            continue;
        }else if (item === ')' || item === '}' || item === ']') {

            if (stack.length === 0) {
                return false
            }

            check = stack.pop(); 
            switch (item) {
                case ')' : 
                    if (check !== '(') {
                        return false;
                    }
                    break;
                case '}' :
                    if (check !== '{') {
                        return false;
                    }
                    break;
                case ']' :
                    if (check !== '[') {
                        return false;
                    }
                    break;
            }
        }
    }

   return stack.length === 0;

}