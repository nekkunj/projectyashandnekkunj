let arr=[5,2,11,7,42]
console.log(arr)
arr.sort(function(a,b){
    console.log(`${a} ${b}`)
    return a-b
})
