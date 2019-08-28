import HgDate from '../src/index'

describe('Duration', () => {
    test('Duration:init', () => {
        expect(
            new HgDate.Duration(3614000).get('s'),
        ).toEqual(14)

        expect(
            new HgDate.Duration(-3614000).get('s'),
        ).toEqual(-14)

        expect(
            new HgDate.Duration(-3614000).getAs('h', true),
        ).toEqual(-1)

        expect(
            new HgDate.Duration(9000000).getAs('h'),
        ).toEqual(2.5)
    })
})