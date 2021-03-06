/// <reference path="index.d.ts" />
import {DATE_REGEX, UNITS_CONVERTOR, UNIT_TO_FILED, SORTED_FILED_ARR} from './core/const'
import Formator from './core/Formator'
import Duration from './core/Duration'

export default class HgDate{
    private date: Date
    private fmtor: Formator
    public static Duration = Duration
    constructor(time?: string | number | Date){
        if(time instanceof Date || typeof time === 'number'){
            this.date = new Date(time)
        }else if(typeof time === 'string'){
            let results: string[] = DATE_REGEX.exec(time)
            if(!results){
                throw `pattern error: ${time}`
            }
            results.shift()
            this.fmtor = new Formator({res: results})
            this.date = this.fmtor.toDate()
        }else {
            this.date = new Date()
        }
        if(this.date && this.date.toString() === 'Invalid Date'){
            throw `Invalid Date: ${time}`
        }
        if(!this.fmtor){
            this.fmtor = new Formator({date: this.date})
        }
    }
    private calUnit(amt: number, unit: Unit): HgDate{
        switch(unit){
            case 'y':
            case 'year':
                this.date.setFullYear(this.date.getFullYear() + amt)
                break
            case 'M':
            case 'month':
                this.date.setMonth(this.date.getMonth() + amt)
                break
            default:
                let diffUnit = UNITS_CONVERTOR[unit]
                if(diffUnit && diffUnit !== -1){
                    this.date = new Date(this.date.getTime() + amt * diffUnit)
                }
        }
        this.fmtor = new Formator({date: this.date})
        return this
    }
    private handleFiled(unit: Unit, handleType: 'start' | 'end'): void{
        let f = UNIT_TO_FILED[unit]
        if(f){
            let initArr = SORTED_FILED_ARR.slice(SORTED_FILED_ARR.indexOf(f) + 1)
            this.fmtor.handleFiled(handleType, initArr)
            this.date = this.fmtor.toDate()
        }
    }
    public toString(): string{
        return this.date.toString()
    }
    public getTime(): number{
        return this.date.getTime()
    }
    public toDate(): Date{
        return new Date(this.date)
    }
    public format(fStr: string): string{
        return this.fmtor.format(fStr)
    }
    public add(amt: number, unit: Unit): HgDate{
        return this.calUnit(amt, unit)
    }
    public substract(amt: number, unit: Unit): HgDate{
        return this.calUnit(amt * -1, unit)
    }
    public startOf(unit: Unit): HgDate{
        this.handleFiled(unit, 'start')
        return this
    }
    public endOf(unit: Unit): HgDate{
        this.handleFiled(unit, 'end')
        return this
    }
    public diff(date: HgDate | Date | string | number): Duration{
        if(!(date instanceof HgDate)){
            date = new HgDate(date)
        }
        let _period = new Duration(this.date.getTime() - date.getTime())
        return _period
    }
}