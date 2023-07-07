export function navbar(){
    return `
        <nav>
            <div>
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

export async function fetchdata(){
    let res  = await fetch("https://gentle-ant-handkerchief.cyclic.app/plantDetails");
    let data = await res.json();
    // console.log(data);
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
    let filteredData = data.filter(item => item.name.includes(query));
    console.log(filteredData);
    console.log(data);
    let table=document.getElementById("popup").querySelector("table");
    table.innerHTML=null;
    data.forEach(element => {
        let name = element.name;
        let tr=document.createElement("tr");
        let td = document.createElement("td");
        td.textContent=name;
        tr.append(td);
        table.append(tr);
        let item=document.getElementById("item");
        tr.addEventListener("click",()=>{
            console.log(td.textContent)
            item.value=td.textContent;
            item.placeholder=td.textContent;
            document.getElementById("popup").style.display="none";
        })
    });
    if(item.value)
    document.getElementById("popup").style.display="block";
    else document.getElementById("item").placeholder="Search Plant";
  }

  export let betterFetchItems = debounce(fetchItems, 1500);
  