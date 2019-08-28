declare class HgDate {

    constructor(time?: string | number | Date)

    toString(): string
    
    getTime(): number

    toDate(): Date

    format(str: string): string

    add(amt: number, unit: Unit): HgDate

    substract(amt: number, unit: Unit): HgDate

    startOf(unit: Unit): HgDate

    endOf(unit: Unit): HgDate

    diff(date: HgDate | Date | string | number): Duration

    static Duration: Duration
}

declare class Duration {
    
    constructor(ms?: number)

    public toString(): string

    public getTime(): number

    public getAs(unit: Unit, isRound?: boolean): number

    public get(unit: Unit): number
}

declare type Unit = 'ms' | 'millisecond' | 's' | 'second' | 'm' | 'minute' | 'h' | 'hour' | 'd' | 'day' | 'M' | 'month' | 'y' | 'year'

declare type Filed = 'YYYY' | 'MM' | 'DD' | 'hh' | 'mm' | 'ss' | 'S'