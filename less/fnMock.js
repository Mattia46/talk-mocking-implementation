const assert = require('assert')
const game = require('./../game')
const utils = require('./../utils')


function fn(impl) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args);
        return impl(...args)
        }
        mockFn.mock = {calls: []}
        return mockFn
}

test('using jest', () => {
        utils.getWinner = fn((p1, p2) => p1)
        const winner = game('mattia', 'mau');
        console.log('sdf', utils.getWinner.mock.calls);
        assert.strictEqual(winner, 'mattia');
        assert.deepStrictEqual(utils.getWinner.mock.calls, [
            ['mattia', 'mau'],
            ['mattia', 'mau']
            ])

})

