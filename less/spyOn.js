const assert = require('assert');
const utils = require('./utils')
const game = require('./game');

test('should win the first player', () => {
    const original = utils.getWinner
    utils.getWinner = (p1, p2) => p1
    const winner = game('mattia', 'mau')
    assert.strictEqual(winner, 'mattia')
    utils.getWinner = original
});

test('using Jest', () => {
    jest.spyOn(utils, 'getWinner')
    utils.getWinner.mockImplementation((p1, p2) => p1)
    const winner = game('mattia', 'mau')
    expect(winner).toBe('mattia')
    expect(utils.getWinner.mock.calls).toEqual(
        [
            ['mattia', 'mau'],
            ['mattia', 'mau']
        ]
    )
    utils.getWinner.mockRestore()
})

