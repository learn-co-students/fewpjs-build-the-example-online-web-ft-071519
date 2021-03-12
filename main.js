// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like-glyph');
const errorModal = document.getElementById('modal');
const errorMessageP = document.getElementById('modal-message');

function likeFunction(event) {
  let heart = event.target;
  mimicServerCall("bogusUrl")
    .then(function(mimicServerResult){
       heart.innerText = FULL_HEART;
       heart.style.color = "red";
    })
    .catch(function(error) {
      errorModal.className = "";
      setTimeout(() => 
        errorModal.className = 'hidden', 5000)
    });
}

for (let heart of likeButtons) {
  heart.addEventListener("click", likeFunction);
}






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
