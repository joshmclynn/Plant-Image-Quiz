
var canvas = document.getElementById("gameScreen");
var heightRatio=1;
canvas.height = canvas.width * heightRatio;


var context = canvas.getContext("2d");
//Objects
var mower = document.getElementById("mower2d");
var can = document.getElementById("fuelCan");
//Initial Positions
var mowx = 0.0;
var mowy = 0.0;



//variables
var fuelLevel = 10;//initial
var maxFuel = 30; //max



