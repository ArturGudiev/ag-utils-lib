"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.main = exports.multiply = void 0;
const io_lib_1 = require("./libs/io.lib");
__exportStar(require("./libs/array"), exports);
__exportStar(require("./libs/cli.lib"), exports);
__exportStar(require("./libs/date"), exports);
__exportStar(require("./libs/fs.lib"), exports);
__exportStar(require("./libs/interactive"), exports);
__exportStar(require("./libs/io.lib"), exports);
__exportStar(require("./libs/powershell"), exports);
__exportStar(require("./libs/random.lib"), exports);
__exportStar(require("./libs/regex"), exports);
__exportStar(require("./libs/string"), exports);
__exportStar(require("./libs/utils.lib"), exports);
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = yield (0, io_lib_1.getUserInput)('Hello there');
        console.log(input);
    });
}
exports.main = main;
main().then();
