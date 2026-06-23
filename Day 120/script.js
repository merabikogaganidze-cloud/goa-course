// 1)შექმენი ფუნქცია analyzeTemperature(temp) რომელიც:

// თუ ტემპერატურა 30-ზე მეტია, დააბრუნებს "Hot".
// თუ 15-30 შუალედშია, დააბრუნებს "Normal".
// თუ 15-ზე ნაკლებია, დააბრუნებს "Cold".

// ternary
function analyzeTemperature(temp){
    if(temp > 30){
        return "Hot"
    }

    else if(temp > 15 && temp < 30){
        return "Hot"
    }
}
// 2)შექმენი ფუნქცია:

// calculateSalary(hoursWorked, hourlyRate = 20)

// რომელიც დააბრუნებს მთლიან ხელფასს.

// მაგალითად:

// calculateSalary(8) // 160
// calculateSalary(10, 30) // 300
function calculateSalary(hoursWorked, hourlyRate = 20){
    return hoursWorked * hourlyRate
}
// 3)შექმენი ფუნქცია numberType(num) რომელიც დააბრუნებს:

// "Positive"
// "Negative"
// "Zero"

// .sign()
function numberType(num){
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

// 4)ბილეთის ფასი

// შექმენი ფუნქცია:

// ticketPrice(age, isStudent = false)

// წესები:

// 12 წლამდე → 5 ლარი.
// 12-დან 60 წლამდე → 15 ლარი.
// 60+ → 8 ლარი.
function ticketPrice(age){
    if(age < 12){
        return 5
    }

    else if(age > 12 < 60){
        return 15
    }

    else{
        return 8
    }
}
// 5)შექმენი ფუნქცია:

// grade(score)

// რომელიც აბრუნებს:

// 90-100 → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// 0-59 → "F"


// switch()
function grade(score){
    score > 90  && score <= 100 ? console.log("a"):    score > 80  && score <= 89 ? console.log("b"):    score > 70  && score <= 79 ? console.log("c"):    score > 60  && score <= 69 ? console.log("d"):    score >0  && score <= 59 ? console.log("f"):
}

grade(85)