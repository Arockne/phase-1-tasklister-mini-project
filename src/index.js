document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const descrip = e.target.querySelector('#new-task-description').value;
    if (!descrip) return;
    const task = createTask(descrip);
    selectPriorityColor(e, task);
    const taskBar = document.querySelector('#tasks');
    taskBar.appendChild(task);
    sortByPriority(taskBar);
  })
  
  function createTask(descrip) {
    const li = document.createElement('li');
    
    const span = document.createElement('span')
    span.textContent = `${descrip} `;
    span.addEventListener('dblclick', editTask);
    li.appendChild(span)

    const bttn = document.createElement('button');
    bttn.textContent = 'x';
    bttn.addEventListener('click', handleDelete);

    li.appendChild(bttn);
    return li;
  }
  
  function handleDelete(e) {
    e.target.parentNode.remove();
  }
  
  function priorityObject() {
    return {
      'low': 'green',
      'medium': 'yellow',
      'high': 'red'
    }
  }

  function selectPriorityColor(e, task) {
    const priorityLevel = e.target.querySelector('select').value;
    const priority = priorityObject();
    const taskDescription = task.firstChild;
    taskDescription.style.color = priority[priorityLevel];
    task.className = priorityLevel;
  }

  //sorting function
  function sortByPriority(taskBar) {
    const low = taskBar.querySelectorAll('.low');
    const medium = taskBar.querySelectorAll('.medium');
    const high = taskBar.querySelectorAll('.high');
    const lowToHigh = [...high, ...medium, ...low];
    removeChildren(taskBar);
    lowToHigh.forEach(task => taskBar.appendChild(task));
  }

  function removeChildren(container) {
    const children = Array.from(container.children);
    children.forEach(child => child.remove());
  }

  function editTask(e) {
    const previousText = e.target.innerText;
    const task = e.target;
    task.innerText = '';
    const input = document.createElement('input');
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        task.textContent = e.target.value || previousText;
        task.textContent += ' ';
      }
    })
    task.appendChild(input);
  }
});