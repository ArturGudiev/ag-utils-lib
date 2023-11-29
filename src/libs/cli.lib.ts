import { exec } from "child_process";

export function execPowerShellCommand(command: string) {
    // error, stdout, stderr in callback args
    exec(command, {'shell': 'powershell.exe'}, () => {
        // do whatever with stdout
    });
}