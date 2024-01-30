let str = "cademy";
let start =str.padStart(str.length+5 ,"$")
let end = str.padEnd(str.length+5,"$")
let sum =(start + end.replace("cademy","Cademy"))
let newSum =sum.replace("cademy", "")
console.log(newSum)
console.log(newSum.length)