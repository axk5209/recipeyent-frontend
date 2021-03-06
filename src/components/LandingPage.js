import React, {useEffect} from 'react'
import LoggedInHeader from './LoggedInHeader'
import GuestHeader from './GuestHeader'
import { Typography, CssBaseline } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Box } from '@material-ui/core'
import HomeHeaderButtons from './HomeHeaderButtons'
import LandingPageRecipeCard from './LandingPageRecipeCard'
import LandingPageUserCard from './LandingPageUserCard'

import { useDispatch, useSelector } from 'react-redux'
import {
	Link
} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
	message: {
		flexGrow: 1,
		fontWeight: "bold",
		color: "indigo"
	},
	subheading: {
		flexGrow: 1,
		color: "indigo",
	},
	
}));


const MainDisplay = () => {
	const classes = useStyles();
	const allUsers = useSelector(state => {
		//console.log(state)
		return state.users ? state.users: null
	})
	const allRecipes = useSelector(state => {
		//console.log(state)
		return state.recipes ? state.recipes: null
	})
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	if (allUsers.length === 0 || allRecipes.length == 0)
		return <div></div>

	//console.log(allUsers)
	const topRecipes = allRecipes.sort((a, b) => b.rating - a.rating).slice(0, 4)
	const topUsers = allUsers.sort((a, b) => b.followerCount - a.followerCount).slice(0, 4)
	
	return (
		<React.Fragment>
			<CssBaseline />
			<GuestHeader> 
				<HomeHeaderButtons />
			</GuestHeader>
			<br></br>
			<br></br>
			<Container align = "center">
				<Typography variant = "h4" className = {classes.message}>View, Share, and Rate Your Favorite Recipes!</Typography>
			</Container>
			<br></br>
			<br></br>
			<Paper square elevation={0} align = "center">
				<br></br>
				<Typography variant = "h4" align = "center" className = {classes.subheading}>Top Recipes</Typography>
				<Box mx = {6} my = {4}> 
					<Grid container align = "center" spacing = {6} justify = "center">
						{topRecipes.map(recipe => 
							<Grid item xs = {12} md = {6} lg = {3} key = {recipe.id}>
								<LandingPageRecipeCard recipe = {recipe}/>
							</Grid>
						)}
					</Grid>
				</Box>
				<Button size = "large" align = "center" variant = "outlined" component = {Link} to = {`/main`}>View More</Button>
				<br></br>
				<br></br>
			</Paper>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Paper square elevation={0} align = "center">
				<br></br>
				<Typography variant = "h4" align = "center" className = {classes.subheading}>Top Users</Typography>
				<Box mx = {6} my = {4}> 
					<Grid container align = "center" spacing = {6} justify = "center">
						{topUsers.map(user => 
							<Grid item xs = {12} md = {6} lg = {3} key = {user.id}>
								<LandingPageUserCard user = {user} />
							</Grid>
						)}
					</Grid>
				</Box>
				<Button size = "large" align = "center" variant = "outlined" component = {Link} to = {`/main`}>View More</Button>
				<br></br>
				<br></br>
			</Paper>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</React.Fragment>
	)
}

export default MainDisplay

