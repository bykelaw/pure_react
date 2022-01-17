import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TodoItem = ({ name, next, prev, remove }) => (
  <div className='todo-item'>
    <h3>{name}</h3>
    <span onClick={prev}>{"<"}</span>
    <span onClick={next}>{">"}</span>
    <span onClick={remove}>-</span>
  </div>
);

class App extends Component {
  /*

  Create state to   hold the inputs and the different task
  They should be name inputValue and tasks
  inputValue should be a string
  tasks should  be an array of objects which should be the individual task
  each task object should have property "name" and 'stage for the name and stage  of the task 
  the stage should be an integer and the name a string

  */

  state = {
    inputValue: "",
    tasks: [
      { name: "Lawrence", stage: 0 },
      { name: "Lawrence1", stage: 2 },
    ],
  };

  stageNames = ["Backlog", "To Do", "Ongoing", "Done"];

  nextStageHandler = (name) => {
    let newTask = this.state.tasks.filter((task) => task.name === name)[0];
    if (newTask.stage >= 3) return;

    let otherTask = this.state.tasks.filter((task) => task.name !== name);
    newTask.stage = ++newTask.stage;
    this.setState({
      tasks: [newTask, ...otherTask],
    });
  };
  prevStageHandler = (name) => {
    let newTask = this.state.tasks.filter((task) => task.name === name)[0];
    if (newTask.stage <= 0) return;
    let otherTask = this.state.tasks.filter((task) => task.name !== name);
    newTask.stage = newTask.stage - 1;
    this.setState({
      tasks: [...otherTask, newTask],
    });
  };
  deleteHandler = (name) => {
    let otherTask = this.state.tasks.filter((task) => task.name !== name);
    this.setState({
      tasks: [...otherTask],
    });
  };
  onChangeHandler = (e) =>
    this.setState({
      inputValue: e.target.value,
    });
  addTodoItem = () => {
    if (this.state.inputValue.replace(/ /g, "") == "") return;

    let newTask = { name: this.state.inputValue, stage: 0 };
    let otherTask = this.state.tasks.filter((task) => task.name !== name);
    this.setState({
      tasks: [newTask, ...otherTask],
    });
  };

  render() {
    let Elements = [];
    for (let stageName of this.stageNames) {
      Elements.push([]);
    }
    for (let task of this.state.tasks) {
      Elements[task.stage].push(task);
    }

    let todoItems = this.stageNames.map((value, index) => (
      <div key={index}>
        <h1>{value}</h1>
        {Elements[index].map((task) => (
          <TodoItem
            key={task.name}
            next={() => this.nextStageHandler(task.name)}
            name={task.name}
            prev={() => this.prevStageHandler(task.name)}
            remove={() => this.deleteHandler(task.name)}
          />
        ))}
      </div>
    ));

    return (
      <React.Fragment>
        <div className="input-container">
          <button onClick={this.addTodoItem}>ADD ITEM</button>
          <input
            className='input'
            type="text"
            name="input"
            id="input"
            value={this.state.inputValue}
            onChange={this.onChangeHandler}
          />
        </div>
        <div
          className='stage'
        >
          {todoItems}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
