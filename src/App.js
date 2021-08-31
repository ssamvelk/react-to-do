import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import ToDoListPage from './components/to-do-list-page/ToDoListPage';
import TaskList from './components/task-list/TaskList';
import { taskList, categoryList } from './constants/constants';
import CategoryList from './components/category-list/CategoryList';
import TaskEditPage from './components/task-edit-page/TaskEditPage';
import TaskEdit from './components/task-edit-page/task-edit/TaskEdit';
import { useSelector } from 'react-redux';
import { selectCategoriesList } from './store/categorySlice';
import { selectTasksList } from './store/taskSlice';

function App() {
  const _categories = useSelector(selectCategoriesList);
  const _tasks = useSelector(selectTasksList);

  return (
    <Router>
      <Switch>
        <Route path='/task/:id'>
          <TaskEditPage
            left={<CategoryList categories={_categories} isEditMode={true} />}
            right={<TaskEdit></TaskEdit>}
          />
        </Route>
        <Route path='/'>
          <ToDoListPage
            left={<CategoryList categories={_categories} />}
            right={<TaskList tasks={_tasks}></TaskList>}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
