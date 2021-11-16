

test('should be true', () => {
    const isActive = true;

    if(isActive) {
        throw new Error('Is not active');
    }
})
