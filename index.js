// Darrell
// Mark to-do item
// checkBox.addEventListener("click", () => {
//     if (checkBox.checked !== false) {
//     listItem.style.textDecoration = "line-through";
//     listItem.style.color = "green";
//     const todayDate = `   Date: ${new Date().getDate()}` + `/` + `${(new Date().getMonth() + 1)}` + `/` + `${new Date().getFullYear()}, Time: ${new Date().getHours()}:` + `${new Date().getMinutes()}`;
//     dateP  = document.createElement("p");
//     dateP.setAttribute("class","date");
//     dateP.innerText = todayDate;
//     dateP.style.display = "inline";
//     dateP.style.color = "grey";
//     itemDiv.appendChild(dateP);
//     dateP.style.textDecoration = "none !important";
//     } else if (checkBox.checked !== true) {
//     itemDiv.removeChild(dateP);
//     listItem.style.textDecoration = "none";
//     listItem.style.color = "black";
// }
//     });
// Darrell
const sectionMain = document.querySelector(".main-section");

//Creating main container
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
sectionMain.appendChild(mainContainer);

//This div is created only for logo of page and title
function createLogo() {
  const divLogo = document.createElement("div");
  divLogo.classList.add("logo-div");
  mainContainer.appendChild(divLogo);
}

//Creating upper div in main container
function createUpperDiv() {
  const divUpper = document.createElement("div");
  divUpper.classList.add("upper-div");
  mainContainer.appendChild(divUpper);

  return divUpper;
}

function createMainDiv() {
  //Creating main section of page (add, edit, remove)
  const divMain = document.createElement("div");
  divMain.classList.add("main-div");
  mainContainer.appendChild(divMain);

  //Creating div section for text to-do list on left side
  const divToDoText = document.createElement("div");
  divToDoText.classList.add("to-do-text-div");
  divMain.appendChild(divToDoText);

  //Creating div section for buttons(edit, remove)
  const divToDoButtons = document.createElement("div");
  divToDoButtons.classList.add("edit-remove-btn-todo-div");
  divMain.appendChild(divToDoButtons);

  return divMain;
}

//Calling function to use for designing
const logoDiv = createLogo();
const upperDiv = createUpperDiv();
const mainDiv = createMainDiv();

//Function input data
function inputToDo() {
  //Creating inner div for input data
  const innerInputDiv = document.createElement("div");
  innerInputDiv.classList.add("input-data-to-do");

  // Adding input text to div input
  const inputData = document.createElement("input");
  inputData.classList.add("input-to-do-text");
  inputData.placeholder = "Please write task";
  innerInputDiv.appendChild(inputData);

  // Adding click button to div input
  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("add-btn-input");

  innerInputDiv.appendChild(buttonAdd);

  upperDiv.appendChild(innerInputDiv);
}

inputToDo();

//Removed item to right panel
function removedItem() {
  const removedDiv = document.createElement("div");
  removedDiv.classList.add("removed-div");

  const but = document.createElement("button");
  but.textContent = "eeee";
  removedDiv.appendChild(but);
  mainContainer.appendChild(removedDiv);
}
// removedItem();

// Add list of input to div main section
function allInOneDiv() {
  const divMain = document.querySelector(".to-do-text-div");
  const editRemoveTxtDiv = document.createElement("div");
  editRemoveTxtDiv.classList.add("edit-remove-txt-div");

  //Creating list of element to be added
  const btnClicked = upperDiv.children[0].children[1];
  const textInput = upperDiv.children[0].children[0];
  btnClicked.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.classList.add("add-item-to-list");

    //Create span inside list to show task text
    const spanTxt = document.createElement("span");
    spanTxt.classList.add("span-txt-task");
    spanTxt.textContent = textInput.value;
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("class", "checkBox");
    spanTxt.appendChild(checkBox);
    checkBox.addEventListener("click", () => {
      if (checkBox.checked !== false) {
        spanTxt.style.textDecoration = "line-through";
        spanTxt.style.color = "green";
        // const todayDate = `   Date: ${new Date().getDate()}` + `/` + `${(new Date().getMonth() + 1)}` + `/` + `${new Date().getFullYear()}, Time: ${new Date().getHours()}:` + `${new Date().getMinutes()}`;
        const date = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          new Date().getHours(),
          new Date().getMinutes()
        );
        const todayResult = date.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
        spanTxt.title = todayResult;
      } else if (checkBox.checked !== true) {
        spanTxt.title = "";
        spanTxt.style.textDecoration = "none";
        spanTxt.style.color = "black";
      }
    });
    listItem.appendChild(spanTxt);

    //Create buttons remove and edit
    const btRemove = document.createElement("button");
    btRemove.classList.add("btn-remove-todo");

    listItem.appendChild(btRemove);
    divMain.appendChild(listItem);
    btRemove.textContent = "";

    // divToDoButtons.appendChild(btRemove);

    btRemove.addEventListener("click", (e) => {
      listItem.remove();
    });
  });
  // sonia edit button
  const textElement = document.getElementById("text");
  const editButton = document.getElementById("editButton");

  editButton.addEventListener("click", () => {
    const currentText = textElement.textContent;
    const inputField = document.createElement("input");
    inputField.value = currentText;

    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newText = inputField.value;
        textElement.textContent = newText;
        textElement.style.display = "block";
        inputField.style.display = "none";
        editButton.style.display = "block";
      }
    });

    editButton.style.display = "none";
    textElement.style.display = "none";
    inputField.style.display = "block";

    textElement.parentNode.insertBefore(inputField, textElement);
  });
}

allInOneDiv();
