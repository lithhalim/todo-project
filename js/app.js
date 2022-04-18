let userName=prompt("username")
console.log(`his/her name :${userName}`)

let gender=prompt("gender")

console.log(`his/her gender :${gender}`)

let age=prompt("age")

console.log(`his/her age :${age}`)

if(age<=0){
    alert("age is less than or equal to zero")
}
let skipWelcome=confirm("skip the welcoming message")

if(skipWelcome===false){
    if(gender==="male"||gender==="female"){
        alert(`welcome ${userName}   gender user is ${gender} age is ${age} `)
    }
    else {
        alert(`welcoming message`)
    }
}
if(skipWelcome===true){
    alert(`welcoming message`)
}