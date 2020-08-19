import React from "react"
import Header from "../component/home/header"
import Features from "../component/home/features"
import AddEmail from "../component/home/register"
import VideoStream from "../component/home/video"
import Pricing from "../component/home/pricing"

const Home = () => {

  return (
    <React.Fragment>

      <Header />
      <AddEmail />
      <Features />
      <VideoStream />
      <Pricing />

    </React.Fragment>
  )
}

export default Home
