// translate numbers to words, up to 19 is irregular, spell the all out
// over 20, just give tens, can construct up to 59
const numWords = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
};

function numberString(n) {
  if (n < 20) {
    // < 20 is irregular, just do lookup
    return numWords[n];
  } else {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    if (ones) {
      return numWords[tens * 10] + " " + numWords[ones];
    } else {
      return numWords[tens * 10];
    }
  }
}

// for minutes, need to include 'oh', like in 4:01am, not for hours
function ohNumberString(n) {
  let s = numberString(n);
  if (n < 10) {
    s = "oh " + s;
  }
  return s;
}

function hourString(h) {
  if (h == 0) return numberString(12);
  else if (h < 13) return numberString(h);
  else return numberString(h - 12);
}

function minuteString(m) {
  return ohNumberString(m);
}

function amPmString(h) {
  if (h < 12) return "am";
  else return "pm";
}

// convert time in HH:MM format to an English string, including am, pm, noon, midnight, etc.
function timeWord(s) {
  // check for midnight & noon as they're irregular, ow use pattern as spelled out below
  if (s == "00:00") {
    return "midnight";
  } else if (s == "12:00") {
    return "noon";
  } else {
    // dissect into hour & minute components & coerce to int
    const hour = +s.slice(0, 2);
    const minute = +s.slice(3, 5);
    console.log("h: ", hour, "m: ", minute);
    if (minute == 0) {
      return hourString(hour) + " o'clock " + amPmString(hour);
    } else {
      return (
        hourString(hour) + " " + minuteString(minute) + " " + amPmString(hour)
      );
    }
  }
}

module.exports = timeWord;
