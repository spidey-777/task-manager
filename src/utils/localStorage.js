export const addTask = (newTask)=>{
    if (!localStorage.getItem('task')) {
  localStorage.setItem('task', JSON.stringify([]));
  }
  const currentTasks = JSON.parse(localStorage.getItem('task')) || [];
  currentTasks.push(newTask);
  localStorage.setItem('task', JSON.stringify(currentTasks));
}

export const getTask = ()=>{
 const tasks = JSON.parse(localStorage.getItem('task')) || [];
 return tasks;
}

export const getUserName = ()=>{
  const userName = localStorage.getItem('username');
  return userName ? userName : '';
}

export const toggleTaskCompletion = (taskId) => {
  const tasks = JSON.parse(localStorage.getItem('task')) || [];
  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  localStorage.setItem('task', JSON.stringify(updatedTasks));
 }
 export const removeTask = (taskId) => {  
   const tasks = JSON.parse(localStorage.getItem('task')) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);  
    localStorage.setItem('task', JSON.stringify(updatedTasks));
 }