function saveTask() {
    var titleInput = document.getElementById('titleInput');
    var descInput = document.getElementById('descInput');
  
    if (titleInput.value == '' ) {
      alert("please fill title ");
      titleInput.focus();
      return false;
    }
    else if(descInput.value == ''){
      
      alert("please fill des ");
      descInput.focus();
      return false;

    }
    else{
      var taskList = document.getElementById('taskList');
  
      var li = document.createElement('li');
      var titleSpan = document.createElement('span');
      titleSpan.classList.add('title');
      titleSpan.textContent = titleInput.value;
      var descSpan = document.createElement('span');
      descSpan.classList.add('description');
      descSpan.textContent = descInput.value;
      var deleteBtn = document.createElement('span');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = '✖';
      deleteBtn.addEventListener('click', function() {
        deleteTask(this);
      });
  
      li.appendChild(titleSpan);
      li.appendChild(descSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      titleInput.value = '';
      descInput.value = '';
    }
  }
  
  function deleteTask(deleteBtn) {
    var li = deleteBtn.parentNode;
    li.parentNode.removeChild(li);
  }
  