import { createSlice } from '@reduxjs/toolkit';
import { taskList } from '../constants/constants';

const initialState = {
  taskList: taskList,
  activeTaskId: null,
  showOnlyDone: false,
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList = [action.payload, ...state.taskList];
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((item) => item.id !== action.id);
    },
    updateTaskById: (state, action) => {
      state.taskList = state.taskList.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
    },
    updateTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    setActiveTaskId: (state, action) => {
      state.activeTaskId = action.payload;
    },
    toggleShowOnlyDone: (state, action) => {
      state.showOnlyDone = action.payload;
    },
  },
});

export const {
  toggleShowOnlyDone,
  addTask,
  deleteTask,
  updateTaskList,
  setActiveTaskId,
  updateTaskById,
} = taskSlice.actions;

export const selectTasks = (state) => state.tasks;
export const selectTasksList = (state) => state.tasks.taskList;
export const selectActiveTaskId = (state) => state.tasks.taskList.activeTaskId;
export const selectShowOnlyDone = (state) => state.tasks.taskList.showOnlyDone;

export default taskSlice.reducer;
