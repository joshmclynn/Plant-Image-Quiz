const fiftyFity = document.getElementById("fiftyfifty");
const audience = document.getElementById("audience");
const friend = document.getElementById("friend")
const image = document.getElementById("imageArea");
ctx = image.getContext('2d');


//images
var images = {
  "anenomePic" :"assets\img\anenome.jpg",
  "erigeronpic" :"assets\img\erigeron.jpg",
  "osmanthuspic" :"assets\img\osmanthus.jpg"
}

//Questions

new newQuestion("anenomePic",["Anenome","Rose","Tree","Sunflower"],"anenome");

function question(image,choices,answer){
  this.image = image;
  this.choice = choices;
  this.answer = answer;

}
  


