import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		default: false,
	},
})

const TodoModel = mongoose.model('Todo', TodoSchema)

export default TodoModel
