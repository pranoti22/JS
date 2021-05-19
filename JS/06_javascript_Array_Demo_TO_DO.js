/**
 * Created by vivekkulkarni on 7/19/16.
 */



//TODO get 3 orders placed  most recently

var order1 = {id:1,orderDate:new Date('07-15-2016'),details:'laptops',qty:10,amount:100000};
var order2 = {id:2,orderDate:new Date('07-13-2016'), details:'PCs',qty:12,amount:20000};
var order3 = {id:3,orderDate:new Date('07-14-2016'), details:'Shorts', qty:5,amount:1500};
var order4 = {id:4,orderDate:new Date('07-17-2016'),details:'chairs',qty:100,amount:50000};

unsortedOrders=[order1,order2,order3,order4];
console.log("CUSTOm SORT By date **************");

//TODO print order with highest amount and lowest amount


//Hint : provide regular compare() function or ES6 arrow function to sort method of array.
