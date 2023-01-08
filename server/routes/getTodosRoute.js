import TodoModel from '../models/TodoModel.js'

const getTodos = async (req, res) => {
	try {
		const todos = await TodoModel.find()
		res.json(todos)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export default getTodos
