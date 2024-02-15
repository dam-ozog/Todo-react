import React, { Component } from "react";

import "./App.css";
import './AddTask.css';

import TaskList from "./TaskList";
import AddTask from "./AddTask";


class App extends Component {
  counter = 7;
	state = {
		tasks: [
			{
				id: 1,
				info: "kupić samochód",
				important: false,
				date: "2019-05-21",
				isActive: true,
        finishDate: null,
			},
			{
				id: 2,
				info: "naprawić samochód",
				important: true,
				date: "2020-05-21",
				isActive: true,
        finishDate: null,
			},
			{
				id: 3,
				info: "sprzedać samochód",
				important: true,
				date: "2021-05-21",
				isActive: false,
        finishDate: null,
			},
		],
	};

	deleteTask = id => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex(task => task.id === id);
		tasks.splice(index, 1);
		this.setState({ tasks });
	};

	doneTask = id => {
		const tasks = [...this.state.tasks];
		tasks.forEach(task => {
			if (task.id === id) {
				task.isActive = false;
        task.finishDate = new Date().getTime();
			}

		});
    this.setState({tasks})
	};

  addTask = (text, important, date) => {
    const tasks = [...this.state.tasks];
    const task = {
      id: this.counter,
      info: text,
      important: important,
      date: date,
      isActive: true,
      finishDate: null,
    }
    this.counter++

    this.setState(prevState=> ({
      tasks: [...prevState.tasks, task]
    }))
  }

  changeImportant = (id) => {
	const tasks = [...this.state.tasks];
	tasks.forEach(task => {
		if(task.id === id) {
			task.important = false;
		}
	})
	this.setState({tasks})
	
  }

	render() {
		return (
			<div className='app'>
        <AddTask add={this.addTask}/>
				<TaskList
					tasks={this.state.tasks}
					delete={this.deleteTask}
					done={this.doneTask}
					change={this.changeImportant}
				/>
			</div>
		);
	}
}

export default App;
