"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWithoutNewLine = exports.drawLine = exports.newline = exports.tablifyString = exports.getUserInput = void 0;
const underscore_1 = __importDefault(require("underscore"));
const readline_sync_1 = __importDefault(require("readline-sync"));
function getUserInput(message, colon = true) {
    return __awaiter(this, void 0, void 0, function* () {
        message = message + (colon ? ':' : '') + ' ';
        return readline_sync_1.default.question(message);
    });
}
exports.getUserInput = getUserInput;
function tablifyString(str, num = 1) {
    return str.split('\n').map(line => `${'\t'.repeat(num)}${line}`).reduce((a, b) => `${a}\n${b}`, '');
}
exports.tablifyString = tablifyString;
function newline(n = 1) {
    underscore_1.default.times(n, () => console.log());
}
exports.newline = newline;
function drawLine() {
    const line = '-'.repeat(process.stdout.columns);
    // const line = '─'.repeat(process.stdout.columns);
    console.log(line);
}
exports.drawLine = drawLine;
function printWithoutNewLine(message) {
    process.stdout.write(message);
}
exports.printWithoutNewLine = printWithoutNewLine;
