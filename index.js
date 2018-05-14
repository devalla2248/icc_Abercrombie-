var dataToLoad = data,
    table = document.getElementById('taskList'),
    tableLength = dataToLoad.length,
    taskName = document.getElementById('taskName'),
    taskDate = document.getElementById('taskDate'),
    taskAssignedTo = document.getElementById('taskAssignedTo'),
    submit = document.getElementById('submit');

submit.addEventListener('click', addTask)

function addTask(){
    var date = new Date(taskDate.value),
        formatedDate =date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear(),
        obj ={
            name: taskName.value,
            date: formatedDate,
            assigned: taskAssignedTo.value
       }
    appendToTable(obj)
}

for(var i=0; i<tableLength;i++){
    var obj = dataToLoad[i];
    appendToTable(obj)
}
function appendToTable(obj){
    table.insertAdjacentHTML("afterbegin", "<tr><td><strong>" + obj.name + "</strong> <span>" + obj.date + "</span></td><td><strong>" + obj.assigned +"</strong></td></tr>")
}