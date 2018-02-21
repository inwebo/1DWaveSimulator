export default class SimulationConfig {
    /**
     * @param {number} maxParticles
     * @param {number} framerate
     * @param {number} kConstant
     * @param {number} friction
     */
    constructor(maxParticles, framerate, kConstant, friction) {
        this.maxParticles = maxParticles;
        this.framerate    = framerate;
        this.frameDelay   = this.framerate * 1000;
        this.kConstant    = kConstant;
        this.friction     = friction;
    }
}