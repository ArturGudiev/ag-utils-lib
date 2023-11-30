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
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectObjectFromList = void 0;
// import nfzf from 'node-fzf'
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
// export async function selectFromList(choices: string[], message = '', funcOptions: any = {}): Promise<string> {
//     if (message) {
//         console.log(message);
//     }
//     const res = await selectObjectFromList(choices, funcOptions);
//     return res ? res.value : null;
// }
// export async function selectIndexFromList(choices: string[]): Promise<number> {
//     const res = await selectObjectFromList(choices);
//     return res ? res.index : null;
// }
// export async function confirmMessageInquirer(message: string, defaultValue = true): Promise<boolean> {
//     const answers = await inquirer.prompt([
//         {
//             name: 'confirmation',
//             type: 'confirm',
//             default: defaultValue,
//             message,
//         },
//     ]);
//     return answers.confirmation;
// }
// export async function confirmMessage(message: string, defaultValue = true): Promise<boolean> {
//     const YesNoPart = defaultValue ? '(Y/n)' : '(y/N)';
//     const answer= await getUserInput(message + ' ' + YesNoPart);
//     if (answer === '') {
//         return defaultValue;
//     }
//     if (['y', 'yes'].includes(answer.toLowerCase())) {
//         return true;
//     }
//     return false;
//     // return answers.confirmation;
// }
// export async function waitForUserInput(message = 'Press enter') {
//     await getUserInput(message);
// }
