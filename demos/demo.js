import Spring           from '../core/physx/water/spring';
import Simulation       from '../core/physx/water/simulation';
import SimulationConfig from '../core/physx/water/simulation-config';
import Render           from '../core/physx/water/render';
import {getPosition}    from '../demos/helpers';

let canvas,
    mass,
    countSprings,
    framerate,
    kConst,
    friction,
    simulation,
    simulationConfig,
    render;

canvas           = window.document.getElementById("demo");
mass             = parseFloat(window.document.getElementById('mass').value);
countSprings     = parseInt(window.document.getElementById('particles').value);
framerate        = parseFloat(window.document.getElementById('framerate').value);
kConst           = parseFloat(window.document.getElementById('kconst').value);
friction         = parseFloat(window.document.getElementById('friction').value);

simulationConfig = new SimulationConfig(countSprings, 1/30, -.995, -0.02);
simulation       = new Simulation(simulationConfig);
render           = new Render(canvas, simulation);

for(let i=0; i < canvas.width; i++) {
    simulation.springs.push(new Spring(canvas.height / 2, mass));
}

document.addEventListener('simulationStep', function(event) { render.draw(event) });
simulation.start();

canvas.addEventListener('click', function(evt){
    let x      = getPosition(evt).x;
    let pWidth = canvas.width/simulation.springs.length;
    let index    = Math.floor(x / pWidth);
    simulation.springs[index].x = getPosition(evt).y;
}, false);