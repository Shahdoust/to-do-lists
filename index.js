// Darrell
// Declare Global Variables
const body = document.querySelector("body");
const itemDiv = document.querySelector(".itemDiv");
const checkBox = document.querySelector(".checkbox");
const listItem = document.querySelector(".listItem");

// Mark to-do item
checkBox.addEventListener("click", () => {
    if (checkBox.checked !== false) {
    listItem.style.textDecoration = "line-through";
    listItem.style.color = "green";
    const todayDate = `   Date: ${new Date().getDate()}` + `/` + `${(new Date().getMonth() + 1)}` + `/` + `${new Date().getFullYear()}, Time: ${new Date().getHours()}:` + `${new Date().getMinutes()}`;
    dateP  = document.createElement("p");
    dateP.setAttribute("class","date");
    dateP.innerText = todayDate;
    dateP.style.display = "inline";
    dateP.style.color = "grey";
    itemDiv.appendChild(dateP);
    dateP.style.textDecoration = "none !important";
    } else if (checkBox.checked !== true) {
    itemDiv.removeChild(dateP);
    listItem.style.textDecoration = "none";
    listItem.style.color = "black";
}
    });
console.dir(checkBox);
// Darrell