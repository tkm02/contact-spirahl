var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");



// fonction qui retourne la longueur de la value de l'input 
function inputLength(){
    return input.value.length;
}

// Notre fonction principale

function createListElement(){

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";


    function crousOut(){
        li.classList.toggle("done");
    }
    
    li.addEventListener("click",crousOut);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
    btn.addEventListener("click",deleteListItem);


    function deleteListItem(){
        li.classList.add("delete");
    }


}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
      createListElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);



