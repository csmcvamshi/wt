function calc(){
    var a = parseInt(prompt("1)add 2)sub 3)mul 4)mul"));

    switch(a){
        case 1:
            var n=parseInt(prompt("enter no of values"));
            var sum=0;
            for(var i=0;i<n;i++)
            {
                sum+=parseInt(prompt("enter number "+(i+1)+" to add"));
            }

            alert("sum is " +sum);

            var x=confirm("do you want to continue");
            if(x==true){
                calc();
            }else{
                var q=confirm("do u reallly want to exit");
                if(q==true){
                    alert("mg");
                }else{
                    calc();
                }
            }

        case 2:
            var n=parseInt(prompt("enter no of values"));
            var sum=0;
            for(var i=0;i<n;i++)
            {
                sum-=parseInt(prompt("enter number "+(i+1)+" to add"));
            }

            alert("sub is " +sum);

            var x=confirm("do you want to continue");
            if(x==true){
                calc();
            }else{
                var q=confirm("do u reallly want to exit");
                if(q==true){
                    alert("mg");
                }else{
                    calc();
                }
            }

        case 3:
            var n=parseInt(prompt("enter no of values"));
            var sum=0;
            for(var i=0;i<n;i++)
            {
                sum*=parseInt(prompt("enter number "+(i+1)+" to add"));
            }

            alert("mul is " +sum);

            var x=confirm("do you want to continue");
            if(x==true){
                calc();
            }else{
                var q=confirm("do u reallly want to exit");
                if(q==true){
                    alert("mg");
                }else{
                    calc();
                }
            }
    }
}