const notesContainer = document.querySelector(".notes-conatiner");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//  browser close kore open korle local storage check korbe and local storage a data thakle setake node shishebe display korbe
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


//  local storage a update korbe, refresh korle remove hobe 
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "img/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } 
//  prottekbar p lekhar por auto update hobe local storage a
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
});


document.addEventListener("keydown", event =>{ 
    if(event.key === "Enter") { 
        document.execCommand("insertLineBreak"); 
        event.preventDefault(); 
        }
    })

