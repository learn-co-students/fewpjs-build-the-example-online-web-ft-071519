// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Adding event listener to all "hearts".
const likesArray = document.getElementsByClassName("like-glyph")
for (const heart of likesArray) {
    // When a click happens on a heart, launch mimicServerCall
    heart.addEventListener("click", mimicServerCall);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    // setTimeout determines the delay of the action in code block. 
    setTimeout(function() {
        // isRandomFailure is a number, < .2 sets it as a boolean. Giving it a 80% chance of resolve.
        let isRandomFailure = Math.random() < .2
        // ifRandomFailure is falsey, reject, 20% chance.
        if (isRandomFailure) {
            reject("Random server error. Try again.");
        // else, it's truthy, resolve, 80% chance.
        } else {
            resolve("Pretend remote server notified of action!");
        }
    }, 300);
  }).then(function(resolve){
        console.log(resolve);
        window.onclick = function(e) {
            if (e.target.innerText === EMPTY_HEART) {
                e.target.innerText = FULL_HEART
            } else {
                e.target.innerText = EMPTY_HEART
            }
        }
    }).catch(function(reject) {
        console.log(reject)
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden")
        setTimeout(function() {
            modal.classList.add("hidden")
        }, 3000)}
    );
}
