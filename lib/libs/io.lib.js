"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.waitForFirstFileChanges = exports.getInputFromEditor = exports.printWithoutNewLine = exports.drawLine = exports.newline = exports.tablifyString = exports.getUserInput = void 0;
const underscore_1 = __importDefault(require("underscore"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const fs_1 = __importStar(require("fs"));
const fs_lib_1 = require("./fs.lib");
const random_lib_1 = require("./random.lib");
// import * as chalkModule from 'chalk';
// const chalk: typeof chalkModule.Chalk = chalkModule.default;
function getUserInput(message, colon = true) {
    return __awaiter(this, void 0, void 0, function* () {
        message = message + (colon ? ':' : '') + ' ';
        return readline_sync_1.default.question(message);
    });
}
exports.getUserInput = getUserInput;
function tablifyString(str, num = 1) {
    return str.split('\n').map(line => `${'\t'.repeat(num)}${line}`).reduce((a, b) => `${a}\n${b}`, '');
}
exports.tablifyString = tablifyString;
function newline(n = 1) {
    underscore_1.default.times(n, () => console.log());
}
exports.newline = newline;
function drawLine() {
    const line = '-'.repeat(process.stdout.columns);
    // const line = '─'.repeat(process.stdout.columns);
    console.log(line);
}
exports.drawLine = drawLine;
function printWithoutNewLine(message) {
    process.stdout.write(message);
}
exports.printWithoutNewLine = printWithoutNewLine;
function getInputFromEditor(message = '', options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (message) {
            console.log(message);
        }
        console.log('Wait for the user input: ');
        const dir = 'C:\\Artur\\temp\\';
        const filename = (options.filename ? `${options.filename}-` : 'tmp-dashboard-') + (0, random_lib_1.getRandomString)();
        let fullFilename = `${dir}${filename}`;
        if (options.extension) {
            fullFilename += options.extension.startsWith('.') ? options.extension : `.${options.extension}`;
        }
        if (options.originalContent) {
            (0, fs_1.writeFileSync)(fullFilename, options.originalContent);
        }
        // execPowerShellCommand(`code ${fullFilename}`);
        (0, fs_lib_1.openFileAtLastPosition)(fullFilename);
        const res = yield waitForFirstFileChanges(fullFilename, options.originalContent);
        (0, fs_lib_1.deleteFile)(fullFilename);
        return res;
    });
}
exports.getInputFromEditor = getInputFromEditor;
function waitForFirstFileChanges(filename, originalContent) {
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        fs_1.default.watchFile(filename, {
            persistent: true,
            interval: 200,
        }, () => {
            try {
                res = fs_1.default.readFileSync(filename, 'utf8');
                if (res !== undefined && res !== null && (!originalContent || res !== originalContent)) {
                    fs_1.default.unwatchFile(filename);
                }
            }
            catch (e) {
                // console.log('ERROR in waitForFirstFileChanges')
            }
        });
        while (res === undefined || (originalContent && res === originalContent)) {
            yield sleep(200);
        }
        return res;
    });
}
exports.waitForFirstFileChanges = waitForFirstFileChanges;
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
