let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bingsu.jpg') {
      myImage.setAttribute('src','images/bingsu2.jpg');
    } else {
      myImage.setAttribute('src','images/bingsu.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Bingsu is cool, ' + myName;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }
    