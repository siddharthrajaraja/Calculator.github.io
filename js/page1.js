function calc(op)
           {
             var  a=parseFloat(document.getElementById("text1").value,10);
             var b=parseFloat(document.getElementById("text2").value,10);
             let ans; 
             let displaystring="Mod operator";

             try{
                 
              switch(op)
              {
                  case '+': displaystr="Addition"; ans=a+b;break;
                  case '-': displaystr="Substraction";ans=a-b;break;
                  case '*':displaystr="Multiplication";ans=a*b;break;
                  case '/':displaystr="Division" ;ans=a/b;break;
                  case '%':displaystr="Mod operator"; ans=a%b;break;

              }  
             document.getElementById("Lab1").innerHTML="Result of "+ displaystr +" is "+String(ans);
                
             }
             catch(Exception)
             {
                   window.alert(Exception); 
             }
           
           
           }
      