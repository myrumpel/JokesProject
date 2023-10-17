import { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import JokeForm from '../components/jokes/JokeForm'
import useHttp from '../hooks/use-http'
import { addJoke } from '../utils/firebase-api'
function AddJoke() {
	const { sendHttpRequest, status } = useHttp(addJoke)
	const history = useHistory()
	useEffect(() => {
		if (status === 'completed') {
			history.push('/joke-list')
		}
	}, [status, history])
	const addJokeHandler = jokeData => {
		sendHttpRequest(jokeData)
	}
	return (
		<>
			<JokeForm isLoading={status === 'pending'} onAddJoke={addJokeHandler} />
		</>
	)
}

export default AddJoke
