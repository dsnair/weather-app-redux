import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    width: '35vw',
    height: '12vw',
    margin: '5vh'
  }
})

const Weather = props =>
  props.response && (
    <Paper elevation={6} className={props.classes.paper}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            {props.response.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            {props.response.weather[0].main}
          </Typography>
        </Grid>
      </Grid>

      <Grid container wrap="nowrap">
        <Grid container spacing={16}>
          <Grid item>
            <Typography variant="h1">
              <i className={`wi wi-owm-${props.response.weather[0].id}`} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              {Math.round(props.response.main.temp)}
              <i className="wi wi-fahrenheit" />
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" alignItems="flex-end">
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              Wind: {Math.round(props.response.wind.speed)} mph
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              Humidity: {Math.round(props.response.main.humidity)}%
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )

export default withStyles(styles)(Weather)
