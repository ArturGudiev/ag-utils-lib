export function getRandomString(n = 5) {
    return Math.random().toString(36).substr(2, n);
}
