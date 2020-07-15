import React from "react"
import { Button, makeStyles, MenuItem } from '@material-ui/core'
import ButtonAppBarCollapse from "./HomeHeaderButtonsCollapsed"
const useStyles = makeStyles(theme => ({
	root: {
		position: "absolute",
		right: 0
	},
	buttonBar: {
		[theme.breakpoints.down("xs")]: {
			display: "none"
		},
		marginLeft: "24px",
		marginRight: "0px"
	}
}));

export default function HomeHeaderButtons() {
	const classes = useStyles();
	return (
		<div>
			<ButtonAppBarCollapse>
				<MenuItem>Login</MenuItem>
				<MenuItem>Sign Up</MenuItem>
			</ButtonAppBarCollapse>
			<div>
				<Button href="/login" variant="contained"  className={classes.buttonBar}>Login</Button>
				<Button href="/signup" variant="contained" className={classes.buttonBar}>Sign up</Button>
			</div>
		</div>
	)
}