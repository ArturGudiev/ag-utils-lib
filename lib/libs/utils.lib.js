"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArrayContainsDuplicates = exports.exit = void 0;
function exit() {
    process.exit(1);
}
exports.exit = exit;
function checkArrayContainsDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
exports.checkArrayContainsDuplicates = checkArrayContainsDuplicates;
