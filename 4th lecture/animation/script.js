
function moveauto()
{
    let div3=document.getElementById("div3")
let pos=0
let n=setInterval(frame,3)
function frame()
{
if(pos==400) {clearInterval(n)}
else{
pos++
div3.style.top=pos+'px'
}
}
}
moveauto()