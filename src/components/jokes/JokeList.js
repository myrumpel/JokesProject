import { Fragment } from 'react'
import {
	useHistory,
	useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'
import JokeItem from './JokeItem'
import styles from './JokeList.module.css'
const sortJokes = (jokes, isAscending) => {
	return jokes.sort((joke1, joke2) => {
		if (isAscending) {
			return joke1.id < joke2.id ? 1 : -1
		} else {
			return joke1.id > joke2.id ? 1 : -1
		}
	})
}
const JokeList = props => {
	const history = useHistory()
	const location = useLocation()
	console.log(location)
	const queryParams = new URLSearchParams(location.search)
	const sortingOrder = queryParams.get('sort')
	const isSortAscending = sortingOrder === 'asc'
	const sortedJokes = sortJokes(props.jokes, isSortAscending)
	const toggleSortingHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `?sort=${isSortAscending ? 'desc' : 'asc'}`,
		})

		// history.push(
		// 	`${location.pathname}?sort=${isSortAscending ? 'desc' : 'asc'}`
		// )
	}
	console.log(sortingOrder)
	return (
		<Fragment>
			<div className={styles.sort}>
				<button onClick={toggleSortingHandler}>
					Sort Jokes {!isSortAscending ? 'Ascending' : 'Descending'}
				</button>
			</div>
			<ul className={styles.list}>
				{sortedJokes.map(joke => (
					<JokeItem
						key={joke.id}
						id={joke.id}
						topic={joke.topic}
						text={joke.text}
					/>
				))}
			</ul>
		</Fragment>
	)
}

export default JokeList
