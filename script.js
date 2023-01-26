var i = 0;
var title = 'vulpi ~ @pulpix';
var titolo = document.getElementById("titolo-1");


titolo.addEventListener("load", titleFunc());

function titleFunc(){
    if(i<title.length){
        titolo.innerHTML += title.charAt(i);
        i++;
        setTimeout(titleFunc, 100);
    }
}

function neonFlash() {
    return Math.floor(Math.random() * max);
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }