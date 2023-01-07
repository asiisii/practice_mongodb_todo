import Todo from './Todo'

interface TodoType {
	id: string
	text: string
	isComplete: boolean
}

interface TodoListProps {
	todos: TodoType[]
	deleteTodo: (id: string) => void
	editTodo: (todo: TodoType) => void
}

const TodoList = ({ todos, deleteTodo, editTodo }: TodoListProps) => {
	return (
		<>
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			))}
		</>
	)
}

export default TodoList
