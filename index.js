let scoreElHome= document.getElementById("score-el-home")
let scoreH=0;

function plusonefunc(){
scoreH+=1
scoreElHome.textContent = scoreH
}
function plustwofunc(){
scoreH+=2
scoreElHome.textContent = scoreH
}
function plusthreefunc(){
scoreH+=3
scoreElHome.textContent = scoreH
}


let scoreElGuest = document.getElementById("score-el-guest")
let scoreG = 0;
function plusoneguestfunc(){
scoreG+=1
scoreElGuest.textContent = scoreG
}
function plustwoguestfunc(){
scoreG+=2
scoreElGuest.textContent = scoreG
}
function plusthreeguestfunc(){
scoreG+=3
scoreElGuest.textContent = scoreG
}