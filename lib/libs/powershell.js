"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearScreenPS = void 0;
const child_process_1 = require("child_process");
function clearScreenPS() {
    (0, child_process_1.exec)('clear-host', { 'shell': 'powershell.exe' });
}
exports.clearScreenPS = clearScreenPS;
