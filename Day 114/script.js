// 1)მომხმარებელს შემოატანინე მნიშვნელობა prompt()-ით.
// თუ მნიშვნელობა არის truthy, დაბეჭდე "მნიშვნელობა არსებობს",
// ხოლო თუ falsy არის → "მნიშვნელობა ცარიელია".
let one = prompt(". . .")
if(one){
    console.log("მნიშვნელობა არსებობს")
}

else{
    console.log("მნიშვნელობა ცარიელია")
}

// 2)შექმენი ცვლადი nickname.
// თუ მომხმარებელმა არაფერი შეიყვანა, გამოიყენე "Guest" მნიშვნელობა || ოპერატორით.
// ბოლოში დაბეჭდე nickname.
let nickname = prompt("") || "Guest"

// 3)მომხმარებელს შემოატანინე ტექსტი.
// თუ ტექსტი არსებობს და .trim() შემდეგ სიგრძე 5-ზე მეტია → "გრძელი ტექსტია"
// სხვა შემთხვევაში → "მოკლე ტექსტია"
let two = prompt(". . .")
if(two && two.trim().length >5){
    console.log("გრძელი ტექსტია")
}

else{
    console.log("მოკლე ტექსტია")  
}
// 4)მომხმარებელს შემოატანინე ასაკი.
// თუ ასაკი truthy-ა და 18-ზე მეტია → "სრულწლოვანი"
// თუ ასაკი falsy-ა → "ასაკი არ არის შეყვანილი".
let two1 = Number(prompt(". . ."))
if(two && two > 18){
    console.log("სრულ წლოვანი")
}

else if(two1 == ""){
    console.log("ასაკი არ არის შეყვანილი")  
}
// 5)ომხმარებელს შემოატანინე ორი მნიშვნელობა.
// თუ ორივე truthy-ა → "ორივე სწორია"
// თუ ერთ-ერთი falsy-ა → "რომელიღაც ცარიელია".
let two2 = prompt(". . .")
let two3 = prompt(". . .")
if(two2 && two3){
    console.log("ორივე სწორია")
}

else{
    console.log("რომელიღაც ცარიელია")
}
//  \\\
let isNum = 0;
let result = isNum || "other nym";
console.log(result)
// დაბეჭდე result და ახსენი რატომ მიიღო ეს მნიშვნელობა.
// imito gamoitans other nums rom is aris falsey
// 7)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// typeof არის "string"
// და ტექსტი არ არის ცარიელი
// და length 3-ის ჯერადია

// დაბეჭდე "Special string"
// სხვა შემთხვევაში → "Normal string"

// 8)მომხმარებელს შემოატანინე ორი username.
// თუ:
// ორივე იწყება "go"-თი
// და ერთნაირი არ არის(!==)
// და ორივეს length მინიმუმ 6 აქვს
let two4 = prompt(". . .")
let two5 = prompt(". . .")
if(two4.startsWith("go") && two5.startsWith("go") && two4 !== two5 && two4.length >= 6 && two5.length >= 6){
    console.log("Matching users")
}
else{
        console.log("Users failed")
}



// დაბეჭდე "Matching users"
// სხვა შემთხვევაში → "Users failed"

// 9)მომხმარებელს შემოატანინე 2 პაროლი.
// თუ:
// ორივე პაროლი ერთმანეთს ემთხვევა
// და პირველი პაროლის length მეტია 8-ზე
// და პაროლი uppercase-ში არ უდრის ორიგინალს

// დაბეჭდე "Passwords match"
// სხვა შემთხვევაში → "Passwords do not match"
let two6 = prompt(". . .")
let two7 = prompt(". . .")
if(two6.startsWith("go") && two7.startsWith("go") && two6 === two7 && two6.length > 8 && two7.toUpperCase() !== two7){
    console.log("Passwords match")
}
else{
    console.log("Passwords do not match")
}

// 10)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// ტექსტი იწყება "java"-თი 
// ან length მეტია 20-ზე
// დაბეჭდე "Programming text"

let ll = prompt(". . .")

if(ll.startsWith("java")&& ll.length >20 ){
    console.log("Programming text")
}

else if(ll.length <5){
    console.log("Too short")
}
// თუ length ნაკლებია 5-ზე → "Too short"
else{
    console.log("Unknown text")
}
// სხვა შემთხვევაში → "Unknown text"
// 11)მომხმარებელს შემოატანინე username და role.
// თუ:
// username იწყება "user"-ით
// და role lowercase-ში უდრის "admin"

// დაბეჭდე "Fake admin"
let ll1= prompt(". . .")
let ll2 = prompt(". . .")
if(ll1.startsWith("user")&& ll2.toLowerCase() === "admin" ){
    console.log("Fake admin")
}

else if(ll1.startswith("admin")&& ll2.toLowerCase() === "admin" ){
    console.log("Real admin")
}

else{
    console.log("Normal user")
}
// თუ:

// username იწყება "admin"-ით
// და role lowercase-ში უდრის "admin"

// დაბეჭდე "Real admin"

// სხვა შემთხვევაში → "Normal user"