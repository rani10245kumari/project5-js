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
//--------------hide pop up box------
function hideAddTask() {
    /* const addTask = document.getElementById('pop')
     addTask.setAttribute("class", "popupbox   hide");
     parent.classList.remove("parent");
     parent.classList.remove('blur-page');
     visiblee = false;
     addTask.classList.add("hide")*/
    pop.remove()

}






//---------------creating card by js---------

const containerCard = document.getElementById("cardcontainer")
const newCardName = document.getElementById("cardName")
let selectCard = document.getElementById("selectedcard")
let navbar = document.querySelector("header")
const blankspace = document.getElementById("blankk")
const backbutton = document.getElementsByClassName("backbutton")
const plussign = document.getElementsByClassName("plus2")
let button3 = document.getElementsByClassName("button3")



function addCard() {
    var newCard = document.createElement("div")
    var cardTitle = document.createElement("h2")
    var hrline = document.createElement("hr")
    var itemList = document.createElement("div")
    var deleteButton = document.createElement("button")
    var addItem = document.createElement("button")



    //-----------appending child element----------
    newCard.appendChild(cardTitle)
    newCard.appendChild(hrline)
    newCard.appendChild(itemList)

    newCard.appendChild(deleteButton)
    newCard.appendChild(addItem)
    containerCard.appendChild(newCard)

    //-------giving style to card made by js-----------
    newCard.classList.add("flexcard")
    deleteButton.classList.add("deleteButton")
    addItem.classList.add("addItem")

    //-------------giving value on cards-------
    cardTitle.innerText = newCardName.value
    newCardName.value = ""
    deleteButton.innerHTML = "❌";
    addItem.innerHTML = "+"

    /*------creating event listner----*/
    addItem.addEventListener("click", () => {
        newCard.style.height = "auto";

        popup2(itemList)
    })
    deleteButton.addEventListener("click", () => {
        newCard.remove();

        popup2(itemList)
    })

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


    /*-------------------itemlist popup----------*/

    function popup2(itemList) {
        var pop3 = document.createElement("div");

        var h2 = document.createElement("h2")
        let input = document.createElement("input")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let body = document.querySelector('body')

        pop3.classList.add("pop3")
        pop3.style.display = "block";
        h2.innerText = "Add New List";
        h2.classList.add("h2")
        console.log("here")
        input.setAttribute("id", "newCardName")
        button4.classList.add("button4");
        button4.innerText = "Add"
        button5.classList.add("button5");
        button5.innerText = "Close"


        button4.addEventListener("click", function () {
            var item = document.createElement('div')
            item.innerText = input.value
            itemList.appendChild(item)

        })

        button5.addEventListener("click", function () {
            pop3.remove()
        })


        body.appendChild(pop3);
        pop3.appendChild(h2)
        pop3.appendChild(input)
        pop3.appendChild(button4)
        pop3.appendChild(button5)

    }
    /*-------on click of h2-------------*/
    cardTitle.addEventListener("click", function () {
        containerCard.style.display = "none"
        selectCard.style.display = "block"
        selectCard.appendChild(newCard)
        selectCard.style.display = "flex"
        navbar.style.display = "block"
        parent.style.display = "none"
        // button3[0].style.display = "none"
        blankspace.innerText = cardTitle.innerText
        blankspace.style.color = "white"



    })

    //----------------backbutton---------------
    backbutton[0].addEventListener("click", function () {
        revert();
    })
    function revert() {
        //cardcontainer.style.display = "none"
        // selectCard.style.display = "flex"
        // selectCard.appendChild(pop3)
        selectCard.style.display = "none"
        cardcontainer.style.display = "flex"
        cardcontainer.style.flexDirection = "row"
        //cardcontainer.style.justifyContent="center"
        cardcontainer.appendChild(newCard)

        navbar.style.display = "none"
        parent.style.display = "block"
        parent.setAttribute("class", "")
        selectCard.removeChild(newCard)

    }

}
