"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalArraysContent = exports.positionIsOutOfArray = exports.removeFirstArgument = void 0;
const underscore_1 = __importDefault(require("underscore"));
function removeFirstArgument(args) {
    const newArray = [...args];
    newArray.splice(0, 1);
    return newArray;
}
exports.removeFirstArgument = removeFirstArgument;
function positionIsOutOfArray(arr, position) {
    return position < 0 || position >= arr.length;
}
exports.positionIsOutOfArray = positionIsOutOfArray;
function equalArraysContent(arr1, arr2) {
    return underscore_1.default.isEqual(arr1.sort(), arr2.sort());
}
exports.equalArraysContent = equalArraysContent;
