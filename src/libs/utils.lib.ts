export function exit() {
    process.exit(1);
}

export function checkArrayContainsDuplicates(arr: any[]){
    return new Set(arr).size !== arr.length;
}