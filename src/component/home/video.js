import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  stream: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}))

const VideoStream = () => {
  const classes = useStyles()

  return (
    <div id="vidStream" >
      <Container className={classes.stream}>
        <iframe
          id="video"
          src="https://www.youtube.com/embed/0qo78R_yYFA"
          width="720"
          height="420"
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </Container>
    </div>
  )
}

export default VideoStream