
function plus(a,b) {
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    document.getElementById("res").innerHTML= parseInt(a) + parseInt(b);
}

function minus(a,b) {
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    document.getElementById("res").innerHTML= parseInt(a) - parseInt(b);
}

function kupaytma(a,b) {
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    document.getElementById("res").innerHTML= a*b;
}

function boluv(a,b) {
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    document.getElementById("res").innerHTML= parseInt(a) / parseInt(b);
}
