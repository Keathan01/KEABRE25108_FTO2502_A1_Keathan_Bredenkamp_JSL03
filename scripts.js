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















const completedTasks=[task1,task2].filter(task => task.status === "done");

if(completedTasks.length>0){
  console.log("Completed Tasks:");
  completedTasks.forEach(task=>{ console.log(`-${task.title}[${task.status}]`);
  });
} else{console.log("No task completed,let's get to work!");}
