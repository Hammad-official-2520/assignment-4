var city = prompt("Enter Your City name")
if(city==="karachi"){
    alert("“Welcome to city of lights”")
}
var gender = prompt("Enter Your gender")
if(gender==="male"){
    alert("Good Morning Sir.")
}
else if(gender==="female")
    alert("Good Morning Ma’am.")


var signal = prompt("Signal Colour")
if(signal==="red"){
    alert("Must Stop")
}
else if(signal==="Yellow")
    alert("Ready to move")

else(signal==="green")
    alert("Move now")


var  rem_fuel = +prompt("Enter remaining Fuel litres")
if(rem_fuel< "0.25"){
    alert("“Please refill the fuel in your car”")
}

document.write("<h1>Marks Sheet </h1>")
var total = 300
var obt = +prompt("Enter Obtained Marks")
var per = obt/total*100
document.write("Totals Marks : 300")
document.write("</br>","Obtained Marks : " ,obt)
document.write("</br>","Percentage : " , per ,"%")
if(per>="80"){
    document.write( "<h1> GRADE :A+  </h1>"+"</br>" , "</br>","Remarks : Excellent")
}
else if(per>="70" ){
    document.write("<h1> GRADE :A  </h1>"+"</br>" ,"</br>","Remarks : Good")
}

else if(per>="60" )
    document.write("<h1> GRADE :B  </h1>"+"</br>" ,"</br>","Remarks : You need to Improve!")

else if(per<"60")
   document.write("<h1> GRADE :F  </h1>"+"</br>" ,"</br>","Remarks : Sorry!")

   document.write("<h1>Guess game: </h1>")
   var a = 4
   var num = +prompt("guess a number between 1 to 10")
   if(num===a){
       document.write("BINGO you won")
   }
   
   if(num===++a){
       document.write(" you are close")
   }


var num = +prompt("Enter number \n Divisible by 3")
var div = num/3
alert(div)


var temp = +prompt("Temperature")
if(temp > "40"){
    alert("“It is too hot outside.”")
}
else if(temp > "30"){
    alert("“The Weather today is Normal.”")
}
else if(temp > "20"){
    alert("“Today’s Weather is cool.”")
}
else if(temp > "10")
    alert("“OMG! Today’s weather is so Cool.”")





var numb1 = +prompt( "Enter First Number")
var numb2 = +prompt( "Enter Second Number")
var ope = +prompt( "Enter Operation")
var res = (numb1 ,"+","-","*","/",numb2)
if(numb1 ,"+","-","*","/",numb2){
    alert(res)
}



 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}


 if("car" < "cat"){
alert("car is smaller than cat");
}
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");}




var subjects = ["phys","chem","math","urdu","isl"];
var a = +prompt("enter no")
var result = subjects.splice(a,1)
console.log(result)


var a =8
var num = +prompt("guess a number between 1 to 10")
if(num===a){
    document.write("BINGO you won")
}

if(num===++a){
    document.write(" you are close")
}


var a = +prompt("enter first number")
var o = prompt("enter operation")
var b = +prompt("enter  second number")
if(o== "+" ){document.write(a+b)}
if(o== "-" ){document.write(a-b)}
if(o== "*" ){document.write(a*b)}
if(o== "/" ){document.write(a/b)}



var a = prompt("enter a vowel")
if(a=="a"){
    alert("true")
}else if(a=="e"){alert("true")}else if(a=="i"){alert("true")}else if(a=="o"){alert("true")}else if(a=="u"){alert("true")}
else{alert("false")}




var p="Hammad"
var a =prompt("enter password")
if(a==""){alert("enter password plz")}
else if(a==="Hammad"){alert("correct")}
else{alert("wrong password")}

//-------------------------------- Chap 12 & 13 k 6 sawal se age kran h--------------------------------///////////









