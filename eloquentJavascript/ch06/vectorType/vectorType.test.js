import Vec from './vectorType';

test('Vec instance contains x and y value', () => {
    const instance = new Vec(5, 6);
    expect(instance.x).toBe(5);
    expect(instance.y).toBe(6);
});

test('Vec should have a plus method to calculate the addition of 2 vectors', () => {
    const instanceOne = new Vec(5, 6);
    const instanceTwo = new Vec(6, 5);
    const newVector = instanceOne.plus(instanceTwo);
    expect(newVector).toBeInstanceOf(Vec);
    expect(newVector).toHaveProperty('x');
    expect(newVector).toHaveProperty('y');
    expect(newVector.x).toBe(11);
    expect(newVector.y).toBe(11);
});

test('Vec should have a minus method to calculate the substraction of 2 vectors', () => {
    const instanceOne = new Vec(5, 6);
    const instanceTwo = new Vec(6, 5);
    const newVector = instanceOne.minus(instanceTwo);
    expect(newVector).toHaveProperty('x');
    expect(newVector).toHaveProperty('y');
    expect(newVector).toBeInstanceOf(Vec);
    expect(newVector.x).toBe(-1);
    expect(newVector.y).toBe(1);
});

test('Vec should have a property length', () => {
    const instance = new Vec(1, 1);
    expect(instance).toHaveProperty('length');
    expect(instance.length).toBe(1.4142135623730951);
});
