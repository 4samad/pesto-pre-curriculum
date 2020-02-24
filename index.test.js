const {
    describe,
    it,
    expect,
    matchers 
  } = require('./index');

const add = (a,b) => {
    return a+b;
}

const substract = (a,b) => {
    return a-b;
}

const divide = (a,b) => {
    return a/b;
}

const multiply = (a,b) => {
    return a*b;
}

  describe('add', () => {
    it('adds two numbers', () => {
      const result = add(4, 2)
      expect(result).toBe(6)
    })
  })

  describe('substract', () => {
    it('substracts two numbers', () => {
      const result = substract(4, 2)
      expect(result).toBe(2)
    })
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      const result = multiply(4, 2);
      expect(result).toBe(8);
    })
  })

  describe('divide', () => {
    it('divides two numbers', () => {
      const result = divide(4, 2)
      expect(result).toBe(2)
    })
  })