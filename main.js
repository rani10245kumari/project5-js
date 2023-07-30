//-----popup box---------------
const addTask = document.getElementById('pop')
let visiblee = false;
const parent = document.getElementById('tasklist')
let noitem = document.getElementById("noitemlist")
let count = 0

function showAddTask() {
    count++
    if (visiblee) {
        addTask.classList.remove("hide")
        visiblee = false;
        parent.classList.add('blur-page');
        addTask.classList.remove("hide")


    } else {
        addTask.classList.remove("hide")
        visiblee = true;
        parent.classList.add('blur-page');
        if (count >= 1) {
            noitem.remove()
        }
    }

}
//--------------hide pop up box------
function hideAddTask() {
    const addTask = document.getElementById('pop')
    addTask.setAttribute("class", "popupbox   hide");
    parent.classList.remove("parent");
    parent.classList.remove('blur-page');
    visiblee = false;
    addTask.classList.add("hide")

}






//---------------creating flex-card by js---------

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
    // var title2= document.createElement("h3")
    var hrline = document.createElement("hr")
    var itemList = document.createElement("div")
    var deleteButton = document.createElement("button")
    var addItem = document.createElement("button")



    //-----------appending child element----------
    newCard.appendChild(cardTitle)
    newCard.appendChild(hrline)
    newCard.appendChild(itemList)
    // newCard.appendChild(title2)
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

    /*------creating event listner on plus and delete button--------*/
    addItem.addEventListener("click", () => {
        newCard.style.height = "auto";

        popup2(itemList)
    })
    deleteButton.addEventListener("click", () => {
        newCard.remove();

        popup2(itemList)
    })





    /*-------------------Adding particular item on popup----------*/

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

        //-------------Adding event listner on add popup button---------

        button4.addEventListener("click", function () {
            const p = document.createElement("p")
            p.classList.add("inline")
            h2.innerText = input.value
            pop3.style.display = "none"
            const mark = document.createElement("button")
            itemList.appendChild(p)
            itemList.classList.add("space")
            mark.innerText = "ok"
            p.appendChild(h2)
            p.appendChild(mark)
            mark.classList.add("mark")
            containerCard.classList.remove("blur-page")
            mark.addEventListener("click", function () {
                workdone()
            })
            function workdone() {
                h2.style.textDecoration = "line-through"
                h2.style.color = "blue"
                h2.style.fontWeight = "bolder"
                mark.remove()
            }
        })


        //-----------------Event listner on close button of popup---------
        button5.addEventListener("click", function () {
            pop3.remove()

        })


        body.appendChild(pop3);
        pop3.appendChild(h2)
        pop3.appendChild(input)
        pop3.appendChild(button4)
        pop3.appendChild(button5)

    }
    /*-------on click of h2------------------*/
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
        selectCard.style.display = "none"
        cardcontainer.style.display = "flex"
        cardcontainer.style.flexDirection = "row"
        cardcontainer.appendChild(newCard)
        navbar.style.display = "none"
        parent.style.display = "block"
        parent.setAttribute("class", "")
        selectCard.removeChild(newCard)

    }

}
