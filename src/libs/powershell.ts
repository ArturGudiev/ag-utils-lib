import { exec } from "child_process";

export function clearScreenPS(): void {
    exec('clear-host', {'shell': 'powershell.exe'});
}