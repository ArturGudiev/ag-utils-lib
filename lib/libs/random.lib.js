"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = void 0;
function getRandomString(n = 5) {
    return Math.random().toString(36).substr(2, n);
}
exports.getRandomString = getRandomString;
