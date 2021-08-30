import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { taskList } from '../constants/constants';

const initialState = {
  taskList: taskList,
  activeTaskId: null,
  // currentTask: null,
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // state.taskList.push(action.payload);
      state.taskList = [...state.taskList, action.payload];
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((item) => item.id !== action.id);
    },
    updateTaskById: (state, action) => {
      // state.taskList = action.payload;
      // const currentTaskId = state.taskList.findIndex()
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
  },
});

export const {
  addTask,
  deleteTask,
  updateTaskList,
  setActiveTaskId,
  updateTaskById,
} = taskSlice.actions;

export const selectTasks = (state) => state.tasks;
export const selectTasksList = (state) => state.tasks.taskList;
export const selectActiveTaskId = (state) => state.taskList.activeTaskId;

export default taskSlice.reducer;
