console.log("launching my script ...")
let state = true  
let elem = document.getElementById("TB")
function tonggleColor(){
elem.style.backgroundColor= "blue" }
console.log(elem.style.backgroundColor)
if (state) { 
 elem.style.backgroundColor= "blue";  
}
else {
 elem.style.backgroundColor= "red"; 
}
state = !state
let state1 = true
let elem1 = document.getElementById("TF")
function changeText() { 
 if (state1){  
 elem1.style.fontStyle= "italic";
 } else {
 elem1.style.font= "normal";
 }
 state1 = !state1
}