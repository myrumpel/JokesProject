import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink activeClassName={styles.active} to='/joke-list'>
							Jokes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to='/add-joke'>
							Add a Joke
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
