"use strict";
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
exports.equalLowerStrings = exports.addTabsToLines = exports.isNumeric = exports.editString = exports.clip = exports.checkArrayContainsDuplicates = exports.exit = void 0;
const clipboardy_1 = __importDefault(require("clipboardy"));
const io_lib_1 = require("./io.lib");
function exit() {
    process.exit(1);
}
exports.exit = exit;
function checkArrayContainsDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
exports.checkArrayContainsDuplicates = checkArrayContainsDuplicates;
function clip(value) {
    clipboardy_1.default.writeSync(value);
}
exports.clip = clip;
function editString(str, extension = '', options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const opts = { originalContent: str };
        if (extension) {
            opts.extension = extension;
        }
        return yield (0, io_lib_1.getInputFromEditor)(options.message ? options.message : '', opts);
    });
}
exports.editString = editString;
function isNumeric(str) {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
exports.isNumeric = isNumeric;
function addTabsToLines(text, tabsNumber = 1) {
    return text.split('\n').map(s => `${'\t'.repeat(tabsNumber)} ${s}`).join('\n');
}
exports.addTabsToLines = addTabsToLines;
function equalLowerStrings(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}
exports.equalLowerStrings = equalLowerStrings;
