window.onload=function()
{   let arrin=document.getElementById('arrin')
    let calcbut=document.getElementById('calcbut')
    let answ=document.getElementById('answ')
calcbut.onclick=function(){
    var array = arrin.value.split(",")
   // answ.innerText=array
array2=array.map(function(v,i,a){
    return v*v
})
array3=array2.reduce(function(acum,v,i,a){
    return acum+(v/a.length)
},0)

let rms=Math.sqrt(array3)
answ.innerText=rms
}

}