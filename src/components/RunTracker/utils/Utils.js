import round from 'round';
import haversine from 'haversine';

export function calSpeed(distance, cur, prev) {
    return +((distance / (cur - prev)).toFixed(2));
}

export function calPace(speed) {
    if (speed === 0)
        return 0;
    return (1 / speed) / 60 * 1000;
}

export function calDistance(prevLatLng, newLatLng) {
    return round(haversine(prevLatLng, newLatLng) * 1000);
}

export function addZero(num) {
    if (num < 10) { return `0${num}`; }
    return `${num}`;
}

export function calBurnedCalories(weight, duration, speed) {
    let METS = 0;
    if (speed >= 4)
        METS = 12.8;
    else if (speed >= 3.6)
        METS = 11.8;
    else if (speed >= 3.1)
        METS = 11;
    else if (speed >= 2.7)
        METS = 9.8;
    else if (speed >= 2.2)
        METS = 8.3;
    else
        METS = 7.8;
    // weight(kg) - duration(hour)
    return +((weight * duration / 3600 * METS).toFixed(2));
}

export function subTwoTime(targetTime, duration) {
    const dur = duration.split(':');
    let secSpan = 60 - parseInt(dur[1], 10);
    let minSpan = targetTime - parseInt(dur[0], 10) - 1;
    if (secSpan === 60) {
        secSpan = 0;
        minSpan++;
    }
    return `${addZero(minSpan)}:${addZero(secSpan)}`;
}
