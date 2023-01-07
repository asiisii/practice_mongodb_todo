import { useState } from "react"

interface FormValues {
	[key: string]: any
}

interface UseFormProps {
	initialValues: FormValues
	onSubmit: (values: FormValues) => void
}

const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
	const [values, setValues] = useState(initialValues)

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement
		setValues({
			...values,
			[target.name]: target.value,
		})
	}

	const handleSubmit = (callback: () => void) => (e: Event) => {
		e.preventDefault()
		callback()
	}

	return {
		handleChange,
		handleSubmit,
		values,
	}
}

export { useForm }
