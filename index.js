const openBtn = document.querySelector(".openBtn"); 
const gardiner = document.querySelectorAll(".gardin"); 


// øppna gardiner nær øppna pressas ner 
// visa 

openBtn.addEventListener("click",() =>{
  gardiner.forEach((gardin) =>{
    gardin.style.animationName = "openGardin"; 
    gardin.style.animationDuration = "1s"; 
    gardin.style.animationTimingFunction = "ease-in"; 
    gardin.style.animationFillMode = "forwards"; 
  }); 
  openBtn.style.display = "none";   
}); 

const orderBtn = document.querySelector(".orderBtn"); 
const matkort = document.querySelector(".matkort"); 
const orderCard = document.querySelector(".orderCard"); 

orderBtn.addEventListener("click", () =>{
  matkort.style.display = "none"; 
  orderCard.style.display = "block"; 
})
