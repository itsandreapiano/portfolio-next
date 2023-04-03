let today = new Date();
let year = today.getFullYear();
let day = today.getDate();
let month = today.getMonth() + 1;
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

String(day).length == 1 ? (day = String("0" + "" + day)) : null;
String(month).length == 1 ? (month = String("0" + "" + month)) : null;
String(hours).length == 1 ? (hours = String("0" + "" + hours)) : null;
String(minutes).length == 1 ? (minutes = String("0" + "" + minutes)) : null;
String(seconds).length == 1 ? (seconds = String("0" + "" + seconds)) : null;

let dateString = String(day + "-" + month + "-" + year);
let dateStringEn = String(year + "-" + month + "-" + day);
let dateCounter = String(
  year + "" + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds
);

export default {
  dateString: dateString,
  dateStringEn: dateStringEn,
  dateCounter: dateCounter,
};
