import Group from './Groups';

test('Group has an add method to add a key to the group', () => {
    const group = new Group(); 
    group.add('Thomas');
    expect(group.has('Thomas')).toBeTruthy();
});

test('Group has a delete method to remove a key from the group', () => {
    const group = new Group();
    group.add('Ramsey');
    group.add('Rosicky');
    group.add('Bendtner');
    expect(group.has('Ramsey')).toBeTruthy();
    group.delete('Ramsey');
    expect(group.has('Ramsey')).toBeFalsy();
});

test('Group has a \'from\' function that creates a new group out of an iterables', () => {
    const newGroup = Group.from(['Rolando', 'Leonardo', 'Bonucci']);
    expect(newGroup.has('Rolando')).toBeTruthy();
    expect(newGroup.has('Rondo')).toBeFalsy();
});

test('Able to loop through group with for of loop', () => {
    const group = new Group();
    group.add('John');
    group.add('Mathias');
    group.add('Lucas');
    group.add('Roberto');
    group.add('Martinez');
    group.add('Ramos');

    const mockFunction = jest.fn();
    for (let element of group) {
        mockFunction(element); 
    }
    expect(mockFunction).toHaveBeenCalledTimes(6);
});
