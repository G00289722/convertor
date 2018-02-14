function cToF (){

var cTemp = ParseInt(document.getElementById("value1").value);

var cToFahr = cTemp * 9/5 + 32;

var message =cTemp+ \xBOC is ' + cToFahr + ' \xBOF.';
console.log(message);
document.getElementById("resultsentence").innerHTML = message;
}


