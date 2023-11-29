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
exports.waitForUserInput = exports.confirmMessage = exports.confirmMessageInquirer = exports.selectIndexFromList = exports.selectFromList = exports.selectObjectFromList = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const io_lib_1 = require("./io.lib");
function selectObjectFromList(choices, funcOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nfzf = require('node-fzf');
        if (choices.length === 1) {
            return { value: choices[0], index: 0 };
        }
        const opts = {
            list: choices,
            mode: funcOptions.mode ? funcOptions.mode : 'fuzzy'
        };
        const result = yield nfzf(opts);
        return result.selected;
    });
}
exports.selectObjectFromList = selectObjectFromList;
function selectFromList(choices, message = '', funcOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (message) {
            console.log(message);
        }
        const res = yield selectObjectFromList(choices, funcOptions);
        return res ? res.value : null;
    });
}
exports.selectFromList = selectFromList;
function selectIndexFromList(choices) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield selectObjectFromList(choices);
        return res ? res.index : null;
    });
}
exports.selectIndexFromList = selectIndexFromList;
function confirmMessageInquirer(message, defaultValue = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
            {
                name: 'confirmation',
                type: 'confirm',
                default: defaultValue,
                message,
            },
        ]);
        return answers.confirmation;
    });
}
exports.confirmMessageInquirer = confirmMessageInquirer;
function confirmMessage(message, defaultValue = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const YesNoPart = defaultValue ? '(Y/n)' : '(y/N)';
        const answer = yield (0, io_lib_1.getUserInput)(message + ' ' + YesNoPart);
        if (answer === '') {
            return defaultValue;
        }
        if (['y', 'yes'].includes(answer.toLowerCase())) {
            return true;
        }
        return false;
        // return answers.confirmation;
    });
}
exports.confirmMessage = confirmMessage;
function waitForUserInput(message = 'Press enter') {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, io_lib_1.getUserInput)(message);
    });
}
exports.waitForUserInput = waitForUserInput;
