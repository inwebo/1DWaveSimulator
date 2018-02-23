export default class Spring {

    /**
     * @param {number} x
     * @param {number} mass
     * @param {number} velocity
     */
    constructor(x, mass, velocity = .0) {
        this.x             = x;
        this.startPosition = x;
        this.mass          = mass;
        this.velocity      = velocity;
    }

    /**
     * @returns {number}
     */
    getAmplitude() {
        return this.x - this.startPosition;
    }
}