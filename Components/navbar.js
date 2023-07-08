export function navbar(){
    return `
        <nav>
            <div id="logo>
                <p><a href="./index.html">Green Paradise</a></p>
            </div>
            <div>
                <p><a href="./productPage.html">Catlog</a></p>
                <p><a href="">Sale</a></p>
                <p><a href="./checkOutPage.html">Delivery & Payment</a></p>
                <p><a href="">Contact</a></p>
            </div>
            <div>
                <p><input type="text" id="item" placeholder="Search Plant"></p>
                <p><button id="search"><i class="fa-solid fa-magnifying-glass fa-lg"></i></button></p>
                <p><a href=""><i class="fa-solid fa-language fa-lg"></i></a></p>
                <p><a href="./SingIn.html"><i class="fa-solid fa-user fa-lg"></i></a></p>
                <p><a href=""><i class="fa-solid fa-cart-shopping fa-lg"></i></a></p>
            </div>
        </nav>`
}

export function reponsive_nav(){
    return `
    <nav>
    <div>
      <p><input type="text" id="item" placeholder="Search Plant" style="width: 100%;"></p>
      <p><button id="search"><i class="fa-solid fa-magnifying-glass fa-lg"></i></button></p>
      <p><a href=""><i class="fa-solid fa-language fa-lg"></i></a></p>
    </div>
    <div style="width: 100%;">
      <div id="logo">
        <p><a href="./index.html">Green Paradise</a></p>
      </div>
      <div>
          <button id="menu"><i class="fa-solid fa-bars fa-2xl"></i></button>
      </div>
    </div>
    <div id="respnav">
        <p><a href="./SingIn.html">Login</a></p>
        <p><a href="./productPage.html">Catlog</a></p>
        <p><a href="">Contact</a></p>
        <p><a href="">Sale</a></p>
        <p><a href="">Cart</a></p>
        <p><a href="./checkOutPage.html">Delivery & Payment</a></p>
    </div>
  </nav>`
}

export async function fetchdata(){
    let res  = await fetch("https://gentle-ant-handkerchief.cyclic.app/plantDetails");
    let data = await res.json();
    console.log(data);
    document.getElementById("item").addEventListener("keyup",()=>{
        let val = document.getElementById("item").value;
        if(!val) return;
        else{
            console.log(data);
        }
    })
}



export const debounce = (func, delay) => {
    let timeoutId;
    
    return function(...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  
  };

  export async function fetchItems(query) {
    console.log(`fetch request made`);
    let res = await fetch(`https://gentle-ant-handkerchief.cyclic.app/plantDetails?q=${query}`);
    let data = await res.json();
    console.log(data)
    let table=document.getElementById("popup").querySelector("table");
    table.innerHTML=null;
    let item=document.getElementById("item");
    data.forEach(element => {
        let name = element.name;
        let tr=document.createElement("tr");
        let td = document.createElement("td");
        td.textContent=name;
        tr.append(td);
        table.append(tr);
        tr.addEventListener("click",()=>{
            item.value=td.textContent;
            item.textContent=td.textContent;
            localStorage.setItem("id",element.id);
            document.getElementById("popup").style.display="none";
        })
    });
    if(item.value)
    document.getElementById("popup").style.display="block";
    else document.getElementById("popup").style.display="none";
  }

  export let betterFetchItems = debounce(fetchItems, 1500);
  