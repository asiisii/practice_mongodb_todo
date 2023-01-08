import TodoModel from '../models/TodoModel'

const deleteTodo = async (req, res) => {
	try {
		const todo = await TodoModel.findById(req.params.id)
		if (!todo) return res.status(404).json({ message: 'Cannot find todo' })
		await todo.remove()
		res.json({ message: 'Deleted Todo' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export default deleteTodo
