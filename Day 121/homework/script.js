// 1)შექმენი Function Expression --> square, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კვადრატს.გამოიყენე Math

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი
const square = function(square){
    return Math.pow(square,2)
}

console.log(square(234))
console.log(square(75))
console.log(square(prompt(". . .")))
// 2)შექმენი Function Expression --> maxNumber, რომელიც მიიღებს ოთხ რიცხვს და დააბრუნებს მათგან დიდს.

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი
const square = function(q,w,e,r,t,y){
    return Math.max(q,w,e,r,t,y)
}

console.log(square(1,2,3,4,5,846))
console.log(square(1,3,86,35,62,0))
console.log(square(prompt(". . ."),prompt(". . ."),prompt(". . ."),prompt(". . ."),prompt(". . ."),prompt(". . .")))
// 3)პაროლის შემოწმება

// შექმენი Function Expression --> checkPassword, რომელიც დააბრუნებს true თუ პაროლი:

// მინიმუმ 8 სიმბოლოა და მთავრდება ასო "a" ზე

// სხვა შემთხვევაში დააბრუნოს false.
const checkPassword = function(password){
    if(password.length <= 8 && password.endsWith("a")){
        return true
    }

    else{
        return false
    }
}

console.log(checkPassword("hajehya"))
// 4)შექმენი Function Expression --> isLuckyNumber, რომელიც დააბრუნებს true თუ რიცხვი:

// იყოფა 3-ზე
// და იყოფა 5-ზე

// სხვა შემთხვევაში დააბრუნოს false.(use ternary)

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი
const isLuckyNumber = function(number){
    return num % 3 === 0 && num % 5 === 0 ?true:false
}

console.log(isLuckyNumber(3363633363333636345))
// 5)შექმენი Function Expression--> checkWord, რომელიც მიიღებს სიტყვას.

// თუ სიტყვა არის "javascript" დააბრუნოს:

// "Access Granted"

// სხვა შემთხვევაში:

// "Access Denied"

// # arrow=======================================
const chheckPassword = (pahssword)=>{
    if(pahssword === "javascript"){
        return "Access Granted"
    }

    else{
        return "Access Denied"
    }
}

console.log(chheckPassword("nilla"))
// 6)შექმენი Arrow Function --> isAdult, რომელიც მიიღებს ასაკს და დააბრუნებს:

// "Adult" თუ ასაკი 18 ან მეტია
// "Minor" სხვა შემთხვევაში

// ternary

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი


const word = (sword)=>{
    if(sword >= 18){
        return "Adult"
    }

    else{
        return "Minooooooooooor"
    }
}

console.log(word(0.183465019385610734610824751034570735601873456280736230487562384723478))
// 7)შექმენი Arrow Function --> rectangleArea, რომელიც მიიღებს სიგრძეს და სიგანეს და დააბრუნებს ფართობს.

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი
const sword = (word,lsslsl)=>{
    return word * lsslsl
}

console.log(word(8593,68686868686868688686868))
// 8)შექმენი Arrow Function -->  passwordStrength, რომელიც მიიღებს პაროლს:

// თუ პაროლის სიგრძე 8-ზე ნაკლებია და პაროლი მთავრდება ასო "ი" თი→ "Weak"
// თუ 8 ან მეტია და იწყება ასო "გ" თი → "Strong"
const wsord = (ssword)=>{
    if(ssword.length < 8 && ssword.endsWith("ი")){
        return "Weak"
    }

    else if(ssword.length >= 8 && ssword.startsWith("გ")){
        return "Strong"
    }
}

console.log(wsord("headfqი"))
// 9)შექმენი Arrow Function -->  startsWith რომელიც მიიღებს რაიმე სტრინგს

// თუ სტრინგი იწყება "გ" თი და მთავრდება "ო" თი და სიგრძე trim() ით მეტია 8 ზე დააბრუნე --> რთული სახელი , სხვა შემთხვევაში მარტივი სახელი

const ggg = (gggg) =>  gggg.startsWith(გ) && gggg.endsWith(ო) && gggg.length.trim()>8 ?  "რთული სახელი":"მარტივი სახელი"
console.log(ggg("გhellomynameisgiorgiო"))

// 10)შექმენი formatUsername, რომელიც ერთ ხაზში დააბრუნებს username-ს პატარა ასოებით.
const  formatUsername = (username) => username.toLowerCase()
// 11)შექმენი checkCode, რომელიც ერთ ხაზში დააბრუნებს:

// "Access Granted" თუ კოდი არის "1234"
// "Access Denied" სხვა შემთხვევაში

// ternary
const gggg = (gg) => g === 1234 ?  "Access Granted":"Access Denied"
// 12)შექმენი isLongText, რომელიც ერთ ხაზში დააბრუნებს true, თუ ტექსტის სიგრძე 10-ზე მეტია. 
const gggg = (ggggggg) => gg.length > 10 ? "Passed":"Failed"
// 13)შექმენი passedExam, რომელიც ერთ ხაზში დააბრუნებს:

// "Passed" თუ ქულა 51 ან მეტია
// "Failed" სხვა შემთხვევაში

// ternary
const gggg = (g) => gg > 51 ? true:false
// 14)შექმენი freeDelivery, რომელიც ერთ ხაზში დააბრუნებს true, თუ შეკვეთის ფასი 100₾-ზე მეტია. სხვა შემთხვევაში false
const freeDelivery = (g) => gg > 51 ? true:false
// ternary