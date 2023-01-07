import { createContext, useContext, useState } from "react"

interface Todo {
	id: string
	text: string
	isComplete: boolean
}

interface TodoContextProps {
	todos: Todo[]
	addTodo: (todo: Todo) => void
	deleteTodo: (id: string) => void
	editTodo: (todo: Todo) => void
}

export const TodoContext = createContext<TodoContextProps>({
	todos: [],
	addTodo: () => {},
	deleteTodo: () => {},
	editTodo: () => {},
})

const TodoProvider = ({ children }: { children: any }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo])
	}

	const deleteTodo = (id: string) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const editTodo = (todo: Todo) => {
		setTodos(
			todos.map(item => (item.id === todo.id ? { ...item, ...todo } : item))
		)
	}

	return (
		<TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
			{children}
		</TodoContext.Provider>
	)
}

const useTodoState = () => useContext(TodoContext)

export { TodoProvider, useTodoState }
