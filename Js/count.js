let first = document.getElementById("first");
function upCount(){
    let x=first.innerHTML;
    x++;
    if(x>=450){
        clearInterval(y)
    }
    first.innerHTML = x;
}
let y = setInterval(upCount,5)
upCount()



let second = document.getElementById("second");
function upCountS(){
    let x=second.innerHTML;
    x++;
    if(x>=25){
        clearInterval(z)
    }
    second.innerHTML = x;
}
let z = setInterval(upCountS,50)
upCountS()



let third = document.getElementById("third");
function upCountT(){
    let x=third.innerHTML;
    x++;
    if(x>=550){
        clearInterval(N)
    }
    third.innerHTML = x;
}
let N = setInterval(upCountT,5)
upCountT()


let forth = document.getElementById("forth");
function upCountF(){
    let x=forth.innerHTML;
    x++;
    if(x>=48){
        clearInterval(F)
    }
    forth.innerHTML = x;
}
let F = setInterval(upCountF,50)
upCountF()

