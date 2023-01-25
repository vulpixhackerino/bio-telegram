var i = 0;
var title = 'vulpi ~ @pulpix';
var titolo = document.getElementById("titolo-1");
var logo = document.getElementsByClassName("logo");


titolo.addEventListener("load", titleFunc());
logp.addEventListener("onclick", logoOnClick());

function titleFunc(){
    if(i<title.length){
        titolo.innerHTML += title.charAt(i);
        i++;
        setTimeout(titleFunc, 100);
    }
}