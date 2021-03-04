const getMillisecondsFromSeconds = (seconds) => {
    const millisecondsInSecond = 1000;
    let output = seconds * millisecondsInSecond;
    // console.log(output);
    return output;
}

const getSecondsFromMinutes = (min) => {
    const minutesInSeconds = 60;
    let output = min * minutesInSeconds;
    // console.log(output);
    return output;
}

const getMinutesFromHours = (hours) => {
    const hoursInMinutes = 60;
    let output = hours * hoursInMinutes;
    // console.log(output);
    return output;
}

const getMillisecondsFromHours = (hours) => {
    // convert hours to minutes
    let minOutput = getMinutesFromHours(hours);
    // convert minutes to seconds
    let secOutput = getSecondsFromMinutes(minOutput);
    // convert seconds to milliseconds
    let mSecOutput = getMillisecondsFromSeconds(secOutput);
    // console.log(mSecOutput);
    return mSecOutput;
}

const getMillisecondsFromMinutes = (minutes) => {
    // convert minutes to seconds
    let secOutput = getSecondsFromMinutes(minutes);
    // convert seconds to milliseconds
    let mSecOutput = getMillisecondsFromSeconds(secOutput);
    // console.log(mSecOutput);
    return mSecOutput;
}

const startHours = 2;
const startMinutes = 180;

let msecs = getMillisecondsFromSeconds(5);
console.log(msecs);

let secs = getSecondsFromMinutes(5);
console.log(secs);

let mins = getMinutesFromHours(5);
console.log(mins);

let mSeconds1 = getMillisecondsFromHours(startHours);
console.log(mSeconds1);

console.log(startHours * 60 * 60 * 1000);

let mSeconds2 = getMillisecondsFromMinutes(startMinutes);
console.log(mSeconds2);

console.log(startMinutes * 60 * 1000);

let now = new Date();
console.log(now);


// https://stackoverflow.com/questions/42131900/add-5-minutes-to-current-time-javascript/42132083
const AddMinutesToDateTime = (theTime, minutes) => {
    let mSecs = getMillisecondsFromMinutes(minutes);
    return new Date(theTime.getTime() + mSecs);
}

let reminderTime = AddMinutesToDateTime(now, 15);
console.log(reminderTime);

let duration = reminderTime - now;
console.log(duration);