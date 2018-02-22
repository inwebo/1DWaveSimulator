import Spring           from '../core/physx/water/spring';
import SpringConfig     from '../core/physx/water/spring-config';
import Simulation       from '../core/physx/water/simulation';
import SimulationConfig from '../core/physx/water/simulation-config';
import Render           from '../core/physx/water/render';
import RenderConfig     from '../core/physx/water/render-config';

let canvas,
    mass,
    countSprings,
    framerate,
    kConst,
    friction,
    simulation,
    simulationConfig,
    springConfig,
    render;

canvas           = window.document.getElementById("demo");
mass             = parseFloat(window.document.getElementById('mass').value);
countSprings     = parseInt(window.document.getElementById('particles').value);
framerate        = parseFloat(window.document.getElementById('framerate').value);
kConst           = parseFloat(window.document.getElementById('kconst').value);
friction         = parseFloat(window.document.getElementById('friction').value);

simulationConfig = new SimulationConfig(countSprings, 1/30, -.995, -0.02);
springConfig     = new SpringConfig(canvas.height / 2, mass);
simulation       = new Simulation(simulationConfig, springConfig);
render           = new Render(canvas, simulation);

for(let i=0; i < canvas.width; i++) {
    simulation.springs.push(new Spring(i, mass));
}
// simulation.attachObserver(render);
simulation.start();
document.addEventListener('simulationStep', render.draw);
//
// canvas.addEventListener('click', function(evt){
//     let simulationConfig = new SimulationConfig(countSprings, 1/30, -.995, -0.02);
//     let particleConfig   = new SpringConfig(canvas.height / 2, mass)
//
//     let x = getPosition(evt).x;
//     let pWidth = canvas.width/simulation.springs.length;
//     let col = Math.floor(x / pWidth);
//     simulation.springs[col].setPosition(getPosition(evt).y);
//     render.draw();
// }, false);