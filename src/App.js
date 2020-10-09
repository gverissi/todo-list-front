import React from 'react'
import { render } from 'react-dom'

import Todo from './Todo'
import '../assets/css/app.css'
import '../assets/css/index.css'

const App = () => {
	return (
		<div className="App">
			<Todo />
		</div>
	);
}

render(<App />, document.getElementById('root'))