import {DATE_REGEX} from '../src/core/const'

describe('dateRegex:test', () => {
    test('exec:YYYY-MM-DD', () => {
        let result = DATE_REGEX.exec('1992-05-11')
        expect(result[1]).toEqual('1992')
        expect(result[2]).toEqual('05')
        expect(result[3]).toEqual('11')
    })
    test('exec:YYYYMMDD', () => {
        let result = DATE_REGEX.exec('19920511')
        expect(result[1]).toEqual('1992')
        expect(result[2]).toEqual('05')
        expect(result[3]).toEqual('11')
    })
    test('exec:YYYY/MM/DD hh:mm:ss', () => {
        let result = DATE_REGEX.exec('1992/05/11 23:21:45')
        expect(result[1]).toEqual('1992')
        expect(result[2]).toEqual('05')
        expect(result[3]).toEqual('11')
        expect(result[4]).toEqual('23')
        expect(result[5]).toEqual('21')
        expect(result[6]).toEqual('45')
    })
    test('exec:abcddf', () => {
        let result = DATE_REGEX.exec('abcddf')
        expect(result).toBeNull()
    })
})