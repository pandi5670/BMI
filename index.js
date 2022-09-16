let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let result = document.getElementById("output");
if(height==''||weight==''){
    alert('Please fillup all fields');
    return;
}
height = height/100;
let bmi = (weight/(height*height)).toFixed(2);
if(bmi>=0 && bmi<=16){
    result.innerHTML = ('under weight');
}else if(bmi>16 && bmi<=25){
    result.innerHTML = ('normal weight');
}else if(bmi>25 && bmi<=40){
    result.innerHTML = ('over weight');
}else{
    result.innerHTML = ('obesity');
}

})