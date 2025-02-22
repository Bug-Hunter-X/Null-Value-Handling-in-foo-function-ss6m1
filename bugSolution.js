function foo(a, b) {
  if (a === null || b === null) {
    return 0; // or throw an error: throw new Error('Null values are not allowed');
  }
  // ...rest of the function...
}