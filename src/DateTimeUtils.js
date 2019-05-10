export function isDateInFuture(date) {
    return date > Date.now();
}

export function getDateDiff(date1, date2) {
    const diff = Math.floor((date2 - date1) / 1000);
    const seconds = diff % 60;
    const minutes = Math.floor(diff / 60) % 60;
    const hours = Math.floor(diff / 3600);

    return diff > 0 ? `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}` : null;
}

export function formatDate(date) {
    const minutes = Math.floor(date / 60) % 60;
    const hours = Math.floor(date / 3600);

    return date > 0 ? `${hours}h ${('0' + minutes).slice(-2)}m` : 0;
}
