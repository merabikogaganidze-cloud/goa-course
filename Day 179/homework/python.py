# // 1. დაამთავრეთ საკლასო.

# // 2. მომხმარებელს შემოატანინეთ სახელი და 10-ჯერ გამოიტანეთ მისი სახელი.
name = input("enter name: ")
print(name *10)
# // 3. მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის ჩათვლით ყველა რიცხვი შეკრიბეთ.
number = int(input("enter num: "))
for i in range(number+1):
    print(i)
# // 4. მომხმარებელს შემოატანინეთ ტექსტი და ამ ტექსტის თითოეული სიმბოლო გამოიტანეთ სათითაოდ და ტირეებით. (მაგალითად  მომხმარებელმა შემოიტანა Goa.  უნდა გამოიტანოთ:
text=input("enter word: ")
for i in text:
    print("-" + i + "-")
# // 5. მომხმარებელს შემოატანინეთ რიცხვი და გაიგეთ ლუწია თუ კენტი.
number2 = int(input("enter num: "))
if number2 % 2 == 0:
    print("ლუწი")
else:
    print("კენტი")
# // 6. for loop-ის გამოყენებით 100-მდე გამოიტანეთ რიცხვები
for i in range(100):
    print (i)
# // 7. for loop-ის გამოყენებით 2-დან 200-მდე გამოიტანეთ ყველა რიცხვი
for i in range(2,200):
    print (i)
# // 8. for loop-ის გამოყენებით 2-დან 300-მდე 5-ის გამოტოვებით გამოიტანეთ ყველა რიცხვი
for i in range(2,300,5):
    print(i)
# // 9. მომხმარებელს შემოატანინეთ 1-12-მდე რიცხვი. და გამოიტანეთ შესაბამისი თვე. (თუ შემოიტანა 1 მაშინ გამოიტანეთ იანვარი)
number3 = int(input("enter num 1-12: "))
if number3 == 1:
    print("January")
elif number3 ==2:
    print("feburary")
elif number3 ==3:
    print("march")
elif number3 ==4:
    print("april")
elif number3 ==5:
    print("may")
elif number3 ==6:
    print("june")
elif number3 ==7:
    print("july")
elif number3 ==8:
    print("august")
elif number3 ==9:
    print("september")
elif number3 ==10:
    print("october")
elif number3 ==11:
    print("november")
elif number3 ==12:
    print("december")
# // 10. გადაიმეორეთ დანარჩენი მასალაც (