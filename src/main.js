import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/home/Home"
import Photos from "./components/photos/Photos"
import Videos from "./components/videos/Videos"

const Main = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/photos" component={Photos} />
    <Route path="/videos" component={Videos} />
  </main>
)

export default Main