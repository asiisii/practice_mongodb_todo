interface Todo {
	id: string
	text: string
	isComplete: boolean
}

const baseURL = 'http://localhost:3000/api'

const headers = {
	'Content-Type': 'application/json',
}

const getTodos = () => fetch(`${baseURL}/todos`).then(res => res.json())

const addTodo = (todo: Todo) =>
	fetch(`${baseURL}/todos`, {
		method: 'POST',
		headers,
		body: JSON.stringify(todo),
	}).then(res => res.json())

const deleteTodo = (id: string) =>
	fetch(`${baseURL}/todos/${id}`, {
		method: 'DELETE',
	})

const editTodo = (todo: Todo) =>
	fetch(`${baseURL}/todos/${todo.id}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(todo),
	}).then(res => res.json())

const markAsComplete = (todo: Todo) =>
	fetch(`${baseURL}/todos/${todo.id}`, {
		method: 'PATCH',
		headers,
		body: JSON.stringify({ isComplete: true }),
	}).then(res => res.json())

export { getTodos, addTodo, deleteTodo, editTodo, markAsComplete }
