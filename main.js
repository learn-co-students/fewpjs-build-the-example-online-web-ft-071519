// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").classList.add("hidden")


document.body.addEventListener("click", function (e) {
  e.preventDefault()
  if (e.target && e.target.nodeName == "SPAN") {


    if (e.target.textContent === FULL_HEART) {
      e.target.textContent = EMPTY_HEART
      e.target.style.color = ""
    } else {
      e.target.textContent = FULL_HEART
      e.target.style.color = "red"
    }

  }

});




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
