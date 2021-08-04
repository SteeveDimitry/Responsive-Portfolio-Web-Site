var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000


//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen(PORT);
console.log('Listening on port '+PORT);

// Scroll top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 80 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 80) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)