import { exec } from "child_process";
import fs, {readFileSync, writeFileSync} from 'fs';

export function openFileAtLastPosition(filename: string) {
    // exec(`code -g ${filename}:$($(get-content ${filename}).Length):100`, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    exec(`subl ${filename}:$($(get-content ${filename}).Length):100`, {'shell': 'powershell.exe'});
}

export function deleteFile(path: string): void {
    if (fs.existsSync(path)) {
        try {
            fs.unlinkSync(path)
            // file removed
        } catch (err) {
            // console.error(err)
        }
    }
}


export function getJSONFileContent(path: string): any {
    const content = readFileSync(path);
    return JSON.parse(content.toString());
}

export function writeJSONFileContent(path: string, content: any): void {
    writeFileSync(path, JSON.stringify(content, null, '\t'));
}
