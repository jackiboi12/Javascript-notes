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
// let myCreatedDate = new Date(2023, 0, 23); // 0 -> January
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Specific date and time
let myCreatedDate = new Date("01-14-2023"); // Creates a Date object from a string
// Output: Date object for January 14, 2023
console.log(myCreatedDate);

// Display the date in a localized string format
console.log(myCreatedDate.toLocaleString()); // e.g., "1/14/2023, 12:00:00 AM"

// Get the timestamp (milliseconds since January 1, 1970)
console.log(myCreatedDate.getTime()); // Output: Milliseconds since the epoch
console.log(); // New line for better readability

// Topic 3: Getting Current Timestamp
console.log("Topic-3");

// Get the current timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds
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

// Customize the date format to show the weekday
newDate.toLocaleString("default", {
  weekday: "long", // Outputs the full name of the weekday, e.g., "Monday"
});


// **Important Points**:
// 1. **Date Object**: The Date object in JavaScript represents a specific point in time, allowing you to manipulate and display dates and times easily.
// 2. **Creating Dates**: Remember that in JavaScript, months are zero-indexed (January is 0, December is 11). So, always account for this when creating dates.
// 3. **Formatting Dates**: The `toLocaleString()` method is great for displaying dates in a user-friendly format based on the user's locale. It automatically adjusts to regional preferences (e.g., "MM/DD/YYYY" in the US or "DD/MM/YYYY" in many other countries).
// 4. **Getting Time**: The `getTime()` method returns the time value in milliseconds since the Unix Epoch (January 1, 1970). This is useful for performing date comparisons or calculations.
// 5. **Customizing Formats**: You can customize how dates are displayed by using options with `toLocaleString()`. For example, you can display the full name of the weekday or the time in 12-hour format.
