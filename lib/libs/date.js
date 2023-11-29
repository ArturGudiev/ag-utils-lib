"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = exports.getDiffInDaysCommon = exports.getDiffInDays = void 0;
const moment_1 = __importDefault(require("moment/moment"));
function getDiffInDays(d1, d2 = (0, moment_1.default)()) {
    return Math.abs(d1.startOf('day').diff(d2.startOf('day'), 'days'));
}
exports.getDiffInDays = getDiffInDays;
function getDiffInDaysCommon(s1, s2, format) {
    const d1 = (0, moment_1.default)(s1, format).startOf('day');
    const d2 = (0, moment_1.default)(s2, format).startOf('day');
    return d1.diff(d2, 'days');
}
exports.getDiffInDaysCommon = getDiffInDaysCommon;
function getCurrentDate(format) {
    return (0, moment_1.default)().format(format);
}
exports.getCurrentDate = getCurrentDate;
