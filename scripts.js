function getValidStatus(taskNumber){

const validStatuses = ["todo","doing","done"];
let status;

do{
  status = prompt(`Enter the status for Task ${taskNumber}("todo","doing","done"):`);
  if (!status || !validStatuses.includes(status.toLowerCase())){
    alert("invalid status! Please enter only:'todo','doing'or'done'.");
  }
} while (!status || !validStatuses.includes(status.toLowerCase()));
return status.toLowerCase();
}

const task1 = { title:prompt("Enter the title for Task 1:"),
description:prompt("Enter the description for Task 1:"),
status:getValidStatus(1)
};

const task2 = { title:prompt("Enter the title for Task 2:"),
description:prompt("Enter the description for Task 2:"),
status:getValidStatus(2)
};


const completedTasks=[task1,task2].filter(task => task.status === "done");

if(completedTasks.length>0){
  console.log("Completed Tasks:");
  completedTasks.forEach(task=>{ console.log(`-${task.title}[${task.status}]`);
  });
} else{console.log("No task completed,let's get to work!");}
