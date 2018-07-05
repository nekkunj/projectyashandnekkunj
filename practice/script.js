window.onload=function(){
div1=document.getElementById('div1')
div2=document.getElementById('div2')

div1.onclick=function(){
   
    div1.innerText='Again press me'
    div1.onclick=function(){
        div1.innerText='thanku'
        div1.onclick=function(){
            div1.innerText='goodbye'
        div1.onclick=function(){
            div1.innerText=''
            div1.style.backgroundColor='white'
            div1.style.boxShadow='0px 0px 0px white'
        }
        }
    }
}
div2.onmouseover=function(){
    div2.innerText='thank u'
}
div2.onmouseout=function(){
    div2.innerText='hover on me'
}

}