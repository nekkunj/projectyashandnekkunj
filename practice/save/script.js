
window.onload=function(){
    var todos=[]
    var taketask=this.document.getElementById('taketask')
var addtask=this.document.getElementById('addtask')
var printtask=this.document.getElementById('printtask')
var minus=document.getElementById('minus')
var sorting=document.getElementById('sorting')
function savetodos(){
    localStorage['todos']=JSON.stringify(todos)
}
function retrivetodos(){
    if(localStorage['todos']) {
        todos=JSON.parse(localStorage['todos'])
}
}

function clearlist(){
    while(printtask.firstChild){
    printtask.removeChild(printtask.firstChild)
}}

function converttodostostring(element,pos){
    var item=document.createElement('li')
   var taskspan=document.createElement('span')
   var xbtn=document.createElement('button')
    var upbtn=document.createElement('button')
    var dwnbtn=document.createElement('button')
    xbtn.innerText='X'
 upbtn.innerText='^'
 dwnbtn.innerText='V'
   taskspan.innerText=todos[pos].task
    if(element.done){
        taskspan.style.textDecoration='line-through'}

       xbtn.onclick=function(){   
todos[pos].done=!todos[pos].done
   savetodos()  
  refreshtodos()
   }

   dwnbtn.onclick=function(){
      if(pos<(todos.length-1)) {
       todos.splice(pos,2,todos[pos+1],todos[pos])
   
   savetodos()
   refreshtodos() }}
  upbtn.onclick=function(){
    if(pos>0){
        todos.splice(pos-1,2,todos[pos],todos[pos-1])  
    savetodos()
      refreshtodos()}
  }     
  item.appendChild(xbtn)
    item.appendChild(upbtn)
    item.appendChild(dwnbtn) 
  item.appendChild(taskspan)
    
    return item
}

function refreshtodos()
{
    retrivetodos()
    clearlist()
    for(let i=0;i<todos.length;i++){
        printtask.appendChild(converttodostostring(todos[i],i))
    }
}

function addtodos(){
    todos.push({task:taketask.value,
        done:false})
    savetodos()
    refreshtodos()
taketask.value=""
}

addtask.onclick=function(){addtodos()}
taketask.addEventListener('keyup',function(event){
    if(event.keyCode==13){ addtodos()}
})
minus.onclick=function(){
   
 todos = todos.filter((t) => !t.done)  
savetodos()
    refreshtodos()
}
sorting.onclick=function(){
todos.sort(function(a,b) { return a.done-b.done})
savetodos()
refreshtodos()    
}
refreshtodos()

}