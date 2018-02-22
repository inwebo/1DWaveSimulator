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

let springs = [];

for(let i=0; i<400; i++) {
    springs.push(new Spring(i, mass));
}

simulation       = new Simulation(simulationConfig, springConfig);
simulation.springs = springs;

render           = new Render(canvas, simulation);

// console.log(spring, simulationConfig, springConfig);
simulation.attachObserver(render);
simulation.start();

// function getPosition(event) {
//     var x = new Number();
//     var y = new Number();
//     var canvas = document.getElementById("demo");
//
//     if (event.x != undefined && event.y != undefined) {
//         x = event.x;
//         y = event.y;
//     }
//     else // Firefox method to get the position
//     {
//         x = event.clientX + document.body.scrollLeft +
//             document.documentElement.scrollLeft;
//         y = canvas.height - event.clientY;
//
//     }
//
//     x -= canvas.offsetLeft;
//     return {
//         x: x,
//         y: y
//     };
// }

// canvas.addEventListener('click', function(evt){
//     let simulationConfig = simulationConfigFactory("particles", "framerate", "kconst","friction");
//     let particleConfig   = particleConfigFactory(canvas);
//
//     var x = getPosition(evt).x;
//     var pWidth = canvas.width/simulation.totalParticles;
//     var col = Math.floor(x / pWidth);
//     simulation.particles[col].setPosition(getPosition(evt).y);
//     render.draw();
// }, false);

    // //simulationConfig = new Water.SimulationConfig( 200, 1/30, -.995, -0.25 );
    // simulationConfig = new Water.SimulationConfig( 50, 1/30, -.995, -0.02 );
    // window.canvas = canvas = window.document.getElementById("demo");
    //
    // particleConfig  = particleConfigFactory(canvas,window.document.getElementById("mass"));
    // window.simulation = simulation  = new Water.Simulation(simulationConfig, particleConfig);
    // render      = new Water.Render(canvas, simulation);

    // simulation.attach(render);
    // simulation.start();

    // canvas.addEventListener('click',function(evt){
    //     simulationConfig = simulationConfigFactory("particles", "framerate", "kconst","friction");
    //     particleConfig   = particleConfigFactory(canvas);
    //
    //     var x = getPosition(evt).x;
    //     var pWidth = canvas.width/simulation.totalParticles;
    //     var col = Math.floor(x / pWidth);
    //     simulation.particles[col].setPosition(getPosition(evt).y);
    //     render.draw();
    // }, false);

        // /**
        //  * Fix relative element
        //  * @type {Element}
        //  */
        // var container = window.document.getElementById("col-main-post-content");
    //
    //     function getRelativeCoordinates ( e ) {
    //
    //         var pos = {}, offset = {}, ref;
    //
    //         ref = container.offsetParent;
    //
    //         pos.x = !! e.touches ? e.touches[ 0 ].pageX : e.pageX;
    //         pos.y = !! e.touches ? e.touches[ 0 ].pageY : e.pageY;
    //
    //         offset.left = container.offsetLeft;
    //         offset.top = container.offsetTop;
    //
    //         while ( ref ) {
    //
    //             offset.left += ref.offsetLeft;
    //             offset.top += ref.offsetTop;
    //
    //             ref = ref.offsetParent;
    //         }
    //
    //         return {
    //             x : pos.x - offset.left,
    //             y : pos.y - offset.top,
    //         };
    //
    //     }
    // }
