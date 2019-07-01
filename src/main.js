import "./main.css"
import Fireworks from "fireworks-canvas"

export default () => {
    const container = document.getElementById("container")
    const fireworks = new Fireworks(container)
    const options = {
        maxRockets:7,
        rocketSpawnInterval: 100,
        numParticles: 300,
        explosionMinHeight: 0.35,
        explosionMaxHeight: 0.9,
        explosionChance: 0.4
    }
    fireworks.start()
}