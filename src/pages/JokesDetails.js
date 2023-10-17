import { useEffect } from 'react'
import {
	Link,
	Route,
	useParams,
	useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min'
import Loader from '../components/UI/Loader'
import Comments from '../components/comments/Comments'
import HighlightedJoke from '../components/jokes/HighlightedJoke'
import useHttp from '../hooks/use-http'
import ss from '../index.css'
import { getJoke } from '../utils/firebase-api'

// const DUMMY_JOKES = [
// 	{
// 		id: 'j1',
// 		topic: 'Programming',
// 		text: 'How many programmers does it take to change a light bulb? None - it`s hardware problem',
// 	},
// 	{
// 		id: 'j2',
// 		topic: 'General',
// 		text: 'How many bones are in the human hand? A handful of them.',
// 	},
// 	{
// 		id: 'j3',
// 		topic: 'Programming',
// 		text: 'How many programmers does it take to change a light bulb? None - it`s hardware problem',
// 	},
// ]
function JokeDetails() {
	const routeMatch = useRouteMatch()
	const {
		sendHttpRequest,
		status,
		data: loadedJoke,
		error,
	} = useHttp(getJoke, true)
	const params = useParams()
	const { jokeId } = params
	useEffect(() => {
		sendHttpRequest(jokeId)
	}, [sendHttpRequest, jokeId])

	if (status === 'pending') {
		return (
			<div className='centered'>
				<Loader />
			</div>
		)
	}
	if (status === 'error') {
		return <p className='centered'>{error}</p>
	}
	if (!loadedJoke.text) {
		return <p>Joke is not found</p>
	}

	// const joke = DUMMY_JOKES.find(joke => joke.id === params.jokeId)

	return (
		<>
			<HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
			<Route path={`${routeMatch.path}`} exact>
				<div className={ss.centered}>
					<Link className='btnEmpty centered' to={`${routeMatch.url}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>
			{/* <h2>{params.jokeId}</h2> */}
			<Route path={`${routeMatch.path}/comments`}>
				<Comments />
			</Route>
		</>
	)
}

export default JokeDetails
