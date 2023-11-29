
export function extractNumber(stringWithNumber: string): number {
    const stringWithNumberRegex = new RegExp('(\\d+)');
    const arr = stringWithNumberRegex.exec(stringWithNumber)
    if (arr && arr.length > 1) {
        return +arr[1]
    }
    throw new Error(`Invalid Argument: Can't find number in the given string ${stringWithNumber}`);
}

export function extractStringFromPluses(stringWithStuff: string): string {
    const stringWithNumberRegex = new RegExp('\\+*([^+]+)\\+*');
    const arr = stringWithNumberRegex.exec(stringWithStuff)
    if (arr && arr.length > 1) {
        return arr[1]
    }
    throw new Error(`Invalid Argument: Can't find number in the given string ${stringWithStuff}`);
}


export function isDigit(symbol: string): boolean {
    if (symbol.length !== 1) {
        throw new Error('Should be one symbol');
    }
    return /^[0-9]+$/.test(symbol);
}

export function isLetter(symbol: string): boolean {
    if (symbol.length !== 1) {
        throw new Error('Should be one symbol');
    }
    return /^[a-zA-Z]+$/.test(symbol);
}