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
      function resetZoom(){
         const vp=document.getElementById("viewport");
            vp.setAttribute("content","width=device-width,initial-scale=1,maximum-scale=1");
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
          resetZoom();
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
        resetZoom();
      }

      function addTask(){
        let task=document.querySelector('.task-box');
        let date=document.querySelector('.date-box');
        let t1=task.value;
        let t2=task.value;
        if(t1.trim()===""|| t2.trim()===""){
          alert('Please enter both Task and Date.');
        }
        else{
        todolist.push(task.value);
        tododate.push(date.value);
        updateTasks();
        alert('Your Task Was ADDED!');
        }
        task.value="";
        resetZoom();
        saveData();
        updateHome();
      }





