const { rest } = require('underscore');
const underscore = require('underscore')
const ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

// grouping the resturants by name - getting all resturant names

const resNames = ratingData.map(i =>i.restaurant);

// getting the list of resturant names without repetition
const uResNames = underscore.uniq(resNames)
console.log(uResNames)

const resturantRatings =[];
uResNames.forEach(rest=>{
  const restRatings = ratingData.filter(i=>i.restaurant === rest)
                                .map(i=>i.rating)
 const noOfOccurances = restRatings.length
 const sum = restRatings.reduce((a,b)=>a+b)
 const averageRating = sum/noOfOccurances

 resturantRatings.push({
   resturant : rest,
   averageRating : averageRating
 })
})


console.log(resturantRatings)