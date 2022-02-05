let minus=document.getElementsByClassName('minus-btn');
for (let i=0; i<minus.length;i++){
    let min=minus[i];
    min.addEventListener('click',fn);
    function fn(){
        if(min.nextElementSibling.value==0){
            min.nextElementSibling.value=0;
        }else{
            min.nextElementSibling.value--;
        }
    n1();
    n2();
    n3();
    n4();
    totalN();
}
};
let plus=document.getElementsByClassName('plus-btn');
for (let i=0; i<plus.length;i++){
    let pls=plus[i];
    pls.addEventListener('click',fn);
    function fn(){
            pls.previousElementSibling.value++;
            n1();
            n2();
            n3();
            n4();
            totalN();
        };
};
let remove=document.getElementsByClassName('delete');
for (let i=0; i<remove.length;i++){
    let rmv=remove[i];
    rmv.addEventListener('click',fnc);
    function fnc(){
        c=document.getElementById('child');
        c.parentNode.removeChild(c);
        totalN();
        };
};
function n1(){
    let pr = document.getElementById("p1");
    let q = document.getElementById("q1");
    pr.innerHTML=90*q.value;
    }
function n2(){
    let pr = document.getElementById("p2");
    let q = document.getElementById("q2");
    pr.innerHTML=70*q.value;
    }
function n3(){
    let pr = document.getElementById("p3");
    let q = document.getElementById("q3");
    pr.innerHTML= 70*q.value;
    }
function n4(){
    let pr = document.getElementById("p4");
    let q = document.getElementById("q4");
    pr.innerHTML= 120*q.value;
    }    
function totalN(){
    let pt=document.getElementById("finalPrice");
    let p1 = document.getElementById("p1").innerHTML;
    let p2 = document.getElementById ("p2").innerHTML;
    let p3 = document.getElementById("p3").innerHTML;
    let p4 = document.getElementById("p4").innerHTML;

    pt.value=parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4);
    }