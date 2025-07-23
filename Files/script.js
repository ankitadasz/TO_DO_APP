const input = document.getElementById("input");
const list = document.getElementById("listcontainer");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("INSERT TEXT TO ADD😊");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveItem();
  }
});

list.addEventListener("click",(el)=>{
    if(el.target.tagName=="LI"){
        el.target.classList.toggle("checked");
        saveItem();
    }
    else if(el.target.tagName=="SPAN"){
        el.target.parentElement.remove();
        saveItem()
    }
},false)

function saveItem(){
    localStorage.setItem("data",list.innerHTML);
}
function showItem(){
    list.innerHTML=localStorage.getItem("data");
}
showItem();
