// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const allLikeBtns = document.getElementsByClassName('like')
  // event listening fn for all buttons
  for (const btn of allLikeBtns) {
    btn.addEventListener('click', e => {
      console.log(`${btn.innerText} was clicked`)
      let heartStatus = e.target.innerText;
      let heart = e.target


      if (heartStatus === EMPTY_HEART) {
        console.log('empty => full')
        mimicServerCall().then(() => {
          heart.className += ' activated-heart'
          heart.innerText = `${FULL_HEART}`
        })
          .catch(error => {
            const modal = document.getElementById('modal');
            modal.className = "";
            console.log(error)
            document.getElementById('modal-message').innerText = error;
            setTimeout(() => {
              modal.className = 'hidden'
            }, 5000)
          })
      }

      
      if (heartStatus === FULL_HEART) {
        console.log('full => empty')
        heart.className -= ' activated-heart';
        heart.innerText = `${EMPTY_HEART}`
      }
    })
  }
});


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
