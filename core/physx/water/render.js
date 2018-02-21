export default class Render {
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {Simulation}        simulation
     */
    constructor(canvas, simulation) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.simulation = simulation;
        this.reverseOrigin();
        this.draw();
    }

    clear() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getParticleWidth() {
        return Math.floor(this.canvas.width / this.simulation.springs.length);
    };

    draw() {
        this.clear();
        let w = this.getParticleWidth();
        // add linear gradient
        let grd = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        // light blue
        grd.addColorStop(0, '#004CB3');
        // dark blue
        grd.addColorStop(1, '#8ED6FF');

        this.ctx.fillStyle = grd;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, this.simulation.springs[0].position);

        for (let i = 0; i < this.simulation.springs.length; i++) {
            if (i % 2 === 0) {
                this.simulation.springs[i].drawLine(this.ctx, w * i, this.simulation.springs[i].position);
            }
        }

        this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.closePath();
        this.ctx.fill();
    }

    reverseOrigin() {
        this.ctx.translate(0, this.canvas.height);
        this.ctx.scale(1, -1);
    }
}