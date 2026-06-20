// 1)რიცხვის დამრგვალება

// შექმენი ფუნქცია, რომელიც მიიღებს ათწილად რიცხვს და დააბრუნებს:

// Math.round() შედეგს
// Math.floor() შედეგს
// Math.ceil() შედეგს
let fg = 80.5

console.log(Math.round(fg))

console.log(Math.ceil(fg))

console.log(Math.floor(fg))
// 2)უდიდესი და უმცირესი რიცხვის პოვნა

// ფუნქციამ უნდა მიიღოს 5 რიცხვი და დააბრუნოს:

// ყველაზე დიდი
// ყველაზე პატარა
console.log(Math.min(73, 72 , 70 , 9344))

console.log(Math.max(38, 79 , 0 , 84))
// 3)ფუნქციამ უნდა მიიღოს ორი რიცხვი:

// პირველი რიცხვი
// და
// ხარისხი

// და დააბრუნოს პირველი რიცხვი მეორის ხარისხში აყვანილი.
console.log(Math.pow(49 , 57))
// 4)ფუნქციამ უნდა მიიღოს რიცხვი და დააბრუნოს მისი კვადრატული ფესვი.
console.log(Math.sqrt(82))
// 5)დაწერე ფუნქცია, რომელიც დააბრუნებს შემთხვევით მთელ რიცხვს 0-დან 1-მდე.
console.log(Math.random())
// 6)ფუნქციამ უნდა მიიღოს რიცხვი და დააბრუნოს მისი დადებით მნიშვნელობა 
console.log(Math.abs(-7))

// 7)შექმენი ფუნქცია ultimateMath(a, b, c)

// იპოვე:

// ყველაზე დიდი რიცხვი
// ყველაზე პატარა რიცხვი
// ყველაზე დიდი რიცხვის კვადრატი
// ყველაზე პატარა რიცხვის კვადრატული ფესვი
// სხვაობა მათ შორის
function ultimateMath(a, b, c){
    return(Math.max(a,b,c))
    return(Math.min(a,b,c))
    return(Math.max(Math.sqrt(a,b,c)))
    return(Math.min(Math.sqrt(a,b,c)))
}
// 8)შექმენი ფუნქცია checkSign(num)

// გამოიყენე Math.sign() და დაბეჭდე:
function checkSign(num){
    if(Math.sign(num)==1){
        return "positive"
    }

    else if(Math.sign(num)==-1){
        return "Negative"
    }


    else{
        return "Zero"
    }
}

// Positive

// ან

// Negative

// ან

// Zero

// 9)შექმენი ფუნქცია analyzeRandom() რომელიც:

// დააგენერირებს შემთხვევით რიცხვს -100-დან 100-მდე.
// დაბეჭდავს:
// Math.round()
// Math.floor()
// Math.ceil()
// Math.trunc()
// Math.abs()
// Math.sign()
function analyzeRandom(){
    let number = Math.random()
    return Math.round(number)
    return Math.floor(number)
    return Math.ceil(number)
    return Math.trunc(number)
    return Math.abs(number)
    return Math.sign(number)
}
