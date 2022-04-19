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


let questionOne=prompt("learn js")
let questionTwo=prompt("learn java")
let questionThree=prompt("learn html")
let array=[]
if(questionOne.length<1){
    questionOne="invaled"
}
if(questionTwo.length<1){
    questionTwo="invaled"

}
if(questionThree.length<1){
    questionThree="invaled"
}
array[0]=questionOne
array[1]=questionTwo
array[2]=questionThree
console.log(array)
for(i=0;i<array.length;i++){
    console.log(array[i])
}

