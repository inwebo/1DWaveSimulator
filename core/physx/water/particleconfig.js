//<![CDATA[
;(function(window){
    var L        = window.LibreJs = window.LibreJs || {};
    var Plugins  = L.Plugins      = L.Plugins      || {};
    var Physx  = Plugins.Physx = Plugins.Physx || {};
    var Water  = Plugins.Physx.Water = Plugins.Physx.Water   || {};
    /**
     *
     * @param intNaturalPosition Vertical size
     * @param intMass Kgs
     * @constructor
     */
    Water.ParticleConfig = function(intNaturalPosition, intMass){
        var plugin              = this;
        plugin.naturalPosition  = intNaturalPosition;
        plugin.mass             = intMass || .5;
    };

})(window);
//]]>