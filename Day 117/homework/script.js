// 1)შექმენი ფუნქცია greet(name), რომელიც დაბეჭდავს: Hello, name!

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function greet(name){
    console.log("Hello " + name )
}

greet("gio")
greet("jim")
greet(prompt(". . ."))
// 2)შექმენი ფუნქცია showAge(age), რომელიც დაბეჭდავს: You are age years old.

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function showAge(age){
    console.log("You are " +age +"years old.")
}

showAge(12)
showAge(190)
showAge(prompt(". . ."))
// 3)შექმენი ფუნქცია sum(a, b), რომელიც დაბეჭდავს ორი რიცხვის ჯამს.

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function show1Age(o,t){
    console.log(o + t)
}

show1Age(12,434)
show1Age(190,90)
show1Age(Number(prompt(". . .")),Number(prompt(". . .")))
// 4)შექმენი ფუნქცია multiply(a, b), რომელიც დაბეჭდავს ორი რიცხვის ნამრავლს.

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function show12Age(oo,tt){
    console.log(oo * tt)
}

show12Age(12,434)
show12Age(190,90)
show12Age(Number(prompt(". . .")),Number(prompt(". . .")))
// 5)შექმენი ფუნქცია fullName(firstName, lastName), რომელიც დაბეჭდავს სრულ სახელს ერთ სტრინგად.

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით

// # medium hard
function show312Age(ooo,ttt){
    console.log(oo + " " + tt)
}

show312Age("mero","gio")
show312Age("gio","mero")
show312Age(prompt(". . ."),prompt(". . ."))
// 6)შექმენი ფუნქცია isAdult(age).

// თუ ასაკი(პარამეტი) 18 ან მეტია, დაბეჭდოს Adult, სხვა შემთხვევაში Minor.(გამოიყენე ternary)

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function isAdult(age){
    if(age > 18){
        console.log("Adult")
    }

    else{
        console.log("Minor")    
    }
}

isAdult(46)
isAdult(Number(prompt(". . .")))
// 7)შექმენი ფუნქცია checkNumber(num).

// თუ რიცხვი(პარამეტრი) დადებითია — დაბეჭდოს Positive, უარყოფითია — Negative, ხოლო 0-ზე — Zero , გამოიყენე ternary 

// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function isAsdult(age){
    if(age > 0){
        console.log("Positive")
    }

    else if(age === 0 ){
        console.log("Zero")
    }

    else{
        console.log("Negative")    
    }
}

isAsdult(46)
isAsdult(Number(prompt(". . .")))
// 8)შექმენი ფუნქცია rectangleInfo(width, height), რომელიც დაბეჭდავს მართკუთხედის ფართობს: width * height.

// გამოიძახე ფუნქცია რამდzენჯერმე განსხვავებული არგუმენტებით

// # harder
function show12Aage(oo0,tt9){
    console.log(oo0 * tt9)
}

show12Aage(12,434)
show12Aage(190,90)
show12Aage(Number(prompt(". . .")),Number(prompt(". . .")))
// 9)შექმენი ფუნქცია greetUser(name, time).

// თუ time არის "morning", დაბეჭდოს Good morning, ${name}!

// თუ time არის "evening" — Good evening, ${name}!

// სხვა შემთხვევაში — Hello, name!

// გამოძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით
function show12Aage(oo,tt){
    if(oo === "morning"){
        console.log("Good morning," + tt)
    }

    if(oo === "evening"){
        console.log("Good evening," + tt)
    }

    else{
        console.log("hello" + tt)
    }
}

show12Aage("morning","name")
show12Aage("evening","kk")
show12Aage(prompt(". . ."),prompt(". . ."))
// 10)შექმენი ფუნქცია checkPassword(password).

// თუ პაროლის სიგრძე 8-ზე ნაკლებია, დაბეჭდოს Password is too short, სხვა შემთხვევაში Password accepted.(ternary)

// გამოძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით
function s(oo){
    if(oo.length < 8){
        console.log("Password is too short")
    }
    else{
        console.log("Password accepted")
    }
}

s("morning")
s("eng")

