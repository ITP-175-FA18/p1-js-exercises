// Here, we have an multidimensional array of customers
// with the following fields 
// First Name, Last Name, Customer ID, Balance

let customersArr = [
    ['Ichigo',  'Kurosaki', 23567, 153677345],
    ['Gin',     'Ichimaru', 1234,  1235412356],
    ['Shunsui', 'Kyoraku',  1531,  65432467],
    ['Kisuke',  'Urahara',  543,   63463723562]
];

///////////////////// Step 01 /////////////////////
console.log('Step 1 create a displayBalance function');
// Create a function named displayBalance that returns balance as dollars and cents
// when you pass the Customer ID as an argument






// expected output $12354123.56
console.log(displayBalance(1234)); 

///////////////////// Step 02 /////////////////////
console.log('Step 2 create a getCustomer function');
// Create a function named getCustomer that returns a customer
// by passing customer ID as an argument and outputs their
// first name, last name, customer ID, and balance 








//expected output Kisuke Urahara, customer 543 has a balance of $634637235.62
console.log(getCustomer(543)); 

///////////////////// Step 03 /////////////////////
console.log('Step 3 create a largestBalance function');
// Create a function named largestBalance that determines who has the largest balance
// and returns the customer ID








// expected output 543
console.log(largestBalance(customersArr));

///////////////////// Step 04 /////////////////////
console.log('Step 4 create a getAllCustomers function');
// Create a function named getAllCustomers that returns all customers
// in this format. 
// Ichigo Kurosaki, customer 23567 has a balance of $1536773.45
// Gin Ichimaru, customer 1234 has a balance of $12354123.56
// Shunsui Kyoraku, customer 1531 has a balance of $654324.67
// Kisuke Urahara, customer 543 has a balance of $634637235.62

// Hint: You can take advantage of you getCustomer function.














console.log(getAllCustomers(customersArr));

///////////////////// Step 05 /////////////////////
console.log('Step 5 add a new element to customerArr');
// Add a title element to customer in customerArr
// with the following data.
// Ichigo Kurosaki, title is empty (blank)
// Gin Ichimaru title is Captain
// Shunsui Kyoraku title is Captain
// Kisuke Urahara title is Shopkeeper















///////////////////// Step 06 /////////////////////
console.log('Step 6 add new customers to customerArr');
// Add two new customers to customerArr with the following data
//     Captian Retsu Unohana 5234 4323456234
//     Princess Yoruichi Shihoin 24356 543745834573494
// and update getAllCustomers() to output all 6 customers including
// their titles.






//expected output
// Ichigo Kurosaki, customer 23567 has a balance of $1536773.45
// Captain Gin Ichimaru, customer 1234 has a balance of $12354123.56
// Captian Shunsui Kyoraku, customer 1531 has a balance of $654324.67
// Shopkeeper Kisuke Urahara, customer 543 has a balance of $634637235.62
// Captian Retsu Unohana, customer 5234 has a balance of $43234562.34
// Princess Yoruichi Shihoin, customer 24356 has a balance of $5437458345734.94
console.log(getAllCustomers(customersArr));













///////////////////// Step 07 /////////////////////
console.log('Step 7 update customer balances');
// Update the balance to of each customer to amounts of your chosing












///////////////////// Step 08 /////////////////////
console.log('Step 8 find out who has the largest balance currently');
// Use largestBalance to output who has the largest balance now
















///////////////////// Step 09 /////////////////////
console.log('Step 9 reset the customerIDs');
// Write a function that sorts the customers alphabetically
// by last name and gives each customer a new customerID
// starting at 100.
// Gin Ichimaru will now have customerID 100 and Ichigo Kurosaki 101











