console.log("hello")
function showAlert(name)
{
    window.alert( "hello :" + name)
}
window.onload=function()
{
    document.getElementById('mydiv').innerText="something";
    var alertbtn=document.getElementById("alertbtn")
    var nameinput=document.getElementById("nameinput")
 alertbtn.onclick=function(){
        showAlert(nameinput.value)}
}
