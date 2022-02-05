

let button = document.getElementsByClassName("zmdi zmdi-plus");
 for(i=0;i<button.length;i++){
let btn =button[i];

btn.addEventListener("click",function(){
    let price= document.querySelector(".item");
price.value++;
   

})


 }