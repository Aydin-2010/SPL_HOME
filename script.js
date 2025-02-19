const element = document.getElementById("extra");
for(let i = 0; i < 100 ; i++){
  let li = document.createElement("li");
  li.textContent = "hi" + i;
  element.appendChild(li);
} 
