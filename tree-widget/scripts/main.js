var myHeading  = document.querySelector('h1');
myHeading.textContent = "Modified Header Text";

myHeading.onclick = function() {
    console.log("h1 clicked");
    var img = document.querySelector('img');
    var imgSrc = img.getAttribute('src');
    if (imgSrc === 'images/firefox-bandw.png') {
        img.setAttribute('src','images/firefox.png');
    } else {
        img.setAttribute('src','images/firefox-bandw.png');
    }
};

function setUserName() {
    var myName = prompt('Enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome ' + myName;
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName;
}