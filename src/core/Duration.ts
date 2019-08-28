import {UNITS_CONVERTOR, UNIT_TO_FILED, FILED_CONVERTOR, SORTED_FILED_ARR} from './const'

export default class Duration {
    private time: number
    private YYYY: number = 0
    private MM: number = 0
    private DD: number = 0
    private hh: number = 0
    private mm: number = 0
    private ss: number = 0
    private S: number = 0
    private isNegative: boolean = false
    constructor(ms: number = 0){
        this.initInfo(ms)
    }   
    private initInfo(time: number){
        this.time = time
        this.isNegative = time < 0
        SORTED_FILED_ARR.reduce((tTime, field) => {
            let _leftTime = tTime % FILED_CONVERTOR[field]
            this[field] = Math.floor(tTime / FILED_CONVERTOR[field])
            return _leftTime
        }, Math.abs(time))
    }
    public toString(): string{
        return `${this.YYYY}y${this.MM}M${this.DD}d${this.hh}h${this.mm}m${this.ss}s${this.S}ms`
    }
    public getTime(): number{
        return this.time
    }
    public getAs(unit: Unit, isRound: boolean = false): number{
        let unitTime = UNITS_CONVERTOR[unit]
        if(unitTime){
            let resTime = this.time / unitTime
            //round to 2 decimal places
            return isRound ? Math.round(resTime) : (Math.round(resTime * 100) / 100)
        }
        return this.time
    }
    public get(unit: Unit): number{
        let key = UNIT_TO_FILED[unit]
        return key ? this[key] * (this.isNegative ? -1 : 1) : 0
    }
}