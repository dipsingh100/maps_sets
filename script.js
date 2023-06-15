let str = "abcadeecfb"
// let s = new Set(str)
// let result = [...s].join("")
// console.log(result)

let count = new Map()
for(let char of str){
    if (count.has(char)){
        count.set(char, count.get(char)+1)
    }else{
        count.set(char,1)
    }
}
for(let [key,value] of count.entries()){
    console.log(`${key}=${value}`)
}