import _ from 'underscore';
import readlineSync from 'readline-sync';

export async function getUserInput(message: string, colon = true) {
    message = message + (colon ? ':' : '') + ' ';
    return readlineSync.question(message);
}

export function tablifyString(str: string, num = 1) {
    return str.split('\n').map(line => `${'\t'.repeat(num)}${line}`).reduce((a, b) => `${a}\n${b}`, '');
}

export function newline(n = 1): void {
    _.times(n, () => console.log())
}

export function drawLine() {
    const line = '-'.repeat(process.stdout.columns);
    // const line = '─'.repeat(process.stdout.columns);
    console.log(line);
}

export function printWithoutNewLine(message: any): void {
    process.stdout.write(message);
}

