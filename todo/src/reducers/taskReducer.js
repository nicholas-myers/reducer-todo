export const taskReducer = (state, action) => {
  const newTasks = initialTasks
  switch(action.type) {
  case "ADD_TASK":
    return {
      ...state,
      tasks: [...state.tasks, {
        taskName: action.payload,
        completed: false,
        taskId: Date.now()
      }],
    }
    default:
      return newTasks;
  }
};

export const initialTasks = {
  tasks: [
    {
      taskName: "example task",
      completed: false,
      taskId: "task1",
    },
  ],
};
