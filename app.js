let currentState = "";
let pastState = "";
let operationsdby = "";
let flag = "";
let partialRes = 0;
const CBTN = document.querySelector(".C");
const res = document.querySelector(".res");
const mult = document.querySelector(".mult");
const div = document.querySelector(".div");
const sum = document.querySelector(".sum");
const sub = document.querySelector(".sub");
const oneBTN =  document.querySelector(".one");
const twoBTN =  document.querySelector(".two");
const threeBTN =  document.querySelector(".three");
const fourBTN =  document.querySelector(".four");
const fiveBTN =  document.querySelector(".five");
const sixBTN =  document.querySelector(".six");
const sevenBTN =  document.querySelector(".seven");
const eigthBTN =  document.querySelector(".eight");
const nineBTN =  document.querySelector(".nine");
const zeroBTN = document.querySelector(".zero");
const backspaceBTN = document.querySelector(".backspace");
const equalsBTN = document.querySelector(".equals");

oneBTN.addEventListener("click", function(){
    currentState = '1';
    rfshres();
});
twoBTN.addEventListener("click", function(){
    currentState = '2'; 
    rfshres();
});
threeBTN.addEventListener("click", function(){
    currentState = '3';
    rfshres();
});
fourBTN.addEventListener("click", function(){
    currentState = '4';
    rfshres();
});
fiveBTN.addEventListener("click", function(){
    currentState = '5';
    rfshres();
});
sixBTN.addEventListener("click", function(){
    currentState = '6';
    rfshres();
});
sevenBTN.addEventListener("click", function(){
    currentState = '7';
    rfshres();
});
eigthBTN.addEventListener("click", function(){
    currentState = '8';
    rfshres();
});
nineBTN.addEventListener("click", function(){
    currentState = '9';
    rfshres();
});
zeroBTN.addEventListener("click", function(){
    currentState = '0';
    rfshres();
});
mult.addEventListener("click", function(){
    operationsdby = currentState;
    clear();
    flag = "mult";
});
div.addEventListener("click", function(){
    operationsdby = currentState;
    clear();
    flag = "div";
});
sum.addEventListener("click", function(){
    operationsdby = currentState;
    clear();
    flag = "sum";
});
sub.addEventListener("click", function(){
    operationsdby = currentState;
    clear();
    flag = "sub";
});
CBTN.addEventListener("click", function(){
   clear();
   console.log("clear");
});
equalsBTN.addEventListener("click", function(){
    if(flag === "mult"){ 
        currentState = currentState.trim();
        operationsdby = operationsdby.trim();

        if(currentState === "" || operationsdby === ""){
            console.error("String vazia encontrada em currentState ou operationsdby.");
            return;
        }

        let num1 = Number(operationsdby);
        let num2 = Number(currentState);
        console.log(num1);
        console.log(num2);

        if(!isNaN(num1) && !isNaN(num2)){
            partialRes = num1 * num2;
            currentState = partialRes.toString();
            res.innerHTML = currentState;
        } else {
            console.error("Não foi possível converter currentState ou operationsdby para números inteiros válidos.");
        }

        flag = ""; 
    }
    if(flag === "div"){ 
        currentState = currentState.trim();
        operationsdby = operationsdby.trim();

        if(currentState === "" || operationsdby === ""){
            console.error("String vazia encontrada em currentState ou operationsdby.");
            return;
        }

        let num1 = Number(operationsdby);
        let num2 = Number(currentState);
        console.log(num1);
        console.log(num2);

        if(!isNaN(num1) && !isNaN(num2)){
            partialRes = num1 / num2;
            currentState = partialRes.toString();
            res.innerHTML = currentState;
        } else {
            console.error("Não foi possível converter currentState ou operationsdby para números inteiros válidos.");
        }

        flag = ""; 
    }
    if(flag === "sum"){ 
        currentState = currentState.trim();
        operationsdby = operationsdby.trim();

        if(currentState === "" || operationsdby === ""){
            console.error("String vazia encontrada em currentState ou operationsdby.");
            return;
        }

        let num1 = Number(operationsdby);
        let num2 = Number(currentState);
        console.log(num1);
        console.log(num2);

        if(!isNaN(num1) && !isNaN(num2)){
            partialRes = num1 + num2;
            currentState = partialRes.toString();
            res.innerHTML = currentState;
        } else {
            console.error("Não foi possível converter currentState ou operationsdby para números inteiros válidos.");
        }

        flag = ""; 
    }
    if(flag === "sub"){ 
        currentState = currentState.trim();
        operationsdby = operationsdby.trim();

        if(currentState === "" || operationsdby === ""){
            console.error("String vazia encontrada em currentState ou operationsdby.");
            return;
        }

        let num1 = Number(operationsdby);
        let num2 = Number(currentState);
        console.log(num1);
        console.log(num2);

        if(!isNaN(num1) && !isNaN(num2)){
            partialRes = num1 - num2;
            currentState = partialRes.toString();
            res.innerHTML = currentState;
        } else {
            console.error("Não foi possível converter currentState ou operationsdby para números inteiros válidos.");
        }

        flag = ""; 
    }
});
function backspace(){
    currentState = currentState.slice(0, -1);
    pastState = currentState;
    res.innerHTML = currentState;
};

backspaceBTN.addEventListener("click", function(){
    backspace();
});
function rfshres(){
    currentState = pastState + currentState;
    pastState = currentState;
    res.innerHTML = currentState;
};

function clear(){
    currentState = "";
    pastState = "";
    flag = "";
    res.innerHTML = "";
};
