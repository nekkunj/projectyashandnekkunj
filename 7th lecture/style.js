window.onload=function()
{   let list=document.getElementById('list')
    let addbtn=document.getElementById('addbtn')
    let addtext=document.getElementById('addtext')
    window.remove=function(element)
    {
        list.removeChild(element.parentElement)
    //     let abcd=element.parentElement.children[0]
    //  if(abcd.style.textDecoration=='line-through')
    //  {
    //     abcd.style.textDecoration=''
    //  }else{
    //     abcd.style.textDecoration='line-through'
    //  }
    }
    addnewtask=function(){
        let item=document.createElement('li')
       
       item.innerHTML=`<span>${addtext.value}</span><button onclick=remove(this)>X</button>`
    list.appendChild(item)
    addtext.value=""
    }
addbtn.onclick=function(){
    addnewtask()
}

addtext.addEventListener('keyup',function(event){
    if( event.keyCode==13){
       addnewtask()
    }
})



}
