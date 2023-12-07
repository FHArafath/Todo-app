const form = document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskLists = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
    event.preventDefault()

   if (taskInput.value) {
    let task = taskInput.value;

    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskElcontent = document.createElement("div");
    taskElcontent.classList.add("content");

    taskEl.appendChild(taskElcontent);

    const taskElInput = document.createElement("input");
    taskElInput.classList.add("text");
    taskElInput.value = task;
    taskElInput.setAttribute("readonly", "readonlt");

    taskElcontent.appendChild(taskElInput);

    const taskElAction = document.createElement("div");
    taskElAction.classList.add("actions");

    taskElcontent.appendChild(taskElAction);

    const taskElEditBtn = document.createElement("button");
    taskElEditBtn.classList.add("edit");
    taskElEditBtn.innerText = "Edit";

    const taskElDeleteBtn = document.createElement("button");
    taskElDeleteBtn.classList.add("delete");
    taskElDeleteBtn.innerText = "Delete";

    const taskElCompleteBtn = document.createElement("button");
    taskElCompleteBtn.classList.add("complete");
    taskElCompleteBtn.innerText = "Mark Complete";

    taskElAction.appendChild(taskElEditBtn);
    taskElAction.appendChild(taskElDeleteBtn);
    taskElAction.appendChild(taskElCompleteBtn);

    taskLists.appendChild(taskEl);

    taskInput.value = "";

    taskElEditBtn.addEventListener("click", function() {
        if (taskElEditBtn.innerText.toLowerCase() === "edit"){
            taskElEditBtn.innerText = "Save";
            taskElEditBtn.style.backgroundColor = "#e6b7eca1";
            taskElInput.removeAttribute("readonly");
            taskElInput.focus();
        } else {
            taskElEditBtn.innerText = "Edit"
            taskElEditBtn.style.backgroundColor = "transparent";
            taskElInput.setAttribute("readonly", "readonly");
        }
    })


    taskElCompleteBtn.addEventListener("click", function() {
        if (taskElCompleteBtn.innerText.toLowerCase() === "mark complete"){
            taskElCompleteBtn.innerText = "Completed";
            taskElInput.classList.add("mark-completed");
            taskElCompleteBtn.style.backgroundColor = "#e6b7eca1";
        } else {
            taskElCompleteBtn.innerText = "Mark Complete"
            taskElInput.classList.remove("mark-completed");
            taskElCompleteBtn.style.backgroundColor = "transparent";
        }
    });

    taskElDeleteBtn.addEventListener("click", function(e){
        taskLists.removeChild(taskEl);
    })



   } else {
    alert("Enter some task!")
   }


})

// document.getElementById("new-task-submit").addEventListener("click", function (event) {

// })