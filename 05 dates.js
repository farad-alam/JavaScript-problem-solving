// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

function fixedDay(date) {
  switch (date) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function getDayName(dateString) {
  let dayName;
  // Write your code here
  let newdate = new Date(dateString);
  dayName = fixedDay(newdate.getDay())
  return dayName;
}

getDayName("10/11/2009");
