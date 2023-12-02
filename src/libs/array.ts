import _ from "underscore";

export function removeFirstArgument(args: any[]) {
    const newArray = [...args];
    newArray.splice(0, 1);
    return newArray;
}

export function positionIsOutOfArray(arr: any[], position: number): boolean {
    return position < 0 || position >= arr.length;
}

export function equalArraysContent(arr1: any[], arr2: any[]) {
    return _.isEqual(arr1.sort(), arr2.sort());
}

export function addElementToObjectArrayOrCreateOne(obj: any, key: string, el: any) {
    if ( obj[key] === undefined ) {
        obj[key] = [el];
    } else {
        obj[key].push(el)
    }
}