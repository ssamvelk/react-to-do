import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import ToDoList from './components/to-do-list/ToDoList';
import TaskItem from './components/task-item/Task-item';
import TaskList from './components/task-list/TaskList';
import CategoryItem from './components/category-item/CategoryItem';

import { taskList } from './constants/constants';
import CategoryList from './components/category-list/CategoryList';

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/counter'>counter</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav> */}

      <Switch>
        <Route path='/counter'>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <Counter />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <span>
                <span>Learn </span>
                <a
                  className='App-link'
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React
                </a>
                <span>, </span>
                <a
                  className='App-link'
                  href='https://redux.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className='App-link'
                  href='https://redux-toolkit.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className='App-link'
                  href='https://react-redux.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React Redux
                </a>
              </span>
            </header>
          </div>
        </Route>
        <Route path='/users'>
          <h2>users</h2>
        </Route>
        <Route path='/'>
          <ToDoList
            left={<CategoryList />}
            right={<TaskList tasks={taskList}></TaskList>}
          ></ToDoList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
