import { useEffect } from 'react'
import Loader from '../components/UI/Loader'
import JokeList from '../components/jokes/JokeList'
import NoJokesFound from '../components/jokes/NoJokesFound'
import useHttp from '../hooks/use-http'
import { getJokes } from '../utils/firebase-api'
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
// 		topic: '234423342432',
// 		text: 'How 234234234234234234many programmers does it take to change a light bulb? None - it`s hardware problem',
// 	},
// ]
function Jokes() {
	const {
		sendHttpRequest,
		status,
		data: loadedJokes,
		error,
	} = useHttp(getJokes, true)
	useEffect(() => {
		sendHttpRequest()
	}, [sendHttpRequest])
	if (status === 'pending') {
		return (
			<div className='centered'>
				<Loader />
			</div>
		)
	}
	if (status === 'error') {
		return <p className='centered focused'>{error}</p>
	}
	if (status === 'completed' && (!loadedJokes || loadedJokes.length === 0)) {
		return <NoJokesFound />
	}
	return (
		<>
			<JokeList jokes={loadedJokes} />
		</>
	)
}

export default Jokes
