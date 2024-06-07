let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let stats = document.getElementById("result");
let fvalue = document.getElementById("fvalue");
let demo = document.getElementById("demo");
let demo1 = document.getElementById("demo1");
let drop1 = document.getElementById("drop1");
let drop2 = document.getElementById("drop2");

function converter(wt, ht){
    let value;
    if(drop1.value == 'kilogram' && drop2.value == 'centimeter'){
        value = (wt) / (ht * ht * 0.0001);
    }
    else if(drop1.value == 'kilogram' && drop2.value == 'meter'){
        value = (wt) / (ht * ht);
    }
    else if(drop1.value == 'pound' && drop2.value == 'centimeter'){
       value = (0.453 * wt) / (ht * ht * 0.0001);
    }
    else if(drop1.value == 'pound' && drop2.value == 'meter'){
       value = (0.453 * wt) / (ht * ht);
    }
    

    return value;
}

function bmiCalci(){
    let value = converter(weight.value, height.value);
    fvalue.innerHTML = value.toPrecision(6);
    stats.style.fontWeight = "bold";
    if (value >= 0 && value < 18.5) {
        fvalue.style.color = `rgb(${0}, ${242}, ${255})`;
        stats.style.color = `rgb(${0}, ${242}, ${255})`;
        stats.innerText = "! UnderWeight !"
    }
    else if (value >= 18.5 && value <= 24.9) {
        fvalue.style.color = "chartreuse";
        stats.style.color = "chartreuse";
        stats.innerText = "Normal :)"
    }
    else if (value >= 25.0 && value <= 29.9) {
        fvalue.style.color = "yellow";
        stats.style.color = "yellow";
        stats.innerText = "! OverWeight !"
    }
    else if (value >= 30 && value <= 34.9) {
        fvalue.style.color = "orange";
        stats.style.color = "orange";
        stats.innerText = " !! Obese !!"
    }
    else if(value >= 35 && value < 200){
        fvalue.style.color = `rgb(${255}, ${70},${61})`;
        stats.style.color = `rgb(${255}, ${70},${61})`;
        stats.innerText = "!!! Extremely Obese !!!"
    }

    else if(value<=0){
        fvalue.innerText = "Your Data in Invalid!";
        fvalue.style.color = "red";
        stats.innerText = " ";
    }
    else if(value>=200){
        fvalue.style.color = "mediumslateblue";
        stats.innerText = "Kindly recheck your data.";
        stats.style.color = "white";
    }
    else{
        fvalue.innerText = "Kindly fill the data.";
        stats.innerText = " ";
        fvalue.style.color = "white";
    }
    demo.style.display = "none";
    demo1.style.display = "none";
    stats.style.display = "block";
    fvalue.style.display = "block";
}

function resetAll(){
    weight.innerText = " ";
    height.innerText = " ";
    fvalue.innerText = " ";
    stats.innerText = " ";
    demo.style.display = "block";
    demo1.style.display = "block";
    demo.style.color = "white";
    demo1.style.color = "white";
    weight.placeholder = "in kg";
    height.placeholder = "in cm";
}

function _drop1(){
    if(drop1.value == "kilogram"){
        weight.placeholder = `in kg`;
    }
    
    else if(drop1.value == "pound"){
        weight.placeholder = `in lb`;
    }
}

function _drop2(){
    if(drop2.value == "centimeter"){
        height.placeholder = `in cm`;
    }
    else if(drop2.value == "meter"){
        height.placeholder = `in m`;
    }
    else if(drop2.value == "feet & inches"){
        height.placeholder = `in ft & inch (ft.inch)`;
    }
}

button.addEventListener('click', bmiCalci);

reset.addEventListener('click', resetAll);