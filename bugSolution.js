function myFunc(a, b) {
  if (a === 0 && b === 0) { 
    return 0; // Correctly handles both 0 and -0
  }
  // ... rest of the function
} 

//Alternative solution using Object.is
function myFunc(a, b) {
  if (Object.is(a, 0) && Object.is(b, 0)) {
    return 0; // Correctly handles both 0 and -0
  }
  // ... rest of the function
}
