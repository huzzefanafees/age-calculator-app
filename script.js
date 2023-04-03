const DayError = document.querySelector(".day-error");
const MonthError = document.querySelector(".month-error");
const YearError = document.querySelector(".year-error");
const YearResult = document.querySelector(".years-result");
const MonthResult = document.querySelector(".months-result");
const DayResult = document.querySelector(".days-result");
const SubmitBtn = document.querySelector(".btn");
const InputDay = document.getElementById("day");
const InputMonth = document.getElementById("month");
const InputYear = document.getElementById("year");
const InputRequiredError = "This field is required";
const InputDayError = "Must be a valid day";
const InputMonthError = "Must be a valid month";
const InputYearError = "Must be in the past";

// Cheking the day error
function CheckDayInput() {
  let value = InputDay.value;
  if (value == "") {
    DayError.innerHTML = InputRequiredError;
    return false;
  } else if (value < 1 || value > 31) {
    DayError.innerHTML = InputDayError;
    return false;
  } else {
    DayError.innerHTML = "";
    return true;
  }
}
// Cheking the month error
function CheckMonthInput() {
  let value = InputMonth.value;
  if (value == "") {
    MonthError.innerHTML = InputRequiredError;
    return false;
  } else if (value < 1 || value > 12) {
    MonthError.innerHTML = InputMonthError;
    return false;
  } else {
    MonthError.innerHTML = "";
    return true;
  }
}
// Cheking the year error
function CheckYearInput() {
  let value = InputYear.value;
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  if (value == "") {
    YearError.innerHTML = InputRequiredError;
    return false;
  } else if (value > currentYear) {
    YearError.innerHTML = InputYearError;
    return false;
  } else {
    YearError.innerHTML = "";
    return true;
  }
}
// Calculating the birthday
function calculateAge(birthday) {
  var birthdate = new Date(birthday);
  var today = new Date();

  var years = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  var days = today.getDate() - birthdate.getDate();
  // If the birthdate month and day are after the current month and day,
  // subtract one year from the age

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

  YearResult.innerHTML = years;
  MonthResult.innerHTML = months;
  DayResult.innerHTML = days;
}
//botton eventlistner
debugger;
SubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let day = CheckDayInput();
  let month = CheckMonthInput();
  let year = CheckYearInput();
  if (!day || !month || !year) return;
  let birthday = `${InputMonth.value}/${InputDay.value}/${InputYear.value}`;
  calculateAge(birthday);
});
