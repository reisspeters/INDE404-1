
// this is all the variables that i will need to make the code run effectively
var api = 'http://api.giphy.com/v1/gifs/trending?';
var apiKey = '&api_key=qBY3mPO8JxjgmOO9DPpm18G9qBEw5VgZ';
var url = api + apiKey ;
var imgtag;


//page setup including the canvas size 1280 by 720 that is stated in the brief
//also in the setup is the image position, this is where the data from the
//giphy api will be displayed.

function setup() {
  createCanvas(1280, 720);
  imgtag = createImg();
  imgtag.position(440,200);

//the button is also in setup with its position syle and mouse pressed event
//attatched to it.

  var button = select('#submit');
  button.style('font-size', '30px');
  button.position(width/2-100, 100);
  button.mousePressed(giphyLoaded);
}

//here a background is draw to allow for the page to be refreshed everytime the
//button is pressed.

function draw() {
  background(220);
}

//here the mouse pressed function is stated with the loadJSON data that links
//to the api.

function mousePressed() {
  var resp = loadJSON(url, giphyLoaded);
}

//this is where all the data from the api is loaded from, there is a variable
// that allows for a random number to be created.

function giphyLoaded(giphy) {
  console.log("in loaded", giphy);
  //Math.floor is needed so that the number that is created is a whole number
  //which is needed for the code to run properly.
  var randImgNum = Math.floor(random(giphy.data.length));
  //this variable is then placed into the second variable that links directly
  //to the api, allowing for a random gif to be generated
  var imgsrc = giphy.data[randImgNum].images.original.url;
	imgtag.attribute('src', imgsrc);
}
