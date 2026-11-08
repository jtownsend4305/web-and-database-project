// notes.js - Handles the Add Note form submission

const noteForm = document.getElementById('note-form');

if (noteForm) {
    noteForm.addEventListener('submit', function(event) {
        // Prevent default form submission reload behavior
        event.preventDefault();

        // Retrieve input data from text area
        const noteText = document.getElementById('note-text').value;

        // Create a Note object
        const note = {
            noteText: noteText,
            createdAt: new Date()
        };

        // Print the object to the browser console
        console.log('Note Object Created:', note);
    });
}