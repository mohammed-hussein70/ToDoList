let todos = [];

function render() {
  let ul = document.getElementById("todoList");
  ul.innerHTML = "";

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.textContent = todo;
    // Add close button
    let close = document.createElement("span");
    close.innerHTML = "&times;";
    li.appendChild(close);

    close.onclick = function () {
      Delete(index);
    };

    ul.appendChild(li);
    // Add class check
    var list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    });
  });
}

function add() {
  let inputValue = document.querySelector(".myInput").value.trim();

  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  if (todos.includes(inputValue)) {
    alert("This item already exists!");
    return;
  }

  todos.push(inputValue);
  render();
  document.querySelector(".myInput").value = "";
}

function Delete(index) {
  todos.splice(index, 1);
  render();
}
document.querySelector(".Add").addEventListener("click", add);
console.log(todos);
