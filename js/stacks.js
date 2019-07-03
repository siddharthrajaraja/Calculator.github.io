function stack()
{  let n=prompt("ENTER NUMBER OF ELEMENTS IN STACK!! ");
   if(n=="")location.reload();
   else{
                let Ar=[]
                let val;
                var tos=0; 
            while (true)
            {
                
                var ch=parseInt(prompt("Enter choices 1)PUSH 2)POP 3)PEEP 4)DISPLAY 5)EXIT"));
            
                if(ch==5)break;
                
                switch(ch)
                {
                    case 1: if(tos ==n)alert("STACK OVERFLOW!!");
                            else
                            {
                            val=parseInt(prompt("Enter element in stack"));
                            Ar.push(val)
                            tos++;
                            } 
                            break;
                    case 2: 
                            if(tos==0) {alert("STACK UNDERFLOW");}
                            else
                                {   val=Ar.pop();
                                    alert("Popped Element from stack is : "+String(val));
                                    tos--;
                                }    
                            break;
                    case 3: if(tos==0)alert("STACK EMPTY");
                            else{
                                alert("PEEPED ELEMENT: "+String(Ar[tos]));
                                }    
                            break;
                    case 4: let cop=Ar;
                            alert("Stack : "+cop.toString());
                            break;
                }
            }

   }
    
}
