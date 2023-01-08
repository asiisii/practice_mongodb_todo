import express from 'express'
import getTodos from './routes/getTodosRoute.js'
import createTodo from './routes/createTodoRoute.js'
import deleteTodo from './routes/deleteTodoRoute.js'
import {
	updateTextTodo,
	updateIsCompleteTodo,
} from './routes/updateTodoRoute.js'

const router = express.Router()

router.get('/todos', getTodos)
router.post('/todos', createTodo)
router.delete('/todos/:id', deleteTodo)
router.patch('/todos/:id', updateTextTodo)
router.patch('/todos/:id', updateIsCompleteTodo)

export default router
