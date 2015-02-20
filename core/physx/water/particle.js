//<![CDATA[
;(function(window){
    var L        = window.LibreJs = window.LibreJs || {};
    var Plugins  = L.Plugins      = L.Plugins      || {};
    var Physx  = Plugins.Physx = Plugins.Physx || {};
    var Water  = Plugins.Physx.Water = Plugins.Physx.Water   || {};
    Water.Particle = function(intNaturalPosition, intMass){
        var plugin              = this;
        plugin.naturalPosition  = intNaturalPosition;
        plugin.position         = intNaturalPosition;
        plugin.velocity         = .0;
        plugin.mass             = intMass;

        plugin.setPosition = function(intPos){
            plugin.position = intPos;
        };

        plugin.draw = function(ctx,x,width){
            ctx.fillStyle = "blue";
            ctx.fillRect(x,0,width,plugin.position);
        };

        plugin.drawLine = function(ctx,x,y){
            ctx.lineTo(x,y)
        };

        plugin.getAmplitude = function() {
            return plugin.position - plugin.naturalPosition;
        };
    };

})(window);
//]]>