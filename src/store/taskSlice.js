import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../constants/constants';
import { HttpService } from '../services/Http.service';

const initialState = {
  taskList: [],
  activeTaskId: null,
  showOnlyDone: false,
  searchValue: '',
  progress: 0,
};

export const fetchTasksAsync = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    return HttpService.get(URL.TASKS);
  }
);

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
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksAsync.fulfilled, (state, action) => {
      state.taskList = [...action.payload];
    });
  },
});

export const {
  setProgress,
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
export const selectProgress = (state) => state.tasks.progress;

export default taskSlice.reducer;
