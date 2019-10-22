// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const likeBtns = document.getElementsByClassName('like');
  for (const btn of likeBtns) {
    console.log(btn);
    btn.addEventListener('click', (e) => {
      console.log(`${btn.innerText} was clicked!`);
      let heart = e.target.getElementsByTagName('span')[0];

      if (heart.innerText === EMPTY_HEART) {
        console.log('empty heart');
        mimicServerCall()
            .then(() => {
              heart.className += ' activated-heart';
              heart.innerText = `${FULL_HEART}`;
            })
            .catch((error) => {
              const modal = document.getElementById('modal');
              modal.className = '';
              console.log(error);
              document.getElementById('modal-message').innerText = error;
              setTimeout(() => {
                modal.className = 'hidden'
              }, 5000)
            })
      } else if (heart.innerText === FULL_HEART) {
        console.log('full heart');
        heart.className -= ' activated-heart';
        heart.innerText = `${EMPTY_HEART}`;
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
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
