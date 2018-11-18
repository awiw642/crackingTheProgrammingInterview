import { roadGraph } from './robot';


test('roadGraph should contains elements from the roads array', () => {
    expect(roadGraph).toHaveProperty('Alice\'s House');
    expect(roadGraph).toHaveProperty('Bob\'s House');
    expect(roadGraph).toHaveProperty('Cabin');
});
