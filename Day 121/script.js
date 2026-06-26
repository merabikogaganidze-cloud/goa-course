// შექმენით ფუნქცია function expression ით რომელსაც გადაეცემა პარამეტრად num რიცხვი

// შენი დავალებაა რომ გაიგო ეს რიცხვი ლუწია თუ კენტია და დააბრუნო შესაბამისი სტრინგი --> "even" თუ ლუწია "odd" თუ კენტია

// გააკეთე ternary ოპერატორით

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტით

const checkNum = function(num){
return num % 2 === 0 ?  "even" :  "odd";
}

console.log(checkNum(12))


// შექმენით ARROW FUNCTION რომელსაც არგუმენტად გადაეცემა 4 რიცხვი

// შენი დავალებაა დააბრუნო ამ 4 რიცხვიდან მაქსიმალური რიცხვი

// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

const fancyName = (m1,m2,m3) => {
    return Math.max(m1,m2,m3)
}

console.log(fancyName(1341,4843,3873))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////>:)
const greet = function(name , age , sunrame){
  return  `Hello my name is ${name} , my surname is ${surname} and age is ${age}`
}

console.log(greet("giorgi" , 20 , "miribiani"))

const greet = (name , age , sunrame) => {
  return  `Hello my name is ${name} , my surname is ${surname} and age is ${age}`
}

console.log(greet("giorgi" , 20 , "miribiani"))


// გადააკეთეთ ზემოთ მოცემული ფუნქცია ჯერ function expression შემდეგ arrow ფუნქციად