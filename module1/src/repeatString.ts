// Step 1: Define the function signature
function repeatString(inputString: string, repeatCount: number): string {
    // Step 2: Create a variable to hold the result
    let result = "";

    // Step 3: Repeat the input string
    for (let i = 0; i < repeatCount; i++) {
        result += inputString;
    }

    // Step 4: Return the result
    return result;
}

// Sample Input:
const inputString = "Hello!";
const repeatCount = 3;

// Call the function with the sample input
const result = repeatString(inputString, repeatCount);

// Output the result
console.log(result); // "Hello!Hello!Hello!"


//run command 
// ts-node-dev --respawn --transpile-only .\module1\src\repeatString.ts