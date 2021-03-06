import React, { useEffect } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import LandingPage from './LandingPage'
import RecipePage from './RecipePage'

import {
	Switch, Route, Redirect
} from "react-router-dom"
import UserPage from './UserPage'
import GuestMainDisplay from './GuestMainDisplay'
const NotLoggedIn = () => {

	return (


		<Switch>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<Route path="/home">
				<LandingPage />
			</Route>
			<Route path="/recipes/:id">
				<RecipePage />
			</Route>
			<Route path="/users/:id">
				<UserPage />
			</Route>
			<Route path="/main">
				<GuestMainDisplay />
			</Route>
			<Redirect from="/" to="/home" />
			{/*<Route path="/recipes">
				<Bloglist />
			</Route>
			<Route path="/users/:id">
				<User user={user} />
			</Route>
			<Route path="/users">
				<Userlist />
			</Route>*/}
		</Switch>
	)
}

export default NotLoggedIn