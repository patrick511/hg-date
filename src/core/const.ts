export const DATE_REGEX = /^(\d{4})\D?(\d{2}|)\D?(\d{2}|)\D?(\d{2}|)\D?(\d{2}|)\D?(\d{2}|)\D?(\d{3}|)$/

export const FORMAT_DATE_REGEX = /YYYY|MM|DD|hh|mm|ss|S/g

export const MAX_DATE_INFO: {
    'DD': {[key: string]: number}
    [key: string]: (number | {[key: string]: number})
} = {
    'YYYY': 9999,
    'MM': 12,
    'DD': {
        '01': 31,
        '02': 28,
        '03': 31,
        '04': 30,
        '05': 31,
        '06': 30,
        '07': 31,
        '08': 31,
        '09': 30,
        '10': 31,
        '11': 30,
        '12': 31,
        '02_leap': 29
    },
    'hh': 23,
    'mm': 59,
    'ss': 59,
    'S': 999
}

export const UNITS_CONVERTOR: {
    [k in Unit]: number
} = {
    'ms': 1,
    'millisecond': 1,
    's': 1000,
    'second': 1000,
    'm': 60000,
    'minute': 60000,
    'h': 3600000,
    'hour': 3600000,
    'd': 86400000,
    'day': 86400000,
    'M': -1,
    'month': -1,
    'y': -1,
    'year': -1,
}