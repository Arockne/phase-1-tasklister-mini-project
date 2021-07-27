document.addEventListener("DOMContentLoaded", () => {
  //point towards the form
  //on the forms submit grab the value

  //create a list item
    //append the value from the form
    //append a button with an x
    //add an event handler to the button when clicked to delete the entire list element

  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const descrip = e.target.querySelector('#new-task-description').value;
    const task = createTask(descrip);
    const taskBar = document.querySelector('#tasks');
    taskBar.appendChild(task);
  })
  
  function createTask(descrip) {
    const li = document.createElement('li');
    li.textContent = `${descrip} `;
    const bttn = document.createElement('button');
    bttn.textContent = 'x';
    bttn.addEventListener('click', handleDelete);
    li.appendChild(bttn);
    return li;
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }
});