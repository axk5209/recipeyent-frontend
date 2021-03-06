import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

const Success = () => {
	return (
		<Fragment>
			<Typography variant="h2" align="center">
				Thank you!
			</Typography>
			<Typography component="p" align="center" style={{ marginTop: 40 }}>
				Your recipe can now be viewed by recipeyents!
			</Typography>
		</Fragment>
	)
}

export default Success
