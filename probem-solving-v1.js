// extract max number from any array of numbers


const findMaxNum = (arr) => {
let maxNum  = 0 ; 
for(let i = 0 ; i <= arr.length ; i ++) {
    if(arr[i] > maxNum){
        maxNum = arr[i]
    }
}

}

const arr = [23,323,32323,323,1,3264,3432 ,999999,30]
console.log(findMaxNum(arr))


