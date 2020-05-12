export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const initialTasks = [{
  taskName: "example task",
  completed: false,
  id: Date.now()
}];
