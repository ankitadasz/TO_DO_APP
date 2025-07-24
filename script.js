// ✅ script.js
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("listcontainer");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Write something to continue!");
    return;
  }

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.textContent = input.value;
  li.appendChild(p);

  const span = document.createElement("span");
  span.innerHTML = "&#10006;";
  li.appendChild(span);

  list.appendChild(li);
  input.value = "";

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  span.addEventListener("click", (e) => {
    e.stopPropagation(); // So clicking on span doesn't trigger li click
    li.remove();
  });
});
