import {MAX_DATE_INFO, FORMAT_DATE_REGEX} from './const'
import {padStart} from '../core/utils'
function isLeapYear(year: string): boolean{
    return (+year % 4 === 0 && +year % 100 !== 0) || (+year % 400 === 0)
}

export default class Formator {
    private YYYY: string
    private MM: string
    private DD: string
    private hh: string
    private mm: string
    private ss: string
    private S: string
    private isLeapYear: boolean
    [key: string]: any
    constructor({
        date = null,
        res = []
    }:{
        date?: Date,
        res?: string[]
    }){
        res = res.filter(r => !!r)
        if(res.length > 0){
            [this.YYYY, this.MM = '01', this.DD = '01', this.hh = '00', this.mm = '00', this.ss = '00', this.S = '000'] = res
            this.isLeapYear = isLeapYear(this.YYYY)
            this.checkValidation()
        }else {
            if(!date){
                date = new Date()
            }
            this.initInfoByDate(date)
        }
    }

    checkValidation(): void{
        for(let key in MAX_DATE_INFO){
            if(typeof MAX_DATE_INFO[key] === 'object'){
                let max_day: number
                MAX_DATE_INFO
                if(this.MM === '02' && this.isLeapYear){
                    max_day = (<{[key: string]: number}>MAX_DATE_INFO[key])[this.MM + '_leap']
                }else {
                    max_day = (<{[key: string]: number}>MAX_DATE_INFO[key])[this.MM]
                }
                if(+this[key] > max_day){
                    throw `out of range ${key}: ${this[key]}`
                }
            }else {
                if(+this[key] > MAX_DATE_INFO[key]){
                    throw `out of range ${key}: ${this[key]}`
                }
            }
        }
    }

    initInfoByDate(date: Date): void{
        this.YYYY = padStart(date.getFullYear().toString(), 4, '0')
        this.MM = padStart((date.getMonth() + 1).toString(), 2, '0')
        this.DD = padStart(date.getDate().toString(), 2, '0')
        this.hh = padStart(date.getHours().toString(), 2, '0')
        this.mm = padStart(date.getMinutes().toString(), 2, '0')
        this.ss = padStart(date.getSeconds().toString(), 2, '0')
        this.S = padStart(date.getMilliseconds().toString(), 3, '0')
        this.isLeapYear = isLeapYear(this.YYYY)
    }

    toDate(): Date{
        return new Date(+this.YYYY, +this.MM - 1, +this.DD, +this.hh, +this.mm, +this.ss, +this.S)
    }

    format(fStr: string): string{
        return fStr.replace(FORMAT_DATE_REGEX, (filed) => this[filed])
    }

    getCurrentMouthMaxDays(): number{
        let dayKey: string = this.MM
        if(dayKey === '02' && this.isLeapYear){
            dayKey = '02_leap'
        }
        return MAX_DATE_INFO.DD[dayKey]
    }

    getCurrentYearsMaxDays(): number{
        return this.isLeapYear ? 366 : 365
    }
}