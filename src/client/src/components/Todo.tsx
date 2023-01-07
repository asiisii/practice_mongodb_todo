interface TodoType {
	id: string
	text: string
	isComplete: boolean
}

interface TodoProps {
	todo: TodoType
	deleteTodo: (id: string) => void
	editTodo: (todo: TodoType) => void
}

const Todo = ({ todo, deleteTodo, editTodo }: TodoProps) => {
	const { id, text, isComplete } = todo

	return (
		<div className='flex items-center justify-between mb-2'>
			<div
				className={`flex-1 cursor-pointer ${
					isComplete ? 'line-through text-gray-500' : 'text-gray-800'
				}`}
				onClick={() => editTodo({ ...todo, isComplete: !isComplete })}
			>
				{text}
			</div>
			<div>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => editTodo(todo)}
				>
					Edit
				</button>
				<button
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => deleteTodo(id)}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Todo
