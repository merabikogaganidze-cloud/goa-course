goa = print

k= input ("gimmi a number bro:  ")
if k == 1:
    goa ("monday")

elif k == 2:
    goa ("tuesday")

elif k == 3:
    goa ("wednesday")

elif k == 4:
    goa ("thursday")

elif k == 5:
    goa ("fryday")

elif k == 6:
    goa ("saturday")

elif k == 7:
    goa ("sunday")

else:
    goa("none")


how= 1
for i in range(k):
    how*=i