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
}

declare type Unit = 'ms' | 'millisecond' | 's' | 'second' | 'm' | 'minute' | 'h' | 'hour' | 'd' | 'day' | 'M' | 'month' | 'y' | 'year'

declare type Filed = 'YYYY' | 'MM' | 'DD' | 'hh' | 'mm' | 'ss' | 'S'