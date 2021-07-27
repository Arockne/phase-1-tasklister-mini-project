document.addEventListener("DOMContentLoaded", () => {
  //impement dropdown that is used to determin the color of the text in the list
  
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const descrip = e.target.querySelector('#new-task-description').value;
    const task = createTask(descrip);
    //selectPriorityColor(e, task);
    const taskBar = document.querySelector('#tasks');
    taskBar.appendChild(task);
  })
  
  function createTask(descrip) {
    const li = document.createElement('li');
    const span = document.createElement('span')
    span.textContent = `${descrip} `;
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
});