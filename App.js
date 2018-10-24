import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoInput from './TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //TODO:後々stateで管理します
    const tasks =[
      {title: 'Todo1つ目', id:0},
      {title: 'Todo2つ目', id:1},
    ];

    return (
      <div>
        <h1>TODO App</h1>
        <TodoList tasks={tasks} />
      </div>
      );
  }
}

export default App;
