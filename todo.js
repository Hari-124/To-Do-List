      let todolist=JSON.parse(localStorage.getItem("todos")) || [];
      let tododate=JSON.parse(localStorage.getItem("dates")) || [];

      updateHome();
      updateTasks();

      function updateHome(){
      if(todolist.length === 0 && tododate.length === 0)
      emptyTask();
      else
      toDoTask();
      }

      function emptyTask(){
        document.getElementById("to-do-task").classList.remove("show");
        document.getElementById("empty-task").classList.add("show");
      }

      function toDoTask(){
        document.getElementById("empty-task").classList.remove("show");
        document.getElementById("to-do-task").classList.add("show");
      }

      function updateTasks(){
        let hometasks="";
        for(let i=0;i<todolist.length;i++){
          const todo=todolist[i];
          const todate=tododate[i];
          const p=`
          <div class="task-row">
          <span>${todo}</span>
          <span>${todate}</span> 
          <button onclick="deleteTask(${i})">Delete</button>
          </div>`;
          hometasks += p;
        }
        console.log(hometasks);
        document.querySelector('.tasks-shows').innerHTML=hometasks;
      }
      
      function saveData(){
        localStorage.setItem("todos",JSON.stringify(todolist));
        localStorage.setItem("dates",JSON.stringify(tododate));
      }
      function deleteTask(i){
        todolist.splice(i,1);
        tododate.splice(i,1);
        saveData();
        updateTasks();
        updateHome();
      }
      function plusButton(){
        document.getElementById("popup").classList.add("show");
      }

      function closePopup(){
        document.getElementById("popup").classList.remove("show");
      }

      function addTask(){
        let task=document.querySelector('.task-box');
        let date=document.querySelector('.date-box');
        todolist.push(task.value);
        tododate.push(date.value);
        console.log(todolist,tododate);
        task.value="";
        saveData();
        updateTasks();
        alert('Your Task Was ADDED!');
        updateHome();

      }
