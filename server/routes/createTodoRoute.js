import TodoModel from '../models/TodoModel.js'

const createTodo = async (req, res) => {
	const todo = new TodoModel({
		text: req.body.text,
	})
	try {
		const newTodo = await todo.save()
		res.status(201).json(newTodo)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

export default createTodo
