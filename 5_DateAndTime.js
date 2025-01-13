// Date and Time in JavaScript

// Topic 1: Creating and Displaying Date Objects
console.log("Topic-1");

// Create a new Date object representing the current date and time
let myDate = new Date();

// Display the date in a readable format
console.log(myDate.toDateString()); // e.g., "Mon Sep 29 2024"
console.log(myDate.toString());      // e.g., "Mon Sep 29 2024 14:56:29 GMT+0530 (India Standard Time)"
console.log(myDate.toLocaleString()); // Localized date and time string based on user locale
console.log(typeof myDate); // Output: "object" since Date is an object type

console.log(); // New line for better readability

// Topic 2: Creating Dates from Strings or Specific Values
console.log("Topic-2");

// Different formats to create a Date object
// Creates a Date object for January 23, 2023
let myCreatedDate1 = new Date(2023, 0, 23); // Note: Month is 0-indexed
console.log(myCreatedDate1.toDateString()); // Output: "Mon Jan 23 2023"

// Creates a Date object with a specific time (5:03 AM)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // Output: "1/23/2023, 5:03:00 AM"

// Creates a Date object from a string
let myCreatedDate3 = new Date("01-14-2023"); 
console.log(myCreatedDate3.toLocaleString()); // Output: "1/14/2023, 12:00:00 AM"

// Get the timestamp (milliseconds since January 1, 1970)
console.log(myCreatedDate3.getTime()); // Output: Milliseconds since the epoch

console.log(); // New line for better readability

// Topic 3: Getting Current Timestamp
console.log("Topic-3");

// Get the current timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds

// Convert timestamp to a readable date
console.log(new Date(myTimeStamp).toLocaleString()); // e.g., "9/29/2024, 2:56:29 PM"

console.log(); // New line for better readability

// Topic 4: Getting Components of a Date
console.log("Topic-4");

// Create a new Date object for the current date and time
let newDate = new Date();
console.log(newDate); // Output: Current Date object

// Get the day of the month (1-31)
console.log(newDate.getDate()); // Output: Current day of the month

// Get the month (0-11) and add 1 for human-readable format
console.log(newDate.getMonth() + 1); // Output: Current month (1-12)

// Get the full year
console.log(newDate.getFullYear()); // Output: Current year

// Customize the date format to show the weekday
console.log(newDate.toLocaleString("default", {
  weekday: "long", // Outputs the full name of the weekday, e.g., "Monday"
}));

// Additional Notes
/*
1. **Date Object**: The Date object in JavaScript represents a specific point in time, allowing you to manipulate and display dates and times easily.
2. **Creating Dates**: Remember that in JavaScript, months are zero-indexed (January is 0, December is 11). Always account for this when creating dates.
3. **Formatting Dates**: Use `toLocaleString()` for user-friendly date formatting based on locale preferences. It handles formats like "MM/DD/YYYY" (US) or "DD/MM/YYYY" (others).
4. **Timestamp Usage**: Use `Date.now()` to get the current timestamp in milliseconds. Useful for date comparisons and performance measurements.
5. **Component Extraction**: Methods like `getDate()`, `getMonth()`, and `getFullYear()` help extract specific components of a date.
6. **Custom Formats**: `toLocaleString()` allows customization for displaying dates with options like `weekday`, `year`, `month`, and `day`.
*/
