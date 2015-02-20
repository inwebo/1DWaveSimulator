//<![CDATA[
;(function(window){
    var L        = window.LibreJs = window.LibreJs || {};
    var Plugins  = L.Plugins      = L.Plugins      || {};
    var Physx  = Plugins.Physx = Plugins.Physx || {};
    var Water  = Plugins.Physx.Water = Plugins.Physx.Water   || {};
    /**
     *
     * @param iParticles total particles
     * @param framerate fps
     * @param kConstant negative attract, positive repulse
     * @param frictionConstant
     * @constructor
     */
    Water.SimulationConfig = function(iParticles, framerate, kConstant, frictionConstant){
        var plugin = this;
        plugin.particles    = iParticles;
        plugin.framerate    = framerate        || 1/30;
        plugin.frameDelay   = plugin.framerate * 1000;
        plugin.kConstant    = kConstant        || -0.995;
        plugin.friction     = frictionConstant || -0.5;
    };

})(window);
//]]>