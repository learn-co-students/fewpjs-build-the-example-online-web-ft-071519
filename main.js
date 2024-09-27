// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let iconStates = {
  "♡": "♥",
  "♥": "♡"
}
let colorStates = {
  "red" : "",
  "": "red"
}

let articleHearts = document.querySelectorAll(".like");



function likeCallback(entry) {
  let heart = entry.target
  mimicServerCall("fakeUrl")
  .then(function(serverMessage){
    heart.innerText = iconStates[heart.innerText]
    heart.style.color = colorStates[heart.style.color]
  })
  .catch(function(error){
    document.getElementById("modal".classname= "")
  })
}

for (let icon of articleHearts) {
  icon.addEventListener("click", likeCallback)
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
