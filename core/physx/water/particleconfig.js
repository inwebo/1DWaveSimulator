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

    // export default class ParticleConfig {
    //     /**
    //      * @param int position
    //      * @param int mass
    //      */
    //
    //     constructor(position, mass) {
    //         this.position = position;
    //         this.mass = mass;
    //     }
    // }

})(window);
//]]>