let notes = [];

function updateDOM(data) {
  const outputContainer = document.getElementById("output-container");
  outputContainer.innerHTML = "";
  data.forEach((element, index) => {
    const card = document.createElement("div");

    card.style.backgroundColor = element.colorHex;
    card.classList.add("notes-card")
    card.innerHTML = `<p>${element.content}</p>
        <button class="delete-btn" data-index ="$index">Delete</button>
        `;
    outputContainer.appendChild(card);

    const deleteButton = card.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      deleteHandler(index);
      console.log("delete clicked")
  });
});
}

function deleteHandler(indexToDelete) {
    notes.splice(indexToDelete, 1);
    updateDOM(notes);
  }
  


function saveHandler() {
  // let get the value of notes

  const textBox = document.getElementById("text-input");
  const notesValue = textBox.value;

  // lets get color
  const colorInput = document.getElementById("color-input");
  const colorCode = colorInput.value;

  const obj = {
    content: notesValue,
    colorHex: colorCode,
  };

  notes.push(obj);
  updateDOM(notes);

  textBox.value = "";
  colorInput.value = "";
}

// adding the event listner  and handler to save button
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", saveHandler);
