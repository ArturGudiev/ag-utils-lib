"use strict";
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
exports.appendValue = void 0;
const io_lib_1 = require("./io.lib");
function appendValue(originalValue, options = { newLine: true }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const userString = (_a = options.userValue) !== null && _a !== void 0 ? _a : yield (0, io_lib_1.getUserInput)('Enter value to append');
        const newLinePart = options.newLine ? '\n' : ' ';
        return originalValue + newLinePart + userString;
    });
}
exports.appendValue = appendValue;
