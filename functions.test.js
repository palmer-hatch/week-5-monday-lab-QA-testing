
const {
  returnTwo,
  greeting,
  add  
} = require('./functions')

test("returnTwo should return 2", ()=>{
    expect(returnTwo()).toBe(2)
} )

test('shoud return hello james', ()=>{
    expect(greeting('James')).toBe('Hello, James.')
})

test('shoud return hello jill', ()=>{
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('should add (1,2) to equal 3', ()=>{
    expect(add(1,2)).toBe(3)
})

test('should add (5,9) to equal 3', ()=>{
    expect(add(5,9)).toBe(14)
})