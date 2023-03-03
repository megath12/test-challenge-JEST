
const {substract, multiply, divide, power} = require('./calculator')

test('suma',()=>{
    expect(sum(3,7)).toBe(10)
});

test('resta',()=>{
    expect(substract(8,2)).toBe(6)
});

test('multiplicacion',()=>{
    expect(multiply(3,7)).toBe(21)
});

test('division',()=>{
    expect(divide(8,2)).toBe(4)
});

test('potencia',()=>{
    expect(power(3,3)).toBe(27)
});

