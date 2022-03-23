// Resturant Manager class
class resturantManager {
    resturantList

 constructor(rl){
        this.resturantList = rl
    }
    // function to print all resturant names in the list
printAllResturantNames(){
    const restuantNames = this.resturantList.map(i => i.name)
    console.log(restuantNames);
}

// function to print the resturants in given sity
filterResturantByCity(city){
    const resturantsInCity = this.resturantList.filter(i=>i.city == city)
    console.log(resturantsInCity)
}
}
// resturant list object
const rl = [
    {name : 'Taj Krishna', address: 'Banjara Hills', city: 'Hyderabad'},
    {name : 'Paradise', address: 'Paradise', city: 'Secunderabad'},
    {name : 'Barbeque Nation', address: 'Patny Center', city: 'Secunderabad'},
    {name : 'Biryani Patnam', address: 'Kukatpally', city: 'Hyderabad'},
    {name : 'Burger King', address: 'Habsiguda', city: 'Secunderabad'},
    {name : 'Geeta Bhavan', address: 'Geeta Nagar', city: 'Karimnagar'},
]

// creating instance of class
const resturantObject =  new resturantManager(rl)
resturantObject.printAllResturantNames()
resturantObject.filterResturantByCity('Secunderabad')

// exercise 2 - 

// order data of 'Punjab Tadka Resturant' 
const orderData = {
    'Below 500': 20,
    '500-1000' : 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}
    

// displaying the total no. of orders  
let totalNoOfOrders = 0
for (const i in orderData){
    totalNoOfOrders+=orderData[i]
}
console.log(`Total no. of orders is: ${totalNoOfOrders}`);

// displaying the no. of order proportion options
let size = Object.keys(orderData).length;
console.log(`The no. of order proportion options are: ${size}`);

// Exercise 3 -  Calculating percentage of each proportion

const orderPercentage = Object.keys(orderData).map((i,index)=>{
    return {
        id : index+1,
        order :i,
        "percentage of orders ": (orderData[i]*100/totalNoOfOrders).toFixed(2)
    }
})
console.log(orderPercentage)