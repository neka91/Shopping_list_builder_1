let item,
    obj;
let shopList = [];

let quantity = prompt("How many items would you like to add?");
if (isNaN(quantity) || quantity == "") {
    alert("Please indicate quantity of items.");
    location.reload();
} else {
    for (let i = 0; i < Number(quantity); i++) {
        item = prompt("What would you like to add?");
        if (item == "") {
            break;
        }
        shopList.push(item);
    }
}

for (let i = 0; i < shopList.length; i++) {
    item = shopList[i];
    let li = document.createElement("li");
    li.innerHTML = item + "<br>";
    li.addEventListener("click", function (obj) {
        obj = this;
        obj.classList.toggle("clicked");
    });
    let ol = document.getElementById("ol");
    ol.appendChild(li);
}






