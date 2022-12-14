let p=(str:string)=>
{
    let str1 = "";
    for(let i=str.length-1;i>=0;i--)
        str1+=str[i];
        
    (str1.toLowerCase()===str.toLowerCase())? console.log("palindrome"):console.log("not palindrome");
}
p("Naman");
