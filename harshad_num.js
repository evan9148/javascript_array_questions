var readlinesync = require("readline-sync");
var num = readlinesync.question("enter the num:- ");
var store = num;
var sum = 0;
while (num>0){
    var rev = num%10;
    var sum = sum+rev;
    var num = num//10;
if (store%sum==0){
    console.log("harshad");
    break
}else{
    console.log("not harshad");
    break
}
}

