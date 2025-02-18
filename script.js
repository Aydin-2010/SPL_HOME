let ul = document.getElementById("extra");

for (let i = 1; i <= 1000; i++) {  // Adding 10 list items
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
}
