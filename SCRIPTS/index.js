import * as functions from "../Components/navbar.js";
import footer from "../Components/footer.js";


document.getElementById("nav-bar").innerHTML=functions.navbar();
let navbar=document.getElementById("navbar");
navbar.innerHTML=functions.reponsive_nav();
document.getElementById("footer").innerHTML=footer();



//fetchdata();

//let src=document.getElementById("main").querySelector(".img").querySelector("img").src;

document.getElementById("item").addEventListener("keyup", function (e) {
  if(e.target.value)
  functions.betterFetchItems(e.target.value);
  else{
    document.getElementById("popup").style.display="none";
  }
});


//document.getElementById("popup").addEventListener("click",myFunction);




  document.getElementById("menu").addEventListener("click",()=>{
    let rnav = document.getElementById("respnav");
    let state = rnav.style.display;
    if(!state || state=="none"){
      rnav.style.display="flex";
    }
    else{
      rnav.style.display="none";
    }
  })