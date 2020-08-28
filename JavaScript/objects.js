var dojo = {}; //empty object

dojo = {
    fruit: 'apple',  // property can store string
    price:  300,     // propertry can store number
    models: ['fiat', 'civic', 'suzuki', 'honda'], //property can store array
    locations: {           //property can store another object
        city: 'delhi',
        state: 'Newdelhi',
        country: 'india',
        zipcode: 78254
    }
}


// console.log(dojo.fruit);    //access object properties with dot notation
// console.log(dojo["city"]);  //access object property with bracket notation. Property can also be referred as key in quotes.
// console.log(dojo.price, dojo.fruit,);
// console.log(dojo.models);
// console.log(dojo.models, dojo.locations);
// dojo.snacks = ['biscuts', 'oranges', 'cereal', 'milk'];  //added new property (array) to dojo object
// dojo.price = 250;  //changing the values of property
// dojo.locations.city = 'Bombay'; //changing the values of property
// console.log(dojo);



var cars = [               //array of objects
    {
        id: 1,
        model: 'civic',
        color: 'blue',
        price: 350,
        time: 'minutes'
    },
    {
        id: 2,
        model: 'honda',
        color: 'red',
        price: 450,
        time: 'minutes'
    },
    {
        id: 3,
        model: 'mercedees',
        color: 'pink',
        price: 150,
        time: 'minutes'
    }
]

console.log(cars);

var purchase;

if(cars[0].model == 'civic' && cars[0].price < 400){
purchase = cars[0];
}
else {
    console.log('sorry it is not available');
}




var numPurchase = 0;

for (var car in cars) {
    //console.log(car);   //Note In Javascript,  value for car is 0 i.e. just a index for cars
    console.log(cars[car].model);

    if((cars[car].models == 'honda') || (cars[car].price < 400)) {
        numPurchase++;
    }
else {
    console.log('not this car');
  }

 }

 console.log(numPurchase);

