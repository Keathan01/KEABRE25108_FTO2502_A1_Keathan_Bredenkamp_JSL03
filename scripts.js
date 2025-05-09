function getValidStatus(taskNumber){

const validStatuses = ["todo","doing","done"];
let status;

do{
  status = prompt(`Enter the status for Task ${taskNumber}("todo","doing","done"):`);
  if (!status || !validStatuses.includes(status.toLowerCase())){
    alert("invalid status! Please enter only:'todo','doing'or'done'.");
  }
} while (!status || !validStatuses.includes(status.trim().toLowerCase()));
return status.trim().toLowerCase();
}
 
const taskList = [];

function createTask(taskId){
  const title = prompt (`Enter the title for Task ${taskId}:`);
  const description = prompt (`Enter the description for the Task ${taskId}:`);
  const status = getValidStatus(taskId);
   
 return {
  id:taskId,
  title:title,
  description:description,
  status:status};
 }
taskList.push(createTask(1));
taskList.push(createTask(2));

const maxTaskAllowed = 5;

while(taskList.length < maxTaskAllowed){

const addTask= confirm("Would you like to add a new task?")
if (!addTask)break;

const newTaskId=taskList.length + 1;
}
if (taskList===maxTaskAllowed){
alert("Enough tasks have been added to the board ,please check your console.log");

}

console.log("All Tasks");
taskList.forEach(task=>{console.log(`#${task.id}:${task.title}[${task.status}] - ${task.description}`);});

const completedTasks = taskList.filter(task=>task.status==="done");

if(completedTasks.length>0){
  console.log("Completed Tasks:");
  completedTasks.forEach(task=>{ console.log(`-${task.title}[${task.status}]`);
  });
} else{console.log("No task completed,let's get to work!");}
