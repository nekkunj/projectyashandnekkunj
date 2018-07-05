window.onload=function(){
    colorbutton=document.getElementById('colorbutton')
let pressas=function()
{
    document.body.style.backgroundColor="green"
        colorbutton.onclick=function(){
   
            document.body.style.backgroundColor="blue"
            colorbutton.onclick=function(){
   
                document.body.style.backgroundColor="red"
                colorbutton.onclick=function(){ colorbutton.onclick=function(){
   
                    document.body.style.backgroundColor="black"
                    colorbutton.onclick=function(){                pressas()
                }}
        }
    }
}}
    colorbutton.onclick=function(){
   pressas()
        
    }

}