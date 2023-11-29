import _ from 'underscore';
import readlineSync from 'readline-sync';
import fs, { writeFileSync } from 'fs';
import { deleteFile, openFileAtLastPosition } from './fs.lib';
import chalk from 'chalk';
import { getRandomString } from './random.lib';

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


export function printInColor(message: any, color: string, newline=true): void {
    if (newline) {
        console.log(chalk.hex(color)(message));
    } else {
        process.stdout.write(chalk.hex(color)(message));
    }
}

export function printInColorInline(message: any, color: string): void {
    printInColor(message, color, false);
}

export interface IMessageColorInline {
    message: any;
    color: string;
}
export function printSeveralInColorInline(messages: IMessageColorInline[]) {
    messages.forEach(obj => {
        printInColorInline(obj.message, obj.color);
    });
}

export async function getInputFromEditor(message = '', options: {
    extension?: string, originalContent?: string, filename?: string, tempFile: string
} = {tempFile: 'C:\\Artur\\temp\\'}): Promise<string> {
    if (message) {
        console.log(message);
    }
    console.log('Wait for the user input: ');
    const dir = 'C:\\Artur\\temp\\';
    const filename = (options.filename ? `${options.filename}-` : 'tmp-dashboard-') + getRandomString();
    let fullFilename = `${dir}${filename}`;
    if (options.extension) {
        fullFilename += options.extension.startsWith('.') ? options.extension : `.${options.extension}`;
    }
    if (options.originalContent) {
        writeFileSync(fullFilename, options.originalContent);
    }
    // execPowerShellCommand(`code ${fullFilename}`);
    openFileAtLastPosition(fullFilename);
    const res = await waitForFirstFileChanges(fullFilename, options.originalContent);
    deleteFile(fullFilename);
    return res;
}

export async function waitForFirstFileChanges(filename: string, originalContent?: string): Promise<string> {
    let res;
    fs.watchFile(
        filename,
        {
            persistent: true,
            interval: 200,
        },
        () => { // curr: any, prev: any
            try {
                res = fs.readFileSync(filename, 'utf8');
                if (res !== undefined && res !== null && (!originalContent || res !== originalContent)) {
                    fs.unwatchFile(filename);
                }
            } catch (e) {
                // console.log('ERROR in waitForFirstFileChanges')
            }

        }
    );
    while (res === undefined || (originalContent && res === originalContent)) {
        await sleep(200);
    }
    return res;
}

export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
