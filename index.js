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
  console.dir(mainContainer);

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
  innerInputDiv.appendChild(inputData);

  // Adding click button to div input
  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("add-btn-input");
  buttonAdd.textContent = "Add";

  innerInputDiv.appendChild(buttonAdd);

  upperDiv.appendChild(innerInputDiv);

  return;
}

inputToDo();

// Add list of input to div main section
function addListToDiv() {
  const divMain = document.querySelector(".to-do-text-div");

  //Creating list of element to be added
  const listItem = document.createElement("li");
  listItem.classList.add("add-item-to-list");
  divMain.appendChild(listItem);
}

addListToDiv();
