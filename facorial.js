function factorial(){
    var res=1;
    var a= parseInt(document.getElementById("num").value);
    for(var i = 1; i <= a; i++){
        res *= i;
}
document.getElementById("result").textContent="factorial of "+a+" is "+res;
}