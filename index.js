let num1 = 8;
let num2 = 10;

//ugly code
function numbers(){
if(num1 > 0){
    if(num2 === 10){
        return true;
    }
} else if (num1 > 0){
    if(num2 !== 10) {
        return false;
    }
} else {return false};
}

//beautiful code

function equalsTen(){
return num1 > 0 && num2 === 10 ? true : false;
}

console.log(equalsTen())