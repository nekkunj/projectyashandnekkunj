
window.onload=function()
{   let list=document.getElementById('list')
    let alertbtn=document.getElementById('alertbtn')
    let num=document.getElementById('num')
 
    alertbtn.onclick=function(){
    
        let start=new Date().getTime()
        let N=parseInt(num.value)
      //  let listContent=""
        
     for(let i=1;i<=N;i++){
        let point=""
        if(i%3==0) point+="fizz"             
         if(i%5==0) point+="buzz"
         if(point=="") point=i
 //        list.innerHTML=`<li>${point}</li>`
        let item=document.createElement('li')
        item.innerText=point
    list.appendChild(item)
    }
    
    console.log(new Date().getTime()-start) 
}
}
let str=`this is nekkunj's \n string`
console.log(str)