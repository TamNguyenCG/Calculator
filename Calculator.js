function sum(){
    let a=+document.getElementById('ip1').value;
    let b=+document.getElementById('ip2').value;
    sum=a+b
    document.getElementById('rs').innerHTML=('Result: '+sum)
}
function sub(){
    let a=document.getElementById('ip1').value;
    let b=document.getElementById('ip2').value;
    sub=a-b
    document.getElementById('rs').innerHTML=('Result: '+sub)
}
function multi(){
    let a=document.getElementById('ip1').value;
    let b=document.getElementById('ip2').value;
    multi=a*b
    document.getElementById('rs').innerHTML=('Result: '+multi)
}
function div(){
    let a=document.getElementById('ip1').value;
    let b=document.getElementById('ip2').value;
    div=a/b
    document.getElementById('rs').innerHTML=('Result: '+div)
}