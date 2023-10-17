import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './JokeItem.module.css'

const JokeItem = props => {
	const location = useLocation()
	console.log(location)
	return (
		<li className={styles.item}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.topic}</figcaption>
			</figure>
			<Link to={`${location.pathname}/${props.id}`} className='btn'>
				Expand
			</Link>
		</li>
	)
}

export default JokeItem
