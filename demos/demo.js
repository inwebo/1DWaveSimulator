import * as Spring           from '../core/physx/water/spring';
import * as SpringConfig     from '../core/physx/water/spring-config';
import * as Simulation       from '../core/physx/water/simulation';
import * as SimulationConfig from '../core/physx/water/simulation-config';
import * as Render           from '../core/physx/water/render';
import * as RenderConfig     from '../core/physx/water/render-config';

let canvas,
    simulation,
    simulationConfig,
    damperConfig,
    render;

canvas           = window.document.getElementById("demo");

simulationConfig = new SimulationConfig(50, 1/30, -.995, -0.02);
damperConfig     = new SpringConfig();
simulation       = new Simulation(simulationConfig, damperConfig);
render           = new Render(canvas, simulation);

    //
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
