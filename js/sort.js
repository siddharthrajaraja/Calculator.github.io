
function sorting(ch){
var n=prompt("HOW MANY ELEMENTS IN ARRAY ?");

if (n=="")
   location.reload();
else{

  var a=[];
var i=1;
while (n>0)
{
   z=parseInt(prompt("Enter "+String(i)+" element in array."));
    a.push(z);
    i=i+1
    n=n-1;
}
//alert(a);

let j=0;

//BUBBLE SORT:

for(i=0;i<a.length-1;i++)
{
  for(j=0;j<a.length-1;j++)
  {
    if (a[j]>a[j+1])
    {
      let t=a[j];
      a[j]=a[j+1];
      a[j+1]=t;
    }
  }
}


if(ch=='sort_array')
  {
    a.toString()

    alert("Sorted array is "+ a);

  }
else if(ch=='max_min_in_array')
  {
    
    alert("Maximum value : "+String(Math.max(...a))+ "\n"+"Minimum value : "+String(Math.min(...a)));
  }


}   
  
}




