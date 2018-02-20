export default class Damper {

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
     * @param {number} position
     */
    setPosition(position) {
        this.x = position;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {number}                   x
     * @param {number}                   width
     */
    draw(ctx, x, width) {
        ctx.fillRect(x, 0, width, this.x);
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {number}                   x
     * @param {number}                   y
     */
    drawLine(ctx, x, y) {
        ctx.lineTo(x, y)
    }

    /**
     * @returns {number}
     */
    getAmplitude() {
        return this.x - this.startPosition;
    }
}