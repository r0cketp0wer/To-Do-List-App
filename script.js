function addTask() {
  // Get the task input value
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value;

  if (taskValue.trim() !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Add checkbox for marking as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.style.textDecoration = 'line-through';
      } else {
        listItem.style.textDecoration = 'none';
      }
    });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(listItem);

    // Clear the task input
    taskInput.value = '';
  }
}