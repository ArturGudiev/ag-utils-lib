export declare function getUserInput(message: string, colon?: boolean): Promise<string>;
export declare function tablifyString(str: string, num?: number): string;
export declare function newline(n?: number): void;
export declare function drawLine(): void;
export declare function printWithoutNewLine(message: any): void;
export declare function getInputFromEditor(message?: string, options?: {
    extension?: string;
    originalContent?: string;
    filename?: string;
}): Promise<string>;
export declare function waitForFirstFileChanges(filename: string, originalContent?: string): Promise<string>;
export declare function sleep(ms: number): Promise<unknown>;
