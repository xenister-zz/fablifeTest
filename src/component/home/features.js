import React from "react"
import { Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import rocket from "../../images/rocket.png"
import heart from "../../images/heart-health.png"
import travel from "../../images/travel-rocket.png"

const useStyles = makeStyles(theme => ({
  featureList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  logo: {
    paddingRight: "20px",
  },
  gridList: {
    marginTop: "40px",
  },
}))

const Features = () => {
  const classes = useStyles()

  return (
    <div id="features" className={classes.featureList}>
      <Grid
        container
        item
        md={8}
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.gridList}
      >
        <img id="rocket-img" src={rocket} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Premium Rocket
          </Typography>
          <Typography variant="body1" gutterBottom>
            Falcon 12 is a completly reusable one-stage-to-orbit medium-lift
            launch vehicle designed and manufactured by SpaceX with free wifi
            and beers.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        md={8}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridList}
      >
        <img id="travel-img" src={travel} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Fast Travel
          </Typography>
          <Typography variant="body1" gutterBottom>
            You wake up late and have an important meeting that you can't miss ?
            On our latest rocket travel to Mars under 1h.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        md={8}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridList}
      >
        <img id="health-img" src={heart} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Best Life insurance
          </Typography>
          <Typography variant="body1" gutterBottom>
            if you die because of a problem on our part your whole family will
            have a 5% reduction for life.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Features

{
  /* <Grid
        container
        xs
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <img id="rocket-img" src={rocket} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Premium Rocket
          </Typography>
          <Typography variant="body2" gutterBottom>
            Falcon 9 is a partially reusable two-stage-to-orbit medium-lift
            launch vehicle designed and manufactured by SpaceX in the United
            States
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs direction="row" justify="center" alignItems="center">
        <img id="travel-img" src={travel} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Premium Rocket
          </Typography>
          <Typography variant="body2" gutterBottom>
            Falcon 9 is a partially reusable two-stage-to-orbit medium-lift
            launch vehicle designed and manufactured by SpaceX in the United
            States
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs direction="row" justify="center" alignItems="center">
        <img id="health-img" src={heart} alt="Logo" className={classes.logo} />
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            Premium Rocket
          </Typography>
          <Typography variant="body2" gutterBottom>
            Falcon 9 is a partially reusable two-stage-to-orbit medium-lift
            launch vehicle designed and manufactured by SpaceX in the United
            States
          </Typography>
        </Grid>
      </Grid> */
}
