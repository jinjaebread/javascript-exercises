//Creating Elements
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

//Adding Text Content
p.textContent = "Hey I'm red!";
h3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!"

//Styling
p.style.color = "red";
h3.style.color = "blue";
div.style.backgroundColor = "pink";
div.style.border;
div.style.borderColor = "black";
//div.setAttribute("style", "color: blue; background: white;");

//Appending
div.appendChild(h1);
div.appendChild(p2);

//Get it into the container
const container = document.querySelector("#container");
container.appendChild(div);