//-----popup box---------------
const addTask = document.getElementById('pop')
let visiblee = false;
const parent = document.getElementById('tasklist')

function showAddTask() {
    if (visiblee) {
        addTask.classList.remove("hide")
        visiblee = false;
        parent.classList.add('blur-page');

    } else {
        addTask.classList.remove("hide")
        visiblee = true;
        parent.classList.add('blur-page');

    }

}
function hideAddTask() {
    //const addTask = document.getElementById('pop')
    addTask.setAttribute("class", "popupbox   hide");
    parent.classList.remove("parent");
}



//--------------hide pop up box------
function hideAddTask() {
    addTask.classList.add("hide")
    parent.classList.remove('blur-page');
    visiblee = false;

}

//---------------creating card by js---------

const containerCard = document.getElementById("cardcontainer")
const newCardName = document.getElementById("cardName")
function addCard() {
    var newCard = document.createElement("div")
    var cardTitle = document.createElement("h2")
    var hrline = document.createElement("hr")
    var itemList = document.createElement("div")
    var deleteButton = document.createElement("button")
    var addItem = document.createElement("button")



    //-----------appending child element----------
    newCard.appendChild(cardTitle)
    newCard.appendChild(itemList)
    newCard.appendChild(hrline)
    newCard.appendChild(deleteButton)
    newCard.appendChild(addItem)
    containerCard.appendChild(newCard)

    //-------giving style to card made by js-----------
    newCard.classList.add("flexcard")
    deleteButton.classList.add("deleteButton")


    //-------------giving value on cards-------
    cardTitle.innerText = newCardName.value
    newCardName.value = ""
    deleteButton.innerHTML = "delete";
    addItem.innerHTML = "+"

    /*  deleteButton.style = `
      color:rgb(109, 5, 45);
      background-color:antiquewhite;
      margin:auto;
      margin-bottom:10px;
      height:50px;
      width:100px;
      font-size:18px;
      border:3px solid rgb(156, 96, 110) 
      border-radius:8px;
      `;
      addItem.style = `
      color:rgb(109, 5, 45);
      background-color:antiquewhite;
      margin:auto;
      margin-bottom:-10px;
      font-size:18px;
      border:3px solid rgb(156, 96, 110) 
      border-radius:8px;
      `;
  */


    function popup2(itemList) {
        var head = document.createElement("h3");
        itemList.appendChild(head);
        let body = document.querySelector('body')
        var pop3 = document.createElement("div");
        pop3.classList.add("pop3")
        pop3.style.display = "block";
        var h2 = document.createElement("h2")
        h2.innerText = "Add New List";
        let input = document.createElement("input")
        input.setAttribute.("id", "newCardName")
    }
}