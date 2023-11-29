import clipboardy from "clipboardy";
import { getInputFromEditor } from "./io.lib";

export function exit() {
    process.exit(1);
}

export function checkArrayContainsDuplicates(arr: any[]){
    return new Set(arr).size !== arr.length;
}

export function clip(value: string) {
    clipboardy.writeSync(value);
}

export async function editString(str: string, extension = '', options: { [key: string]: string } = {}): Promise<string> {
    const opts: any = {originalContent: str};
    if (extension) {
        opts.extension = extension;
    }
    return await getInputFromEditor(options.message ? options.message : '', opts);
}

export function isNumeric(str: string): boolean {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}


export function addTabsToLines(text: string, tabsNumber = 1): string {
    return text.split('\n').map(s => `${'\t'.repeat(tabsNumber)} ${s}`).join('\n');
}

export function equalLowerStrings(s1: string, s2: string) {
    return s1.toLowerCase() === s2.toLowerCase();
}
