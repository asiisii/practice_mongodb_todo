import { useForm } from '../hooks/useForm'

interface TodoType {
	id: string
	text: string
	isComplete: boolean
}

interface TodoFormProps {
	addTodo: (todo: TodoType) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
	const { handleSubmit, handleChange, values } = useForm({
		text: '',
	})

	const submitForm = () => {
		if (values.text.trim()) {
			addTodo({
				id: Date.now().toString(),
				text: values.text,
				isComplete: false,
			})
		}
	}

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<input
				type='text'
				name='text'
				value={values.text}
				onInput={handleChange}
				className='border rounded p-2 w-full'
				placeholder='Add a todo'
			/>
		</form>
	)
}

export default TodoForm
