describe('Do The Math', () => {
  it('should create a function named doTheMath', () => {
    expect(typeof doTheMath).toBe('function');
  });
  it('should return correct addition of two numbers', () => {
    expect(doTheMath(2, "+", 1)).toBe(3);
    expect(doTheMath(5, "+", 7)).toBe(12);
  });
  it('should return correct subtraction of two numbers', () => {
    expect(doTheMath(2, "-", 1)).toBe(1);
    expect(doTheMath(5, "-", 7)).toBe(-2);
  });
  it('should return correct multiplication of two numbers', () => {
    expect(doTheMath(2, "*", 3)).toBe(6);
    expect(doTheMath(5, "*", 7)).toBe(35);
  });
  it('should return correct division of two numbers', () => {
    expect(doTheMath(2, "/", 2)).toBe(1);
    expect(doTheMath(100, "/", 10)).toBe(10);
  });
});