const yourInput = document.getElementById("yourInput");
const addButton = document.getElementById("bbtn");
const lista = document.getElementById("listElement");

addButton.addEventListener("click", function () {
  let list = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerText = "delete";
  list.innerText = yourInput.value;
  lista.appendChild(list);
  yourInput.value = "";
  list.style.listStyle = "none";
  lista.appendChild(btn);
  btn.addEventListener("click", function () {
    list.remove();
    btn.remove();
  });
});
function reloadPage() {
  window.location.reload();
}
