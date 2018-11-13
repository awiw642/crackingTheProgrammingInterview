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
    expect(newVector).toHaveProperty(x);
    expect(newVector).toHaveProperty(y);
});

test('Vec should have a minus method to calculate the substraction of 2 vectors', () => {
    const instanceOne = new Vec(5, 6);
    const instanceTwo = new Vec(6, 5);
    expect(instanceOne.minus(instanceTwo)).toBeInstanceOf(Vec);
});
