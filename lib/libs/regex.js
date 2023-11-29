"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLetter = exports.isDigit = exports.extractStringFromPluses = exports.extractNumber = void 0;
function extractNumber(stringWithNumber) {
    const stringWithNumberRegex = new RegExp('(\\d+)');
    const arr = stringWithNumberRegex.exec(stringWithNumber);
    if (arr && arr.length > 1) {
        return +arr[1];
    }
    throw new Error(`Invalid Argument: Can't find number in the given string ${stringWithNumber}`);
}
exports.extractNumber = extractNumber;
function extractStringFromPluses(stringWithStuff) {
    const stringWithNumberRegex = new RegExp('\\+*([^+]+)\\+*');
    const arr = stringWithNumberRegex.exec(stringWithStuff);
    if (arr && arr.length > 1) {
        return arr[1];
    }
    throw new Error(`Invalid Argument: Can't find number in the given string ${stringWithStuff}`);
}
exports.extractStringFromPluses = extractStringFromPluses;
function isDigit(symbol) {
    if (symbol.length !== 1) {
        throw new Error('Should be one symbol');
    }
    return /^[0-9]+$/.test(symbol);
}
exports.isDigit = isDigit;
function isLetter(symbol) {
    if (symbol.length !== 1) {
        throw new Error('Should be one symbol');
    }
    return /^[a-zA-Z]+$/.test(symbol);
}
exports.isLetter = isLetter;
