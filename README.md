# sticky-notes

Sticky Notes App
The Sticky Notes App is a basic web application that allows users to create, save, and manage virtual sticky notes with different colors. Users can type their notes, select a color for each note, and save them for later reference. The application is implemented using HTML, CSS, and JavaScript.

## Features
Create and save multiple sticky notes with custom content and colors.
Delete individual notes when they are no longer needed.
User-friendly interface with color selection and a save button.
Notes are visually displayed as colored cards.

## Functionality
The saveHandler function captures the content of the input text area and the selected color. It then creates a new note object and adds it to the notes array. After that, it updates the DOM to display the newly created note.

The deleteHandler function takes an index parameter to identify the note to be deleted from the notes array. It then updates the DOM to reflect the changes.

The updateDOM function iterates through the notes array and dynamically creates note cards for each note. It sets the background color and content of each card and attaches a delete button with the appropriate event listener.
