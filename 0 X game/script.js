let check=''
 let zeroindex=[]
 let crossindex=[]
$(()=> {
let i=0                
var undefinedlist=$('#playername')
var list=document.createElement('li')   
list.innerHTML=`Player 1 turn`
          undefinedlist.append(list)
function reloa(){
  document.location.reload(true)
}

          $(`div`).click(function(){

            if(i%2==0){
var m=check.search($(this).index())
if(m!=-1) {return}
zeroindex[i/2]=$(this).index()
zeroindex.sort()
list.innerHTML=`Player 2 turn`
          undefinedlist.append(list)
          var zero=document.createElement('div')
          check+=' '+$(this).index()
         console.log(zeroindex)
          zero.style.backgroundColor='black';
       zero.style.border='solid 4px white';
       zero.style.borderRadius='50%';
       zero.style.width='80%';
       zero.style.height='80%';
       $(this).append(zero)       
    i=i+1
    if(zeroindex.indexOf(0)>=0 )
         { 
           if(zeroindex.indexOf(1)>=0)
           {
             if(zeroindex.indexOf(2)>=0){ window.alert('Player 1 wins'); reloa() }
           }
           if(zeroindex.indexOf(3)>=0){
             if(zeroindex.indexOf(6)>=0){ window.alert('Player 1 wins'); reloa()}
           }
           if(zeroindex.indexOf(4)>=0){
             if(zeroindex.indexOf(8)>=0){ window.alert('Player 1 wins'); reloa()}
           }
          }
          if(zeroindex.indexOf(4)>=0 )
         { 
           if(zeroindex.indexOf(1)>=0)
           {
             if(zeroindex.indexOf(7)>=0){ window.alert('Player 1 wins'); reloa()}
           }
           if(zeroindex.indexOf(3)>=0){
             if(zeroindex.indexOf(5)>=0){ window.alert('Player 1 wins'); reloa()}
           }
           if(zeroindex.indexOf(2)>=0){
             if(zeroindex.indexOf(6)>=0){ window.alert('Player 1 wins'); reloa()}
          } }
          
          if(zeroindex.indexOf(8)>=0 )
         { 
           if(zeroindex.indexOf(2)>=0)
           {
             if(zeroindex.indexOf(5)>=0){ window.alert('Player 1 wins'); reloa()}
           }
           if(zeroindex.indexOf(6)>=0){
             if(zeroindex.indexOf(7)>=0){ window.alert('Player 1 wins'); reloa()}
           }
          }
          
          }
              
        

        else{
          var n=check.search($(this).index())
if(n!=-1) {return}

crossindex[(i-1)/2]=$(this).index()
         

list.innerHTML=`Player 1 turn`
          undefinedlist.append(list)
          var cross=document.createElement('div')          
          check+=' '+ $(this).index()
           
          cross.innerHTML=`<b>X</b>`
          cross.style.color='white'
          cross.style.fontSize='50px'
          cross.style.textAlign='center'
          cross.style.position='relative'
           cross.style.bottom='5px'
          $(this).append(cross)
          i=i+1
       
       
         if(crossindex.indexOf(0)>=0 )
         { 
           if(crossindex.indexOf(1)>=0)
           {
             if(crossindex.indexOf(2)>=0){ window.alert('Player 2 wins'); reloa()}
           }
           if(crossindex.indexOf(3)>=0){
             if(crossindex.indexOf(6)>=0){ window.alert('Player 2 wins'); reloa()}
           }
           if(crossindex.indexOf(4)>=0){
             if(crossindex.indexOf(8)>=0){ window.alert('Player 2 wins'); reloa()}
           }
          }
          if(crossindex.indexOf(4)>=0 )
         { 
           if(crossindex.indexOf(1)>=0)
           {
             if(crossindex.indexOf(7)>=0){ window.alert('Player 2 wins'); reloa()}
           }
           if(crossindex.indexOf(3)>=0){
             if(crossindex.indexOf(5)>=0){ window.alert('Player 2 wins'); reloa()}
           }
           if(crossindex.indexOf(2)>=0){
             if(crossindex.indexOf(6)>=0){ window.alert('Player 2 wins'); reloa()}
           }
          }
          if(crossindex.indexOf(8)>=0 )
         { 
           if(crossindex.indexOf(2)>=0)
           {
             if(crossindex.indexOf(5)>=0){ window.alert('Player 2 wins'); reloa()}
           }
           if(crossindex.indexOf(6)>=0){
             if(crossindex.indexOf(7)>=0){ window.alert('Player 2 wins'); reloa()}
           }
          }
          
          }
        
  })
     
    
    
      
       
    
        

    
       
    
})