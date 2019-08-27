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
    private getCurMonMaxDay(): number{
        if(this.MM === '02' && this.isLeapYear){
            return (MAX_DATE_INFO.DD as {[key: string]: number})[this.MM + '_leap']
        }else {
            return (MAX_DATE_INFO.DD as {[key: string]: number})[this.MM]
        }
    }
    checkValidation(): void{
        let key: Filed
        for(key in MAX_DATE_INFO){
            if(typeof MAX_DATE_INFO[key] === 'object'){
                let max_day: number = this.getCurMonMaxDay()
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
    handleFiled(handleType: 'start' | 'end', fileds: Filed[]): Formator{
        if(handleType === 'start'){
            fileds.forEach(filed => this.startFiled(filed))
        }else {
            fileds.forEach(filed => this.endFiled(filed))
        }
        this.isLeapYear = isLeapYear(this.YYYY)
        return this
    }
    startFiled(filed: Filed):void{
        switch(filed){
            case 'YYYY':
                this.YYYY = '0001'
                break;
            case 'MM':
            case 'DD':
                this[filed] = '01'
                break;
            case 'S':
                this.S = '000'
                break;
            default:
                this[filed] = '00'
        }
    }
    endFiled(filed: Filed):void{
        switch(filed){
            case 'DD':
                this.DD = this.getCurMonMaxDay() + ''
                break;
            default:
                this[filed] = MAX_DATE_INFO[filed] + ''
        }
    }
}