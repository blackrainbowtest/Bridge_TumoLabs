// unix time now
export function getCurrentUnixTime() {
    return Math.floor(Date.now() / 1000);
}

export function getCurrentFullUnixTime() {
    return Math.floor(Date.now());
}