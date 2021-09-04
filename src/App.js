import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoListPage from './components/to-do-list-page/ToDoListPage';
import TaskEditPage from './components/task-edit-page/TaskEditPage';

import './App.scss';

function App() {
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
