import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoListPage from './components/to-do-list-page/ToDoListPage';
import TaskEditPage from './components/task-edit-page/TaskEditPage';
import { hideSpinner, showSpinner } from './store/spinner/actions';
import { fetchCategoriesAsync } from './store/categorySlice';

import './App.scss';
import { fetchTasksAsync } from './store/taskSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      dispatch(showSpinner());
      await dispatch(fetchCategoriesAsync());
      await dispatch(fetchTasksAsync());
    } catch (error) {
      console.log('Error', error);
    } finally {
      setTimeout(() => {
        dispatch(hideSpinner());
      }, 500);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/task/:id'>
          <TaskEditPage />
        </Route>
        <Route path='/'>
          <ToDoListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
