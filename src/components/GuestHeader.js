import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

import {
	Link
} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		fontWeight: "bold"
	},
}));

export default function GuestHeader(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<CssBaseline />
				<Toolbar>
					<Container align = "left" maxWidth = "sm">
						<Typography variant="h4" className={classes.title} component = {Link} to = "/home" maxWidth = "sm">
								Recipeyent
						</Typography>
					</Container>
					&nbsp;
				{props.children}
				</Toolbar>
			</AppBar>
		</div>
	);
}