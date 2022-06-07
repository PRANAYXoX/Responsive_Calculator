var pd1;
var eq="";
var screen=document.getElementsByClassName('screen');
screen[0].innerText="0";
var key=document.getElementsByClassName('key');
for(let i=0;i<key.length;i++)
{
    key[i].addEventListener('click',function(){
        pd1=this.innerText;
        pd1.toString();
        if(pd1==="C")
        {
            clearScreen();
        }else if(pd1=="DEL"){
            deleteChar();
        }else if(pd1=="="){
            var res=eval(eq);
            eq=res;
            screen[0].innerText="ANS:"+res;
        }else{ 
        evaluation(pd1);
        }
    });
}

function evaluation(myPd)
{
eq+=myPd;
screen[0].innerText=eq;
}

function clearScreen()
{
    screen[0].innerText="0";
    eq="";
}

function deleteChar()
{
    var arr=eq.split('');
    arr.pop();
    eq="";
    for(let i=0;i<arr.length;i++)
    {
        eq+=arr[i];
    }
    screen[0].innerText=eq;
}