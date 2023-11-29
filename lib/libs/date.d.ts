/// <reference types="moment" />
import { Moment } from 'moment/moment';
export declare function getDiffInDays(d1: Moment, d2?: Moment): number;
export declare function getDiffInDaysCommon(s1: string, s2: string, format: string): number;
export declare function getCurrentDate(format: string): string;
