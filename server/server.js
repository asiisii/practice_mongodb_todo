import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import router from './routes.js'

dotenv.config()

connectDB()

const app = express()
//middleware - requests we make before we make any request
app.use(express.json()) //need this middleware to process JSON request
app.use(cors())

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use(router)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`
	)
)
