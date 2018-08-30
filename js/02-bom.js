'use strict'

// BOM - Browser Object Model
function getBom() {
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

getBom();