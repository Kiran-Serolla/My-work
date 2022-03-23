this program is to solve the following problem 

Problem Statement:

1. Create a JavaScript restaurantManager class with the following properties:
⮚ "restaurantList"
● Type: Array
● Usecase: This will contain a list of restaurant object, with the restaurant name,
address, and city
⮚ “printAllRestaurantNames"
● Type: function
● Arguments: none
● Usecase: This will print the name of all restaurant names in restaurantList on
console
⮚ "filterRestaurantByCity"
● Type: function
● Argument: "city" type: "string"
● Usecase: This will filter the restaurant on the basis of the city provided in
arguments"
2. Please find order details for Punjabi Tadka restaurant in Delhi as:
⮚ orderData = {
'Below 500': 20,
'500-1000': 29,
'1000-1500': 30,
'1500-2000': 44,
'Above 2000': 76
};
a. Calculate the total number of orders placed for the restaurant.
b. Calculate the number of order proportion options.
c. Calculate the percentage of each proportion in below format:
©Brain4ce Education Solutions Pvt. Ltd Page 1
Assignment 3: JavaScript
[{
id: 1,
order: "Below 500",
order percentage: "10.05",
restaurant: "Punjabi Tadka"
},
{
id: 2,
order: "500-1000",
order percentage: "14.57",
restaurant: "Punjabi Tadka"
},
{
id: 3,
order: "1000-1500",
order percentage: "15.08",
restaurant: "Punjabi Tadka"
},
{
id: 4,
order: "1500-2000",
order percentage: "22.11",
restaurant: "Punjabi Tadka"
},
{
id: 5,
order: "Above 2000",
order percentage: "38.19",
restaurant: "Punjabi Tadka"
}]