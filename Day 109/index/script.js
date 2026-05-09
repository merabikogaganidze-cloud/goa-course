
// 1)კომენტარის სახით ახსენით თუ რა ფუნქციები ვისწავლეთ მონაცემთა ტიპის შესაცვლელად ,ჩამოწერე ყველა მათგანი
//  parseInt()
//  aqcevs ricxvad                     
//  toString()
//  aqcevs textad
// 2) 
// მომხმარებელს შემოატანინე მნიშვნელობა prompt-ით.
// გააკეთე:
let string = prompt("string2")
let integer = prompt("number2")

console.log(typeof parseInt(string))
console.log(typeof toString(integer))
console.log(typeof Number(string))
console.log(typeof Number(string))
// გადააქციე Number()-ით
// გადააქციე parseInt()-ით
// გადააქციე String()-ით
// გამოიყენე toString() (თუ შესაძლებელია)

// დაბეჭდე ყველმათი ტიპები 

// 3)მომხმარებელს შემოატანინე ორი მნიშვნელობა,შენი დავალებაა რომ იპოვო ამ რიცხვების ჯამი
let stringg = prompt("num")
let integerg = prompt("more num").
console.log(stringg+integerg)
// 4)მომხმარებელს შემოატანინე მნიშვნელობები შენს შესახებ --> სახელი გვარი ... და interpolation ით შექმენი წინადადება 
let namek = "Goga";
let age = 16;

console.log(`My name is ${namek} and i am ${age} years old`)
// 5)მომხმარებელს შემოატანინე რაიმე რიცხვი,შემდეგ გადააქციე ეს სტრინგი რიცხვი ნამბერად შესაბამისი მეთოდით და დაბეჭდე მისი ტიპი
let integerrr = prompt("number2")

console.log(typeof parseInt(integerr))
// 6)მომხმარებელს შემოატანინე რაიმე ნამბერ ტიპის მონაცემი,შენი დავალებაა რომ გადააქციო ეს რიცხვი სტრინგად და დაბეჭდო მისი ტიპი
let integerrrr = prompt("number2")

console.log(typeof parseInt(integerr))
// 7)მომხმარებელს შემოატანინე 4 ნამბერ ტიპის მონაცემი,შენი დავალებაა რომ მოახდინო ამ რიცხვების კონკატინაცცია,გამოიყენე შესაბამისი მეთოდები
let one = prompt("..")
let two = prompt("..")
let three = prompt("..")
let four = prompt("..")
console.log(one + two + three + four)

// 8)მომხმარებელს შემოატანინე ორი რიცხვი, შენი დავალებაა კონსოლში გამოიტანო რამდენია პირველი ამ ორი რიცხვის გაყოფისას მიღებული ნნაშთი(გამოიყენე შესაბამისი ფუნქცია და მათემატიკური ოპეტაროტი-->გადახედეთ გავლილს)
let threeeee = prompt("..")
let foureeee = prompt("..")
console.log(parseInt(threeeee) % parseInt(foureeee))
// 9)მომხმარებელს შემოატანინე ორი რიცხვი,შენი დაალებაა გაიგო ამ ორი რიცხვის ნამრავლი
let threeeeee = prompt("..")
let foureeeee = prompt("..")
console.log(parseInt(threeeee) * parseInt(foureeee))
// 10)მომხმარებელს შემოატანინე 5 რიცხვი,შენი დავალებაა გაიგო რამდენია ამ რიცხვების საშვალო არითმეტიკული(მოიძიეთ თუ არ იცით რა არის საშვალო არითმეტიკული)
let onerr = prompt("..")
let tworr = prompt("..")
let threerr = prompt("..")
let fourrr = prompt("..")
let fourrr5 = prompt("..")
console.log(parseInt(onerr) + parseInt(tworr) + parseInt(threerr) + parseInt(fourrr) + parseInt(fourrr5)/ (parseInt(onerr) + parseInt(tworr) + parseInt(threerr) + parseInt(fourrr) + parseInt(fourrr5)).length)
// 11)შექმენი ცვლადი სადაც მომხმარებელი შემოტანს სტრინგს,შემდეგ დაბეჭდე მისი ტიპი
let o = "lol"
console.log(typeof o)
o = 1
console.log(typeof o)
// შემდეგ შენი დავალებაა ეს ცვლადი განაახლო ახალი მომხმარებლის მიერ შემოყვანილო მნიშვნელობით რომელიც იქნება უკვე რიცხვი,შემდეგ დაბეჭდე მისი ტიპიც
