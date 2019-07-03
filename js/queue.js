function queue()
{
    let Ar=[];
    n=prompt("ENTER NUMBER OF ELEMENTS IN QUEUE: ")
    if(n=="")location.reload();
    else
    {

          let Ar=[];
          let ch;
          var f=0;
          var r=-1;
          
          while(true)
          {
              ch=parseInt(prompt("ENTER CHOICES 1)ENQUEUE 2)DEQUEUE 3)DISPLAY 4)EXIT "));
              if(ch==4) break;
              switch(ch)
              {
                    case 1:if(r==n)alert("QUEUE OVERFLOW");else {Ar.push(parseFloat(prompt("ENTER Element : "))); r++;}break;
                    case 2:if(f==r+1)alert("QUEUE UNDERFLOW");else{alert("DEQUEUED ELEMENT: "+Ar[f].toString());f++;}break;
                    case 3:if(f==r+1)alert("QUEUE EMPTY");else{var i;let Arr=[]; for(i=f;i<=r;i++)Arr.push(Ar[i]);Arr.toString(); alert("QUEUE OBTAINED: "+Arr);}break;
            
              }
              
          }
          
    }
}
