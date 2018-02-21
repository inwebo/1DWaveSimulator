import Render from './render';

export default class Simulation {

    /**
     * @param {SimulationConfig} simulationConfig
     * @param {SpringConfig}     springConfig
     */
    constructor(simulationConfig, springConfig) {
        /** @type {SimulationConfig} */
        this.simulationConfig = simulationConfig;
        /** @type {SpringConfig} */
        this.springConfig     = springConfig;
        /** @type {Array<Render>} */
        this.observers        = [];
        /** @type {Array<Spring>} */
        this.springs          = [];
        /** @type {number} */
        this.engine           = null;
    }

    /**
     * Start simulation
     */
    start() {
        this.engine = setInterval(function () {
            this.update();
        }, this.simulationConfig.framerate);
    }

    /**
     * Stop simulation
     */
    stop() {
        clearInterval(this.engine);
    }

    /**
     * Simulation step
     */
    update() {
        for (let i = 0; i < this.springs.length; i++) {

            let spring,
                force,
                smoothedForce,
                damper,
                acceleration,
                velocity,
                computedPosition,
                left,
                right;

            spring = this.springs[i];
            left   = this.getPrevSpring(i);
            right  = this.getNextSpring(i);

            // Force
            force            = spring.getAmplitude();
            smoothedForce    = this.simulationConfig.kConstant * force;
            damper           = spring.velocity * this.simulationConfig.friction;
            acceleration     = (smoothedForce + damper) / this.springConfig.mass;
            velocity         = acceleration * this.simulationConfig.framerate;
            spring.velocity += velocity;

            computedPosition = spring.velocity * this.simulationConfig.framerate;

            spring.position += computedPosition;
            left.position   += computedPosition * this.simulationConfig.friction;
            left.velocity   += velocity * 0.99;
            right.position  += computedPosition * 0.99;
            right.velocity  += velocity * this.simulationConfig.friction;
        }

        // Useless ?
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].draw();
        }
    }

    /**
     * @param {number} index
     *
     * @returns {Spring}
     */
    getPrevSpring(index) {
        return (index !== 0) ? this.springs[index - 1] : this.springs[index];
    }

    /**
     * @param {number} index
     *
     * @returns {Spring}
     */
    getNextSpring(index) {
        return (index !== this.springs.length - 1) ? this.springs[index + 1] : this.springs[index];
    }

    /**
     * @param {Render} observer
     */
    attachObserver(observer) {
        if (observer instanceof Render) {
            this.observers.push(observer);
        }
    }
}
