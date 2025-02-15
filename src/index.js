 // your code here
 document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.querySelector('#new-task-description').value;
    const priority = document.querySelector('#priority').value; 
    if (taskDescription) { 
      createTask(taskDescription, priority); 
      document.querySelector('#new-task-description').value = '';
    }
  });
});

function createTask(task, priority) {
  const p = document.createElement('p');
  const btn = document.createElement('button');

  switch (priority) {
    case 'high':
      p.style.color = 'red';
      break;
    case 'medium':
      p.style.color = 'yellow'; 
      break;
    case 'low':
      p.style.color = 'green'; 
      break;
  }

  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);

  p.textContent = `${task} `;
  p.appendChild(btn)

  const taskList = document.querySelector('#tasks');
  if (taskList) { 
    taskList.appendChild(p); 
  } else {
    console.error("Element with ID 'tasks' not found.");
  }
}

function handleDelete(e) {
  e.target.parentNode.remove(); 
}