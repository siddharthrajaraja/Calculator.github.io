function prime(){
    let Ar=[];
    alert("HELLO!! HERE YOU CAN DETERMINE ALL PRIMES IN RANGE SPECIFIED [ 0 , 20000000 ] !! ")
    a=parseInt( prompt("SPECIFY LOWER BOUND!! : "))
    b=parseInt( prompt("SPECIFY UPPER BOUND!! : ") )
    
    if(a=="" || b=="" || (a<0 || b>2*Math.pow(10,7))){alert("INVALID RANGE SPECIFIED!!");location.reload();}
    else{
        console.log(a,b)

        for(var i=0;i<=b;i++)
        {
            Ar.push(true);
        }
        Ar[0]=false;
        Ar[1]=false;
        for(var i=2;i<Ar.length;i++)
        {
            if(Ar[i]==true){
                var j=2;
                while(i*j<=b)
                {
                    Ar[i*j]=false;
                    j++;
                    
                }
            }
            
        }
        console.log(Ar)
        
        let ans=[]
        for(var i=a;i<=b;i++)
        {
           if(Ar[i]==true) 
            ans.push(i);
        }
        console.log(ans)
        alert("PRIME NUMBERS IN RANGE "+String(a)+ " TO "+String(b)+" are "+String(ans))
    }

}