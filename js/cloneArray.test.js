const cloneArray = require('./cloneArray')

test.todo('properly clones array'), () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toBe(array);
}