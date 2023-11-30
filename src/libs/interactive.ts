import inquirer from "inquirer";
import { getUserInput } from "./io.lib";
// import nfzf from 'node-fzf'

export async function selectObjectFromList(choices: string[], funcOptions: any = {}): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nfzf = require('node-fzf')
    if (choices.length === 1) {
        return {value: choices[0], index: 0};
    }
    const opts = {
        list: choices,
        mode: funcOptions.mode ? funcOptions.mode : 'fuzzy'
    }
    const result = await nfzf(opts)
    return result.selected;
}


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
