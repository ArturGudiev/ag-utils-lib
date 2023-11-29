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
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareStringForDirectoryName = exports.isAcceptableDescriptionSymbol = exports.writeFileContent = exports.writeJSONFileContent = exports.getJSONFileContent = exports.deleteFile = exports.openFileAtLastPosition = void 0;
const child_process_1 = require("child_process");
const fs_1 = __importStar(require("fs"));
const regex_1 = require("./regex");
function openFileAtLastPosition(filename) {
    // exec(`code -g ${filename}:$($(get-content ${filename}).Length):100`, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    (0, child_process_1.exec)(`subl ${filename}:$($(get-content ${filename}).Length):100`, { 'shell': 'powershell.exe' });
}
exports.openFileAtLastPosition = openFileAtLastPosition;
function deleteFile(path) {
    if (fs_1.default.existsSync(path)) {
        try {
            fs_1.default.unlinkSync(path);
            // file removed
        }
        catch (err) {
            // console.error(err)
        }
    }
}
exports.deleteFile = deleteFile;
function getJSONFileContent(path) {
    const content = (0, fs_1.readFileSync)(path);
    return JSON.parse(content.toString());
}
exports.getJSONFileContent = getJSONFileContent;
function writeJSONFileContent(path, content) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(content, null, '\t'));
}
exports.writeJSONFileContent = writeJSONFileContent;
function writeFileContent(path, content) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(content, null, '\t'));
}
exports.writeFileContent = writeFileContent;
function isAcceptableDescriptionSymbol(symbol) {
    if (symbol.length !== 1) {
        throw new Error('Should be one symbol');
    }
    return /^[-+_]+$/.test(symbol);
}
exports.isAcceptableDescriptionSymbol = isAcceptableDescriptionSymbol;
function prepareStringForDirectoryName(originalString) {
    originalString = originalString.replace(/ /g, '_');
    return [...originalString]
        .filter(symbol => (0, regex_1.isDigit)(symbol) || (0, regex_1.isLetter)(symbol) || isAcceptableDescriptionSymbol(symbol))
        .join('');
}
exports.prepareStringForDirectoryName = prepareStringForDirectoryName;
