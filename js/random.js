
var text="";
function qosh(number){
    text  = text + number;
    document.getElementById("KalkulatordaSonlar").value = text;
    
}

function func(){
    var s = /\d+/g;
    var nums = text.match(s);
    var num1 = parseInt(nums[0]);
    var num2 = parseInt(nums[1]);
    
    var getAllSign=/\D+/g;
    var needSign = text.match(getAllSign);
    needSign  = needSign[needSign.length-1];
   
   var d; 
    switch(needSign){
        
        case '+': d=num1+num2; break;
        case '-': d=num1-num2; break;
        case '/': d=num1/num2; break;
        case '*': d=num1*num2; break;
    } 
    text= d.toString();
    Javob();
}    

function Qaytish(){
    console.log(text);
    text = text.slice(0,-1);
    Javob();
}
function Tozalash(){
    text = "";
    Javob();
}
function Javob(){
    document.getElementById("KalkulatordaSonlar").value = text;
}