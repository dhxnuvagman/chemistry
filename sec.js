function runme(){
    var wf=document.getElementById("wf").innerText;
var bl=document.getElementById("bl").innerText;
var f1=Number(document.getElementById("fas1").innerText);
var f2=Number(document.getElementById("fas2").innerText);
var f3=Number(document.getElementById("fas3").innerText);
var n1=((Number(wf)*4)/392).toFixed(4);
var at=((f1+f2+f3)/3).toFixed(2);
var v1=bl-at;
var n2=((v1*n1)/25).toFixed(4);
var cod=((n2*8)*1000);
localStorage.setItem("wf",wf);
localStorage.setItem("v1",v1);
localStorage.setItem("cod",cod);
localStorage.setItem("n2",n2);
localStorage.setItem("n1",n1);
localStorage.setItem("b",n1);
localStorage.setItem("bl",bl);
localStorage.setItem("cod",cod);
localStorage.setItem("f1",f1);
localStorage.setItem("f3",f3);
localStorage.setItem("f2",f2);
window.location.href="third.html"
}