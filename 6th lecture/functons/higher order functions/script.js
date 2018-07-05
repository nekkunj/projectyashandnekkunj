function inner()
{
    return "Name"
}
function outer(arg){
    function greeter(){
    console.log("greet " + arg())
    }
    return greeter
}
let greet=outer(inner)
greet()