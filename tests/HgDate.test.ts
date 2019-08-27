import HgDate from '../src/index'

describe('HgDate:init', () => {
    test('HgDate', () => {
        expect(
            new HgDate('1992-05-11 23:11:02:004').format('YYYY-MM-DD'),
        ).toEqual('1992-05-11')

        expect(
            new HgDate('1992-05-11 23:11:02:004').format('YYYYMMDD'),
        ).toEqual('19920511')

        expect(
            new HgDate('1992-05-11 23:11:02:004').format('YYYY年MM月DD日 hh:mm:ss'),
        ).toEqual('1992年05月11日 23:11:02')
        
        expect(
            new HgDate('1992-05-11 23:11:02:004').add(1, 'y').format('YYYYMMDD'),
        ).toEqual('19930511')

        expect(
            new HgDate('1992-05-11 23:11:02:004').substract(1, 'y').format('YYYYMMDD'),
        ).toEqual('19910511')

        expect(
            new HgDate('1992-05-31 23:11:02:004').add(1, 'M').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-07-01 23:11:02:004')

        expect(
            new HgDate('1992-05-11 23:11:02:004').add(1, 'M').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-06-11 23:11:02:004')

        expect(
            new HgDate('1992-05-11 23:11:02:004').substract(1, 'M').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-04-11 23:11:02:004')

        expect(
            new HgDate('1992-05-11 23:11:02:004').add(10, 'd').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-05-21 23:11:02:004')

        expect(
            new HgDate('1992-05-11 23:11:02:004').substract(10, 'd').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-05-01 23:11:02:004')

        expect(
            new HgDate('1992-05-11 23:11:02:004').substract(100, 'ms').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-05-11 23:11:01:904')

        expect(
            new HgDate('1992-05-11 23:11:02:004').add(120, 'm').format('YYYY-MM-DD hh:mm:ss:S'),
        ).toEqual('1992-05-12 01:11:02:004')
    })
})