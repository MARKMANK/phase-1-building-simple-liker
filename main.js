// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Changes heart glyph to heart var
const newGlyph = document.querySelectorAll(".like-glyph");
newGlyph.forEach(element => {
  element.innerHTML = EMPTY_HEART;
});


//Hides Error message on refresh
let hideMe = true;
document.getElementById('modal').hidden = hideMe;


//Listens for a click
const imListening = document.getElementsByClassName("like");
for(let i=0; i<imListening.length; i++){
  imListening[i].addEventListener('click',function(){
    const newGlyph = imListening.item(i).querySelector(".like-glyph");
    mimicServerCall()
    .then(function(response){
      console.log(response)
      if(newGlyph.innerHTML == EMPTY_HEART){
        newGlyph.innerHTML = FULL_HEART;
        alert("You done got liked son!")
    }
  }).catch((err) => {
    hideMe = false;
        document.getElementById('modal').hidden = hideMe;
        newGlyph.innerHTML = EMPTY_HEART
  })
  }, false);
  }





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
