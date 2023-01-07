import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { useTodoState } from './context/TodoContext'

const App = () => {
	const { todos, addTodo, deleteTodo, editTodo } = useTodoState()

	return (
		<div className='max-w-md mx-auto p-8'>
			<h1 className='text-2xl font-bold mb-2'>Todo App</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
		</div>
	)
}

export default App
