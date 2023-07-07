import * as functions from "../Components/navbar.js";
import footer from "../Components/footer.js";
document.getElementById("nav-bar").innerHTML=functions.navbar();
document.getElementById("footer").innerHTML=footer();



//fetchdata();

//let src=document.getElementById("main").querySelector(".img").querySelector("img").src;

document.getElementById("item").addEventListener("keyup", function (e) {
  if(e.target.value)
  functions.betterFetchItems(e.target.value);
});


//document.getElementById("popup").addEventListener("click",myFunction);