export function pad(str: string = '', padLen = 0, padStr: string = '0', isStart: boolean = true): string{
    if(padStr.length !== 1){
        return str
    }
    let oriLen = str.length
    let diffLen = padLen - oriLen
    if(diffLen > 0){
        str = isStart ? new Array(diffLen).fill(padStr).join('') + str : str + new Array(diffLen).fill(padStr).join('')
    }
    return str
}

export function padStart(str: string = '', padLen = 0, padStr: string = '0'): string{
    return pad(str, padLen, padStr, true)
}

export function padEnd(str: string = '', padLen = 0, padStr: string = '0'): string{
    return pad(str, padLen, padStr, false)
}