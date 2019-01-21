const assert = require('assert')
const game = require('./game')
const utils = require('./utils')

function fn(impl) {
    const mockFn = (...args) => {
        return impl(...args)
        }
        return mockFn
}

test('using jest', () => {
        utils.getWinner = jest.fn((p1, p2) => p1)
        const winner = game('mattia', 'mau');
        expect(winner).toBe('mattia')
        console.log('utils', utils.getWinner.mock.calls)
        expect(utils.getWinner.mock.calls).toEqual([
            ['mattia', 'mau'],
            ['mattia', 'mau']
    ]);
        expect(utils.getWinner).toHaveBeenCalledTimes(2)
        expect(utils.getWinner).toHaveBeenCalledWith('mattia', 'mau')
        expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'mattia', 'mau')
        expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'mattia', 'mau')
})


