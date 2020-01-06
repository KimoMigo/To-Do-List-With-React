import React from 'react';
import './App.css';

import TaskDetails from './components/task-details/task-details.component';
import TasksList from './components/task-list/task-list.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskDetails/>
      <TasksList/>
    </div>
  );
}

export default App;
