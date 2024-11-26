// function newElement() {
//   let inputValue = document.querySelector(".myInput").value;

//   let ul = document.querySelector("#myUl");

//   let inputText = document.createTextNode(inputValue);
//   let li = document.createElement("li");
//   li.appendChild(inputText);

//   //   checked input not Empty

//   if (inputValue.trim() === "") {
//     alert("You must write something!");
//   } else {
//     ul.appendChild(li);
//   }

//   if (itemsArray.includes(inputValue)) {
//     alert("This item already exists!");
//   }

//   itemsArray.push(inputValue);

//   //   Add button close

//   let close = document.createElement("span");
//   close.innerHTML = "&times";
//   li.appendChild(close);

//   //   on click close button hide li
//   close.onclick = function () {
//     li.style.display = "none";
//     itemsArray = itemsArray.filter((item) => item !== inputValue);
//   };
// }

// Add class to li

// var list = document.querySelector("ul");
// list.addEventListener("click", function (ev) {
//   if (ev.target.tagName === "LI") {
//     ev.target.classList.toggle("checked");
//   }
// });
