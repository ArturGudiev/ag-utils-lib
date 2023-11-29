export declare function selectObjectFromList(choices: string[], funcOptions?: any): Promise<any>;
export declare function selectFromList(choices: string[], message?: string, funcOptions?: any): Promise<string>;
export declare function selectIndexFromList(choices: string[]): Promise<number>;
export declare function confirmMessageInquirer(message: string, defaultValue?: boolean): Promise<boolean>;
export declare function confirmMessage(message: string, defaultValue?: boolean): Promise<boolean>;
export declare function waitForUserInput(message?: string): Promise<void>;
