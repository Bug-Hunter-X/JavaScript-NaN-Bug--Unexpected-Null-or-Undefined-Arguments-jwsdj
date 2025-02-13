# JavaScript NaN Bug: Unexpected Null or Undefined Arguments

This repository demonstrates a common JavaScript bug involving unexpected null or undefined arguments leading to NaN (Not a Number) results.  The bug is present in the `foo` and `bar` functions.  The solution adds input validation to handle null and undefined values appropriately.

## Bug Description
The original `foo` function performs simple addition. However, if either `a` or `b` is null or undefined, the addition results in NaN. This propagates to `bar`, ultimately causing incorrect results.

## Solution
The solution modifies `foo` to check for null or undefined arguments. If found, it defaults to 0, preventing NaN errors.  This ensures the functions return predictable results even with unexpected input.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run each file to observe the original buggy behavior and the corrected output.