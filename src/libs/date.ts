import moment, {Moment} from 'moment/moment';

export function getDiffInDays(d1: Moment, d2: Moment = moment()): number {
    return Math.abs(d1.startOf('day').diff(d2.startOf('day'), 'days'));
}

export function getDiffInDaysCommon(s1: string, s2: string, format: string): number {
    const d1 = moment(s1, format).startOf('day');
    const d2 = moment(s2, format).startOf('day');
    return d1.diff(d2, 'days');
}



export function getCurrentDate(format: string) {
    return moment().format(format);
}