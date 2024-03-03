document.addEventListener('DOMContentLoaded', function() {
    const nameInput= document.querySelector('#nameInput');
    const addButton = document.querySelector('#addButton');
    const namesList = document.querySelector('#namesList');
    const names = []; // Array to store the names

    addButton.addEventListener('click', function() {
        const name = nameInput.value.trim(); // Trim removes leading and trailing white spaces
        if (name != '') {
            names.push(name);
            renderNames();
            nameInput.value = ''; // Clear the input field afer adding the name
        }
        else {
            alert('Please enter a name'); // Show an alert if the input field is empty
        }
    });

    function renderNames() {
        // Sort the names array in ascending order
        names.sort();
        // Clear the previous list
        namesList.innerHTML = '';
        // Create a list  item for each name and append it to the namesList
        names.forEach(function(name) {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            namesList.appendChild(listItem);
        });
    }
});
