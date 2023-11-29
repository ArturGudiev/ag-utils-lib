import { getUserInput } from "./io.lib";

export async function appendValue(originalValue: string, options: {
    userValue?: string;
    newLine: boolean
} = {newLine: true}): Promise<string> {
    const userString = options.userValue ?? await getUserInput('Enter value to append');
    const newLinePart = options.newLine ? '\n' : ' ';
    return originalValue + newLinePart + userString;
}