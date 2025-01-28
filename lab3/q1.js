function mergeArray(...arr){
    return[].concat(...arr)
}
let res=mergeArray([1,2],[3,4],[5,6])
console.log(res)