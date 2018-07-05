
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }
// for(var i=0;i<5;i++){
//  function x(z){
//     setTimeout(function(){
//         console.log(z)
//     },i*1000)
// }
// x(i)
// }
for(var i=0;i<5;i++){           //IFFE new way
    (function x(z){         
       setTimeout(function(){
           console.log(z)
       },i*1000)
   }) (i)
   }