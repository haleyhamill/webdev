import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) { /*this is your "getInitialStates"*/
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [],
    };
  }



  /* This grabs prev todos from backend, puts in todolist, if not error */
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/todos');
      const todoList = await res.json();
      this.setState({
        todoList: todoList
      });
    } catch (e) {
      console.log(e);
    }
  }

  /* puts new todos in backend */
  handleSubmit = item => {
    if (item.id) {
      axios.put(`http://localhost:8000/api/todos/${item.id}/`, item)
      return;
    }
      axios.post("http://localhost:8000/api/todos/", item)
  };

  /*this creates items*/
  createItem = () => {
    if (this._inputElement.value != ""){
      const item = {
        title: this._inputElement.value,
        description: "Description placeholder",
        completed: false
      };
      this._inputElement.value=""
      var currentItems = this.state.todoList;
      currentItems.push(item)
      this.setState({
        activeItem: item,
        todoList: currentItems
      });
      this.handleSubmit(item)
    }
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }
      return this.setState({ viewCompleted: false});
    };

  renderTabList = () => {
    return (
      <div>

      </div>
    );
  };
  
  markAsComplete = (item) => {
    var currentLi = document.getElementById(item.id);
    currentLi.classList.add("done");
    item.completed = true;
    var currentList = this.state.todoList.filter((itemstrike) => itemstrike.id != item.id);
    currentList.push(item)
    this.setState({todoList: currentList})
    this.handleSubmit(item); 
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      item => item.completed === viewCompleted
    )

    return newItems.map(item => (
      <li id={item.id} onClick={ () => this.markAsComplete(item) }
        key={item.id}> <span className={`todo-title mr-2 ${item.completed ? "done" : ""}`}
      title={item.description}>{item.title}</span>
      </li>
    ));
  };

  render() {
    return (
      <main className="todoListMain">
        <h1>simple todo app</h1>
            <div>
              <div className="header">
                <input ref= { (inputTag) => this._inputElement = inputTag} placeholder="enter task"></input>
                <button type="submit" onClick={this.createItem}>add</button>
                {this.renderTabList()}
              </div>
              <ul className="theList">
              {this.renderItems()}
              <footer>made with &#128159; &nbsp; + &#9883;</footer>
              </ul>
            </div>
      </main>
    )
  }
}

export default App;