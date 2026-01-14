// Get elements
const taskinput = document.getElementById("taskinput");
const addtaskbtn = document.getElementById("addtaskbtn");
const tasklist = document.getElementById("tasklist");

//Add task
addtaskbtn.addEventListener("click",function () {
    if (taskinput.value.trim() === "") {
        alert("please enter a task");
        return;
    }
    
    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item";

    // Task text
    const tasktext = document.createElement("span");
    tasktext.textContent = taskinput.value;

    // Strike Through On Click
    tasktext.addEventListener("click",function () {
        tasktext.classList.toggle("completed");
    });

    // Delete button
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.className = "btn btn-secondary btn-sm";

    deletebtn.addEventListener("click", function () {
        li.remove();
        if (tasklist.children.length === 0) {
            emptymsg.style.display = "block";
        }
    });

    // Append elements
    li.appendChild(tasktext);
    li.appendChild(deletebtn);
    tasklist.appendChild(li);

    // Clear input
    taskinput.value = "";
});

