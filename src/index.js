 // your code here
 document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.querySelector('#new-task-description').value;
    if (taskDescription) { 
      createTask(taskDescription); 
      document.querySelector('#new-task-description').value = '';
    }
  });
});



  switch (priority) {
    case 'high':
      p.style.color = red;
      break;
    case 'medium':
      p.style.color = yellow;
      break;
    case 'low':
      p.style.color = green;
      break;
  }


function createTask(task) {
  const p = document.createElement('p');
  const btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${task} `;
  p.appendChild(btn);
  console.log(p);

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