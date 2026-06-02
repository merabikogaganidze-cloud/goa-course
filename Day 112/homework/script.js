
// 1)მომხმარებელს prompt()-ით შემოატანინე სახელი.
// თუ შეყვანილი ტექსტი ცარიელია trim()-ის შემდეგ → გამოიტანე "შეიყვანე სახელი"
// სხვა შემთხვევაში:
// თუ სახელი იწყება "A" ასოზე (startsWith()) → "შენი სახელი A-ზე იწყება"
// სხვა შემთხვევაში → "სხვა ასოზე იწყება"
User_Prompt2 = prompt(". . .")
if (User_Prompt2.trim().length == 0){
    console.log ("wheres the name?")
}

else{
    if (User_Prompt2.startsWith("a"))
        console.log ("sxva asose iwyeba")
}
// 2)მომხმარებელს შემოატანინე ასაკი prompt()-ით.(რიცხვი)
if(nes.length > 5){
    console.log("გრძელი სახელია")
}

else{
    console.log("მოკლე სახელია")
}
// ასაკი მეტია 18-ზე → "სრულწლოვანი ხარ"

// წინააღმდეგ შემთხვევაში → "არ ხარ სრულწლოვანი"
if(nes.length > 18){
    console.log("unc")
}

else{
    console.log("youngster")
}
// 3)მომხმარებელს შემოატანინე სიტყვა.
// გამოიყენე შემოტანილ მნშვენლობნაზე:
// trim()
// toUpperCase() 
let df = prompt(". . .").trim().toUpperCase()
if (df == "ADMIN"){
    console.log("ადმინის რეჟიმი")
}

else{
    console.log("ჩვეულებრივი მომხმარებელი")
}

// თუ მიღებული ტექსტი უდრის "ADMIN" → "ადმინის რეჟიმი"
// სხვა შემთხვევაში → "ჩვეულებრივი მომხმარებელი"

// 4)მომხმარებელს შემოატანინე ასაკი.
// Number()-ით გადააქციე რიცხვად.

// თუ:

// ასაკი > 18 → "სრულწლოვანი"
// ასაკი < 18 → "არასრულწლოვანი"
// ასაკი == 18 → "ზუსტად 18 წლის ხარ"
let dff = Number(prompt(". . ."))
if (dff > 18){
    console.log("adult")
}

else if (dff < 18){
    console.log("kid")
}

else if (dff == 18){
    console.log("18 years old")
}


// 5)მომხმარებელს შემოატანინე ტექსტი.

// თუ:

// ტექსტის სიგრძე > 10 → "გრძელი ტექსტი"
// ტექსტის სიგრძე < 5 → "მოკლე ტექსტი"
// სხვა შემთხვევაში → "საშუალო ტექსტი"
let dsf = prompt(". . .")
if (dsf.length > 10){
    console.log("longer than duck")
}

else if (df.length < 5){
    console.log("shorter than duck")
}

else{
    console.log("same as duck")
}
// 6)მომხმარებელს შემოატანინე ქვეყანა.
// გამოიყენე toLowerCase().

// თუ ქვეყანა არის:

// "georgia" → "საქართველო"
// "france" → "საფრანგეთი"
// სხვა შემთხვევაში → "სხვა ქვეყანა"
let fs1 = prompt(". . .").toLowerCase()
if (df === "georgia"){
    console.log("საქართველო")
}

else if (df === "france"){
    console.log("საფრანგეთი")
}

else{
    console.log("ეს ქვეანა მე არ მისწავლია")
}
// 7)მომხმარებელს შემოატანინე სიტყვა.

// თუ ტექსტი იწყება "hello"-ზე → "მისალმება"
// სხვა შემთხვევაში → "სხვა ტექსტი"
let fs1 = prompt(". . .")
if (fs1.startsWith("hello")){
    console.log("hello")
}

else{
    console.log("don' yo mama teach yo better")
}
// 8)მომხმარებელს შემოატანინე ორი რიცხვი.
// ორივე გადააქციე Number()-ით.

// თუ:

// პირველი > მეორე → "პირველი მეტია"
// მეორე > პირველი → "მეორე მეტია"
// ტოლია → "ტოლია"
let fsX = Number(prompt(". . ."))
let fsY= Number(prompt(". . ."))
if (fsX > fsY){
    console.log("პირველი მეტია")
}

else if(fsX < fsY){
    console.log("მეორე მეტია")
}

else if(fsX == fsY){
    console.log("ტოლია")
}
// 9)მომხმარებელს შემოატანინე ტექსტი.
// გამოიყენე typeof.

// თუ ტიპი არის "string" → "ეს სტრინგია"
// სხვა შემთხვევაში → "ეს სტრინგი არ არის"
let fs2 = prompt(". . .")
if (typeof fs2 == "string"){
    console.log("ეს სტრინგია")
}

else{
    console.log("ეს სტრინგი არ არის")
}
// 10)მომხმარებელს შემოატანინე რიცხვი.

// თუ:

// რიცხვი > 0 → "დადებითი"
// რიცხვი < 0 → "უარყოფითი"
// რიცხვი == 0 → "ნულია"
let dssf = Number(prompt(". . ."))
if (dssf > 0){
    console.log("დადებითი")
}

else if (dssf < 5){
    console.log("უარყოფითი")
}

else{
    console.log("ნულია")
}
// 11)მომხმარებელს შემოატანინე ტექსტი.

// თუ ტექსტი მთლიანად პატარა ასოებითაა → "lowercase ტექსტი"
// თუ მთლიანად დიდი ასოებითაა → "uppercase ტექსტი"
// სხვა შემთხვევაში → "შერეული ტექსტი"
let lnd = prompt(". . .")
if (lnd===lnd.toLowerCase()){
    console.log("lowercase ტექსტი")
}

else if (lnd===lnd.toUpperCase()){
    console.log("uppercase ტექსტი")
}

else{
    console.log("შერეული ტექსტი")
}
// 12)მომხმარებელს შემოატანინე სიტყვა.
// გამოიყენე String().

// თუ სიტყვის სიგრძე == 0 → "ცარიელი ტექსტი"
// სხვა შემთხვევაში → "ტექსტი შეყვანილია"
let lnd = String(prompt(". . ."))
if ( lnd.length == 0){
    console.log("ცარიელი ტექსტი")
}

else{
    console.log("ტექსტი შეყვანილია")
}