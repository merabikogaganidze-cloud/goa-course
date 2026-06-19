// შექმენით ფუნქცია სადაც შეინახავთ ორ პარამეტრს --> sityva , sityvisDasawyisi , მიანიჭე ამ ორივე პარამეტრს default მნიშნველობები მაგ: avtosadguri  და avt 


// შემდეგ შეამოწმე ფუნქციაში , თუ sityva ისყება sityvisDasawyisi ზე მაშინ დააბრუნოს ფუნქციამ --> "iwyeba" სხვა შემთხვევაში დააბრუნე "ar iwyeba" 

// გამოიძახე ფუნქცია ორჯერ,ერთხელ არგუმენტებით მეორედ არგუმენტების გარეშე(თან დააკონსოლლოგე გამოძახხებული ფუნქციები რომ ნახოთ შედეგი)და ნახეთ შედეგი

// ქვემოთ კომენტარის სახით ახსენით თუ რატომ დაბეჭდა პირველმაფუნქციამ ეს შედეგი და რატომ დაბეჭდა მეორე ფუნქციამ ეს შედეგი
// meoreshi default imitoro no atribut pirvelSiu rac atributia 
function s(st = "avtosadguri",std = "avt"){
    if(st.startsWith(std)){
        return("iwyeba")
    }

    else{
        return("ar iwyeba")
    }
}

console.log(s("baro","ba"))
console.log(s())
