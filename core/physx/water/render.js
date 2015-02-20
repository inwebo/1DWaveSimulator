//<![CDATA[
;(function(window){
    var L        = window.LibreJs = window.LibreJs || {};
    var Plugins  = L.Plugins      = L.Plugins      || {};
    var Physx  = Plugins.Physx = Plugins.Physx || {};
    var Water  = Plugins.Physx.Water = Plugins.Physx.Water   || {};
    Water.Render          = function(canvas, simulation, renderConfig){
        var plugin = this;

        plugin.canvas;
        plugin.ctx;
        plugin.simulation;

        var init = function(canvas,simulation){
            plugin.canvas = canvas;
            plugin.ctx = plugin.canvas.getContext( "2d" );
            plugin.simulation = simulation;
            setOrigin();
            plugin.draw();
        };

        plugin.clear = function(){
            plugin.ctx.fillStyle = "white";
            plugin.ctx.fillRect(0, 0, plugin.canvas.width,plugin.canvas.height);
        };

        var getParticleWidth = function(){
            return Math.floor(plugin.canvas.width/plugin.simulation.totalParticles);
        };

        var setOrigin = function(){
            plugin.ctx.translate( 0, plugin.canvas.height );
            plugin.ctx.scale( 1, -1 );
        };

        plugin.draw = function(){
            plugin.clear();
            var w = getParticleWidth();
            // add linear gradient
            var grd = plugin.ctx.createLinearGradient(0, 0, 0, canvas.height);
            // light blue
            grd.addColorStop(0, '#004CB3');
            // dark blue
            grd.addColorStop(1, '#8ED6FF');
            //context.fillStyle = grd;

            plugin.ctx.fillStyle = grd;
            plugin.ctx.beginPath();
            plugin.ctx.moveTo(0,0);

            plugin.ctx.lineTo(0,plugin.simulation.particles[0].position);

            for(var i = 0; i < plugin.simulation.particles.length; i++) {
                if(i%2 === 0) {
                    //plugin.simulation.particles[i].draw(plugin.ctx, w*i, w);
                    plugin.simulation.particles[i].drawLine(plugin.ctx,w*i,plugin.simulation.particles[i].position);
                }
            }

            plugin.ctx.lineTo(canvas.width,canvas.height/2);
            plugin.ctx.lineTo(canvas.width,0);
            plugin.ctx.closePath();
            plugin.ctx.fill();
        };

        init(canvas,simulation);
    };

})(window);
//]]>