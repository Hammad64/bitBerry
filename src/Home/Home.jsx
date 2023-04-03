import React from 'react'
import Slider from "./slider/Slider";
import Stay from "./stayInTouch/stayInTouch";
import Universe from "./nxtUniverse/Universe";
import Carousel from "./carousel/Carousel";
import Works from "./woks/works";
import Roadmap from "./roadmap/roadmap";
import Tokens from "./tokens/Tokens";
import ProjectDocument from "./projectDocument/projectDocument";
import Mechanism from "./mechanism/mechanism";
import HowWeWork from "./howWeWork/howWeWork";
import EcoSystem from "./ecoSystem/ecoSystem";
import Graph from "./graph/Graph";
function Home() {
  return (
    <>
        <Slider />
    <Carousel />
    <Universe />
    <Tokens />
    <Graph />
    <EcoSystem />
    <HowWeWork />
    {/* <Mechanism /> */}
    <ProjectDocument />
    <Roadmap />
    <Works />
    <Stay />
    </>
  )
}

export default Home