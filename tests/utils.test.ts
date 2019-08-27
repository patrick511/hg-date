import {padStart, padEnd} from "../src/core/utils";


describe('utils:test', () => {
    test('pad:start', () => {
        expect(
            padStart('abc', 5, 'p')
        ).toEqual('ppabc')
        expect(
            padStart('abcabc', 5, 'p')
        ).toEqual('abcabc')
    })
    test('pad:end', () => {
        expect(
            padEnd('abc', 5, 'p')
        ).toEqual('abcpp')
        expect(
            padEnd('abcabc', 5, 'p')
        ).toEqual('abcabc')
    })
})