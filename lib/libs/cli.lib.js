"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execPowerShellCommand = void 0;
const child_process_1 = require("child_process");
function execPowerShellCommand(command) {
    // error, stdout, stderr in callback args
    (0, child_process_1.exec)(command, { 'shell': 'powershell.exe' }, () => {
        // do whatever with stdout
    });
}
exports.execPowerShellCommand = execPowerShellCommand;
