import _ from 'underscore';
import readlineSync from 'readline-sync';
import fs, { writeFileSync } from 'fs';
import { deleteFile, openFileAtLastPosition } from './fs.lib';
import { getRandomString } from './random.lib';
import chalk from 'chalk';
// import * as chalkModule from 'chalk';
// const chalk: typeof chalkModule.Chalk = chalkModule.default;

export async function getUserInput(message: string, colon = true) {
    message = message + (colon ? ':' : '') + ' ';
    return readlineSync.question(message, {
        encoding: 'utf-8'
      });
}

export function tab(str: string, num = 1) {
    return str.split('\n').map(line => `${'\t'.repeat(num)}${line}`).join('\n');
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


export async function getInputFromEditor(message = '', options: {
    extension?: string, originalContent?: string, filename?: string
} = {}): Promise<string> {
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

