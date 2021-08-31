import { createSlice } from '@reduxjs/toolkit';
import { taskList } from '../constants/constants';

const initialState = {
  taskList: taskList,
  activeTaskId: null,
  showOnlyDone: false,
  searchValue: '',
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
    setSearchValueAction: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setSearchValueAction,
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
export const selectShowOnlyDone = (state) => state.tasks.showOnlyDone;
export const selectSearchValue = (state) => state.tasks.searchValue;

export default taskSlice.reducer;
