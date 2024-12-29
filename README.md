# Unexpected Behavior with Negative Zero (-0) in JavaScript Comparisons

This repository demonstrates a common JavaScript pitfall involving the comparison of negative zero (-0) with zero (0).  JavaScript's loose comparison (==) treats -0 and 0 as equal, while strict comparison (===) distinguishes between them. This can cause unexpected results in functions that don't explicitly handle negative zero.

The `bug.js` file shows a function that incorrectly assumes 0 and -0 are the same. The `bugSolution.js` file presents a corrected version.

## How to Reproduce
1. Clone the repository.
2. Run `bug.js` and observe the unexpected output.
3. Run `bugSolution.js` to see the corrected behavior.

## Solution
Always use strict comparison (===) to avoid unexpected behavior caused by the implicit type coercion of loose comparison in JavaScript. When dealing with potential negative zero values, explicitly check for both 0 and -0.