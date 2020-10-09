import React, { Component } from 'react'
import axios from 'axios'

import Input from './Input'
import TodoList from './TodoList'

class Todo extends Component {

	state = {
        todos: [],
        apiUrl: "https://api-todo-list-greg.herokuapp.com"
        // apiUrl: "http://localhost" // local postgres
        // apiUrl: "http://localhost:5000/api/todos" // local nosql
	}

	componentDidMount() {
		this.getTodos()
	}

	getTodos = () => {
        let { apiUrl } = this.state;
		axios.get(apiUrl).then(res => {
			if (res.data) {
				this.setState({ todos: res.data })
			}
		}).catch(err => console.log(err))
	}

	deleteTodo = (id) => {
        let { apiUrl } = this.state;
		axios.delete(apiUrl + "?todoId=" + id).then(res => {
		// axios.delete(`http://localhost?todoId=${id}`).then(res => {
		// axios.delete(`http://localhost:5000/api/todos/${id}`).then(res => {
			if (res.data) {
				this.getTodos()
			}
		}).catch(err => console.log(err))
	}

	render() {
        let { todos, apiUrl } = this.state

		return (
			<div>
				<h1>My Todo(s)</h1>
				<Input getTodos={this.getTodos} apiUrl={apiUrl} />
				<TodoList todos={todos} deleteTodo={this.deleteTodo} />
			</div>
		)
	}
}

export default Todo;