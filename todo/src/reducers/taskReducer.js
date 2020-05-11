export const taskReducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE_TASK":
      return {
        ...state,
        taskInput: action.payload
      }
    case "ADD_TASK":
      const newTask = {
        taskName: state.taskInput,
        completed: false,
        taskId: Date.now()
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        taskInput: ""
      }
    default:
      return state;
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
  taskInput: ""
};
