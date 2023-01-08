import TodoModel from '../models/TodoModel.js'

export const updateTextTodo = async (req, res) => {
	try {
		const todo = await TodoModel.findById(req.params.id)
		if (!todo) return res.status(404).json({ message: 'Cannot find todo' })
		todo.text = req.body.text
		await todo.save()
		res.json(todo)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

export const updateIsCompleteTodo = async (req, res) => {
	try {
		const todo = await TodoModel.findById(req.params.id)
		if (!todo) return res.status(404).json({ message: 'Cannot find todo' })
		todo.isComplete = !todo.isComplete
		await todo.save()
		res.json(todo)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}
