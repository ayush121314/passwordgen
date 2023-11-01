let rangecheck1=document.querySelector('.rangecheck');
let lengthvalue1=document.querySelector('.lengthvalue');
let copybtn1=document.querySelector('.copybtn');
let ans12=document.querySelector('.passwordtext');
let rangeans1=10;
lengthvalue1.innerText=10;
let symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
let indicator1=document.querySelector('.indicator');
let checkcol1=document.querySelector('.checkcol');
function takevalue(event)
{
    lengthvalue1.innerText=event.target.value;
    rangeans1=event.target.value;
    rangecheck1.style.backgroundSize= "50% 100%"
}
let copytext1=document.querySelector('copytext');
let copytextz1=document.querySelector('.copytextz');
function setcolor(color)
{
    checkcol1.style.backgroundColor=color;
    checkcol1.style.boxShadow=`0 0 12px 1px ${color}`
}
async function copytext()
{
    try {
       await navigator.clipboard.writeText(ans12.value);
       copytextz1.innerText='Copied';
       
        //alert(" CopContent");
    }
    catch (e) {
        alert("Something went wrong in CopyContent");
    }
}
copybtn1.addEventListener('click',()=>{
    if(ans12.value)
    copytext();
})
rangecheck1.addEventListener('click',takevalue); 
function generatenumber(min,max)
{
   return Math.floor((Math.random()*(max-min))+min);
}
function generateupper()
{
   let no=generatenumber(65,91);
   return String.fromCharCode(no);
}
function generatelower()
{
   let no= generatenumber(97,123);
   return  String.fromCharCode(no);
}
function generatenumber12()
{
   let no= generatenumber(0,10);
   return no;
}
function generatesymbol()
{
   let no= generatenumber(0,symbol.length);
   return   symbol[no];
}

function strength12()
{
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    if (numbers123[1].checked) hasUpper = true;
    if (numbers123[0].checked) hasLower = true;
    if (numbers123[2].checked) hasNumber = true;
    if (numbers123[3].checked) hasSymbol = true;
    if (hasUpper && hasLower && (hasNumber || hasSymbol) && rangeans1 >= 8) {
        indicator1.innerText='Strong';
        setcolor("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        rangeans1 >= 6
    ) {
        indicator1.innerText='Medium';
        setcolor("#ff0");
    } else {
        indicator1.innerText='Weak';
        setcolor("#f00");
    }
}
let a12=document.querySelector('.generate23');
let numbers123=document.querySelectorAll('.numbers12');
a12.addEventListener("click", () => 
{
    setcolor("#808080")
    indicator1.innerText=""
    copytextz1.innerText='';
    let ans="";
    ans12.value="";
    let arrayoffunction=[];
    let count=0;
    for(let m=0;m<4;m++)
    {
        if(numbers123[m].checked)
        count=count+1;
    }
    if(count>rangeans1)
    {
        lengthvalue1.innerText=count;
        rangeans1=count;
        rangecheck1.value=count;
    }
    if(numbers123[2].checked)
    {
        arrayoffunction.push(generatenumber12);
        ans+=generatenumber12();
    }
  
    if(numbers123[3].checked)
    {
        arrayoffunction.push(generatesymbol);
        ans+=generatesymbol();
    }
    if(numbers123[0].checked)
    {
        arrayoffunction.push(generatelower);
        ans+=generatelower();
    }
    if(numbers123[1].checked)
    {
        arrayoffunction.push(generateupper);
        ans+=generateupper();
    }
   
    for(let i=0;i<rangeans1-arrayoffunction.length;i++)
    {
        let no=generatenumber(0,arrayoffunction.length);
        ans+=arrayoffunction[no]();
    }
    ans12.value=ans;
    strength12();
})