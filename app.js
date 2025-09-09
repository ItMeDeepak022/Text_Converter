let card=document.querySelector(".card textarea");
let text=document.querySelector("textarea");

let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
  
  let upper='';
 btn1.addEventListener("click",()=>{
   upper=card.value.toUpperCase();
   text.value=upper;

 })
 btn2.addEventListener("click",()=>{
   upper=card.value.toLowerCase();
   text.value=upper;

 })
 btn3.addEventListener("click",()=>{
   upper=card.value.trim();
   text.value=upper;

 })
 btn4.addEventListener("click",()=>{
   upper=card.value.slice(0,-1);
   text.value=upper;

 })
 btn5.addEventListener("click",()=>{
    let remove='';
    card.value=remove;
     count1.innerHTML=`<h3>${remove.length}</h3><p>Characters</p>`;
     count2.innerHTML=`<h3>${remove.length}</h3><p>Number of Spaces</p>`;
     count3.innerHTML=`<h3>${remove.length}</h3><p>Number of Word</p>`;

 })

 let count1=document.querySelector(".stats .stat1");
 let count2=document.querySelector(".stats .stat2");
 let count3=document.querySelector(".stats .stat3");

 let val=0;
   card.addEventListener("keypress",()=>{
       val++;
       count1.innerHTML=`<h3>${val}</h3><p>Characters</p>`;
       let arr=card.value.split(" ");
       count2.innerHTML=`<h3>${arr.length}</h3><p>Number of Spaces</p>`;
       count3.innerHTML=`<h3>${arr.length}</h3><p>Number of Word</p>`;

 })

btn4.addEventListener("click",()=>{
   if(val>0){
     val--;
    count1.innerHTML=`<h3>${val}</h3><p>Characters</p>`;
   }
})

 

 

