// Project Instruction 

// Add an event listener to handle the submission of the transaction form
// Prevent the default form submission behavior to manage it using JavaScript

// Create a formData object to collect the transaction type, amount, and description from input fields
// Ensure the amount is parsed as a floating-point number

// Use the Fetch API to send a POST request to '/api/transaction'
// Set the headers to indicate JSON content and stringify the formData for the request body

// Process the response from the server
// If the response is successful:
// 1. Update the displayed balance by accessing the balance property from the response data
// 2. Create a new table row for the recent transaction and populate it with the transaction details (date, type, amount, description)
// 3. Insert the new row at the beginning of the recent transactions table
// 4. Reset the form inputs

// If the response is not successful, display an alert with the error message

// Catch and handle any errors during the fetch request and log them to the console
