// 1)მომხმარებელს შემოატანინე პაროლი prompt()-ით.
// თუ:
// პაროლი trim() შემდეგ იწყება "GOA"-თი
// და მისი სიგრძე (length) მეტია 10-ზე
// და მთლიანად uppercase არ არის

// დაბეჭდე: "Strong password"
// სხვა შემთხვევაში: "Weak password"
let m = prompt(". . .")
if(m.trim().startsWith("GOA") && m.length>10 && m === m.toUpperCase()){
    console.log("Strong password")
}

else{
    console.log("Weak password")
}

// 2)მომხმარებელს შემოატანინე ასაკი და სახელი.
// თუ:
// ასაკი მეტია 18-ზე
// და სახელი იწყება "g"-ზე

// თუ ასაკი 18-ზე ნაკლებია → "Too young"

// სხვა შემთხვევაში → "Wrong username"
let m2 = parseInt(prompt(". . ."))
let m3 = parseint(prompt(". . ."))
if(m2>18 && m3.startsWith("g")){
    console.log("welcome")
}

else if(m2<18){
    console.log("Too young")
}

else{
    console.log("Wrong username")
}
// 3)მომხმარებელს შემოატანინე ტექსტი.
// შეამოწმე:
// არის თუ არა ტიპი (typeof) string და
// აქვს თუ არა მინიმუმ 5 სიმბოლო
// და იწყება თუ არა "hello"-თი 

// თუ ყველა პირობა შესრულდა → "Valid text"

// სხვა შემთხვევაში → "Invalid text"
let m4 = prompt(". . .")
if(typeof m4  === String && m4.length()>=4 && m4.startswith()){
    console.log("Valid text")
}

else{
    console.log("Invalid text")
}


// 4)მომხმარებელს შემოატანინე ორი სიტყვა.
// თუ:
// ორივე სიტყვის სიგრძეების ჯამი მეტია 12-ზე
// და პირველი სიტყვა uppercase-ში არ უდრის მეორეს uppercase-ში
// დაბეჭდე "Different long words"

// სხვა შემთხვევაში → "Failed"
let m5 = prompt(". . .")
let m6 = prompt(". . .")
if(m5.length + m6.length> 12 && m5.toUpperCase != m6.toUpperCase()){
    console.log("Different long words")
}

else{
    console.log("Different long words")
}


// 5)მომხმარებელს შემოატანინე ქვეყანა.
// თუ:
// ტექსტი uppercase-ში უდრის "GEORGIA"
// ან lowercase-ში უდრის "sakartvelo"
// დაბეჭდე "Correct country"
// სხვა შემთხვევაში → "Unknown country"
let m7 = prompt(". . .")
if(m7.toUpperCase() === "GEORGIA" || m7.toLowerCase() === "georgia"){
    console.log("Correct country")
}

else{
    console.log("Unknown country")
}

// 6)
// მომხმარებელს შემოატანინე password.
// თუ:
// length არის 8-დან 15-მდე
// და იწყება uppercase ასოთი

// დაბეჭდე "Good password"
// სხვა შემთხვევაში → "Bad password"
let m8 = prompt(". . .")
if(m8.length >=9 <15 && m8.startsWith("QAZXSWEDCVFRTGBNHYUJMKIOLP")){
    console.log("Good password")
}

else{
    console.log("Bad password")
}

// 7)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// ტექსტის length ლუწია
// და lowercase ტექსტი არ იწყება "x"-ზე
// და uppercase ტექსტი არ უდრის ორიგინალს

// დაბეჭდე "Accepted"
// სხვა შემთხვევაში → "Rejected"
let m9 = prompt(". . .")
if(m9.length % 2 === 0 && m9.toLowerCase() != x && m9.toUpperCase() != m9){
    console.log("Accepted")
}

else{
    console.log("Rejected")
}

// 8)მომხმარებელს შემოატანინე ორი username.
// თუ:
// ორივე იწყება "go"-თი
// და ერთნაირი არ არის(!==)
// და ორივეს length მინიმუმ 6 აქვს

// დაბეჭდე "Matching users"
// სხვა შემთხვევაში → "Users failed"
let m10 = prompt(". . .")
let m11 = prompt(". . .")
if(m10.startsWith("go"), m11.startsWith("go")&& m10 != m11 && m10.length >= 6,m11.length >=6){
    console.log("Matching users")
}

else{
    console.log("Users failed")
}

// 9)მომხმარებელს შემოატანინე 2 პაროლი.
// თუ:
// ორივე პაროლი ერთმანეთს ემთხვევა
// და პირველი პაროლის length მეტია 8-ზე
// და პაროლი uppercase-ში არ უდრის ორიგინალს

// დაბეჭდე "Passwords match"
// სხვა შემთხვევაში → "Passwords do not match"
let m12 = prompt(". . .")
let m13 = prompt(". . .")
if(m13.toUpperCase() === m13&& m12 === m13 && m12.length >8 ){
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

// თუ length ნაკლებია 5-ზე → "Too short"

// სხვა შემთხვევაში → "Unknown text"

let m14 = prompt(". . .")

if(m14.startsWith("java")&& m14.length >20 ){
    console.log("Programming text")
}

else if(m14.length <5 ){
    console.log("Too short")
}

else{
    console.log("Unknown text")
}
