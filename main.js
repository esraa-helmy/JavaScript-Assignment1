//  ^ 1- Write a program that allow to user enter number then print it?
// var num = prompt("Enter your number")
// console.log(num)


// & 2 -Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no?
// var num = prompt("Enter your number")
// if (num%4 == 0 && num%3==0 ) {
//     console.log("Yes") 
// }else{
//     console.log("No")
// }

// ? 3- Write a program that allows the user to insert 2 integers then print the max?
// var num1 =parseInt(prompt("Enter your first number")) 
// var num2 = parseInt(prompt("Enter your Second number")) 
// if (num1 > num2) {
//     console.log(num1) 
// }else{
//     console.log(num2)
// }


// * 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive?
// var num3 = parseInt(prompt("Enter Your Number"))
// if (num3 < 0) {
//     console.log("Negative")
    
// }else{
//     console.log("Positive")
// }

// & 5- Write a program that take 3 integers from user then print the max element and the min element?
// var num1 = parseInt(prompt("Enter Your first Number"))
// var num2 = parseInt(prompt("Enter Your second Number"))
// var num3 = parseInt(prompt("Enter Your third Number"))
// if (num1> num2 && num1 > num3 && num2 > num3 ) {
//     console.log("The max Element is: " , num1)
//     console.log("The min Element is: " ,num3)
    
// } else if (num1> num2 && num1 > num3 && num3 > num2) {
//     console.log("The max Element is: " , num1)
//     console.log("The min Element is: " ,num2)
    
// }  else if (num2> num1 && num2 > num3 && num1 > num3) {
//     console.log("The max Element is: " , num2)
//     console.log("The min Element is: " ,num3)
    
// } else if (num2> num1 && num2 > num3 && num3 > num1) {
//     console.log("The max Element is: " , num2)
//     console.log("The min Element is: " ,num1)
    
// }else if (num3> num1 && num3 > num2 && num1 > num2) {
//     console.log("The max Element is: " , num3)
//     console.log("The min Element is: " ,num2)
    
// }else {
//     console.log("The max Element is: " , num3)
//     console.log("The min Element is: " ,num1)
    
// }

// ^ 6- Write a program that allows the user to insert integer number then check If a number is oven or odd?
// var num = parseInt(prompt("Enter Your Number"))
// if (num%2 ==0) {
//     console.log("The Number Is Even")
// }else{
//     console.log("The Number Is Odd")
// }

// ? 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant?
// var char = prompt("Enter your Character")
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ||char == "A" || char == "E" || char == "I" || char == "U" || char == "O") {
//     console.log("Vowel")
// }else{
//     console.log("Constant")
// }


// * 8- Write a program that allows user to insert integer then print all numbers between1to that’s number?
// var num = parseInt(prompt("Enter Your Number"))
// for (let i = 1; i <= num ; i++) {
//     console.log(i)
// }
// & 9- Write a program that allows user to insert integer then print a multiplication table up to 12?
// var num = parseInt(prompt("Enter Your Number"))
// for (let i = 1; i <= 12 ; i++) {
//     console.log(num*i)
// }

// ^ 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number?
// var num = parseInt(prompt("Enter Your Number"))
// for (let i = 2; i <= num ; i+=2) {
//     console.log(i)
// }

// ? 11- Write a program that take two integers then print the power?
// var num1 = parseInt(prompt("Enter Your first Number"))
// var num2 = parseInt(prompt("Enter Your second Number"))
// console.log(num1**num2)


// * 12- Write a program to enter marks of five subjects and calculate total, average and percentage?
// var sub1 = parseInt(prompt("Enter Your grad for Subject 1"))
// var sub2 = parseInt(prompt("Enter Your grad for Subject 2"))
// var sub3 = parseInt(prompt("Enter Your grad for Subject 3"))
// var sub4 = parseInt(prompt("Enter Your grad for Subject 4"))
// var sub5 = parseInt(prompt("Enter Your grad for Subject 5"))
// var totalMark = sub1+sub2+sub3+sub4+sub5
// var avg = totalMark / 5
// var per = (totalMark/500)*100

// console.log("Total Mark: ",totalMark)
// console.log("Average Mark: ",avg)
// console.log("percentage: ",per)


// & 13- Write a program to input month number and print number of days in that month?
// var num1 = parseInt(prompt("Enter Number of Month"))
// if (num1 == 1 || num1 == 3 || num1 == 5  || num1 == 7  || num1 == 8  || num1 == 10 || num1 == 12) {
//     console.log("Days in Month: 31")
    
// }else if(num1 == 2){
//     console.log("Days in Month: 28")

// }else{
//     console.log("Days in Month: 30")
// }


// ^ 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade?

// var sub1 = parseInt(prompt("Enter Your grad for Physics"))
// var sub2 = parseInt(prompt("Enter Your grad for Chemistry"))
// var sub3 = parseInt(prompt("Enter Your grad for Biology"))
// var sub4 = parseInt(prompt("Enter Your grad for Mathematics"))
// var sub5 = parseInt(prompt("Enter Your grad for Computer"))
// var totalMark = sub1+sub2+sub3+sub4+sub5
// var per = (totalMark/500)*100
// if (per>=90) {
//     console.log("Grad A")
    
// }else if (per>=80){
//     console.log("Grad B")
// }else if (per>=70){
//     console.log("Grad C")
// }else if (per>=60){
//     console.log("Grad D")
// }else if (per>=50){
//     console.log("Grad E")
// }else{
//     console.log("Grad F")
// }

// & 15- Write a program to print total number of days in month? 
// var num1 = parseInt(prompt("Enter Number of Month"))
// switch (true) {
//     case num1 == 1 || num1 == 3 || num1 == 5  || num1 == 7  || num1 == 8  || num1 == 10 || num1 == 12 :
//         console.log("Days in Month: 31")
        
//         break;
//         case num1 == 2:
//         console.log("Days in Month: 28")
//         break;
//         case num1 == 4 || num1 == 6 || num1 == 9 || num1 == 11 :
//         console.log("Days in Month: 30")
        
//         break;

//     default:
//         break;
// }

// ? 16- Write a program to check whether an alphabet is vowel or consonant?
// var char = prompt("Enter your Character")
// switch (true) {
//     case char == 'a' || char == 'A' :
//         console.log("Vowel")
        
//         break;
//         case char == 'e' || char == 'E' :
//         console.log("Vowel")
        
//         break;
//         case char == 'i' || char == 'I' :
//         console.log("Vowel")
        
//         break;
//         case char == 'o' || char == 'O' :
//         console.log("Vowel")
        
//         break;
//         case char == 'u' || char == 'U' :
//         console.log("Vowel")
        
//         break;
            
//     default:
//         console.log("constant")
//         break;
// }

// ^ 17- Write a program to find maximum between two numbers?
// var num1 =parseInt(prompt("Enter your first number")) 
// var num2 = parseInt(prompt("Enter your Second number")) 
// switch (true) {
//     case num1 > num2 :
//         console.log("The max Element is: " , num1)
        
//         break;
         
//     default:
//         console.log("The max Element is: " , num2)
//         break;
// }

// * 18- Write a program to check whether a number is even or odd?
// var num = parseInt(prompt("Enter Your Number"))
// switch (true) {
//     case num%2 ==0 :
//         console.log("The Number Is Even")
        
//         break;
         
//     default:
//         console.log("The Number Is Odd")
//         break;
// }

// ? 19- Write a program to check whether a number is positive or negative or zero?
// var num = parseInt(prompt("Enter Your Number"))
// switch (true) {
//     case num > 0 :
//         console.log("Positive")
        
//         break;
         
//     default:
//         console.log("Negative")
//         break;
// }

// & 20- Write a program to create Simple Calculator?
// var num1 = parseFloat(prompt('Enter first number: '));
// var operator = prompt('Enter your operator ( +, -, * or / ): ');
// var num2 = parseFloat(prompt('Enter second number: '));
// switch (true) {
//     case operator =='+' :
//         console.log(num1 + num2)
//         break;

//         case operator =='-' :
//         console.log(num1 - num2)
//         break;

//         case operator =='*' :
//         console.log(num1 * num2)
//         break;
//         case operator =='/' :
//         console.log(num1 / num2)
//         break;
// }

