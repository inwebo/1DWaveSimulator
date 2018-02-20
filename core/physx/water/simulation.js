//<![CDATA[
;(function(window){
    var L        = window.LibreJs = window.LibreJs || {};
    var Plugins  = L.Plugins      = L.Plugins      || {};
    var Physx  = Plugins.Physx = Plugins.Physx || {};
    var Water  = Plugins.Physx.Water = Plugins.Physx.Water   || {};
    var Particle = Plugins.Physx.Water.Particle;
    var Render = Plugins.Physx.Water.Render;

    export default class Simulation {
        constructor() {

        }
    }

    Water.Simulation = function( simulationConfig, particleConfig){
        var plugin = this;

        plugin.config           = null;
        plugin.engine           = null;
        plugin.totalParticles   = null;
        plugin.particles        = [];
        plugin.particleConfig   = null;

        plugin.observers        = [];

        var init = function(simulationConfig, particleConfig){
            plugin.config         = simulationConfig;
            plugin.particleConfig = particleConfig;
            plugin.totalParticles = plugin.config.particles;

            (function (intTotalParticles, particleConfig) {
                var i = 0;
                for(i; i < intTotalParticles;i++) {
                    var particle = new Particle(particleConfig.naturalPosition, particleConfig.mass);
                    plugin.particles.push(particle);
                }
            })(plugin.totalParticles, plugin.particleConfig);
        };

        plugin.start = function(){
            plugin.engine = setInterval(function() {
                plugin.update();
            }, plugin.config.framerate);
        };

        plugin.update = function(){
            for(var i = 0; i < plugin.totalParticles;i++) {
                var particle = plugin.particles[i];
                var force,
                    smoothedForce,
                    damper,
                    acceleration,
                    velocity,
                    computedPosition;

                var left = getLeft(i);
                var right = getRight(i);

                // Force
                force               = particle.getAmplitude() ;
                smoothedForce       = plugin.config.kConstant * force;

                damper              = particle.velocity * plugin.config.friction;

                acceleration        = ( smoothedForce + damper ) / plugin.particleConfig.mass;
                velocity            = acceleration * plugin.config.framerate;
                particle.velocity  += velocity;

                computedPosition    =  particle.velocity * plugin.config.framerate;

                particle.position  += computedPosition;
                left.position += computedPosition * plugin.config.friction;
                left.velocity  += velocity * 0.99;
                right.position += computedPosition * 0.99;
                right.velocity  += velocity * plugin.config.friction;
            }
            for(var i=0; i < plugin.observers.length; i++) {
                plugin.observers[i].draw();
            }
        };

        var getVelocity = function(force){
            var smoothed = force * plugin.config.kConstant;
        };

        var getLeft = function(i) {
            return (i!==0) ? plugin.particles[i-1] : plugin.particles[i];
        };

        var getRight = function(i){
            return (i!==plugin.totalParticles-1) ? plugin.particles[i+1] : plugin.particles[i];
        };

        plugin.stop = function(){
            clearInterval(plugin.engine);
        };

        plugin.attach = function(observer){
            if( observer instanceof Plugins.Physx.Water.Render) {
                plugin.observers.push(observer);
            }
        };

        init(simulationConfig,particleConfig);
    };

})(window);
//]]>