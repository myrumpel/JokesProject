import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AddJoke from './pages/AddJoke'
import Jokes from './pages/Jokes'
import JokeDetails from './pages/JokesDetails'
import NotFound from './pages/NotFound'
function App() {
	return (
		<>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/joke-list' />
					</Route>
					<Route path='/joke-list' exact>
						<Jokes />
					</Route>
					<Route path='/joke-list/:jokeId'>
						<JokeDetails />
					</Route>
					<Route path='/add-joke'>
						<AddJoke />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</>
	)
}

export default App
