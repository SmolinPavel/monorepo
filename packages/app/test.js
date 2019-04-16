const { app } = require('.');

describe('app', () => {
  it('should return correct message', () => {
    const result = app();
    expect(result).toBe('Hi from the app');
  });
});
