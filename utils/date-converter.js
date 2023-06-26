// from 11-01-2022 to January 11,20222

export const getDate = (originalDate) => {
  let date = new Date(originalDate);

  // Define an array of month names
  let monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  // Get the year, month, and day from the Date object
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  // Create a new date string in the desired format
  let newDate = `${monthNames[month]} ${day}, ${year}`;

  // Output the new date string
  console.log(newDate); // Output: "JANUARY 20, 2022"
  return newDate;
};
