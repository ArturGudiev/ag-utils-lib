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
