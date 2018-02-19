var L = window.LibreJs = window.LibreJs || {};
var Plugins = L.Plugins = L.Plugins || {};
var Physx = Plugins.Physx = Plugins.Physx || {};
var Water = Plugins.Physx.Water = Plugins.Physx.Water || {};

var mass = 'mass';

function start() {
    window.simulation.start();
};

function stop() {
    window.simulation.stop();
};

function update() {
    window.simulation.update();
};

function clear() {
    console.clear();
};

var simulationConfigFactory = function (sInputParticle, sInputFrameRate, sInputK, sInputFriction) {
    var intParticles = parseInt(window.document.getElementById(sInputParticle).value);
    var sFramerate = parseFloat(window.document.getElementById(sInputFrameRate).value);
    var sK = parseFloat(window.document.getElementById(sInputK).value);
    var sFriction = parseFloat(window.document.getElementById(sInputFriction).value);
    var simConfig = new Water.SimulationConfig(intParticles, sFramerate, sK, sFriction);
    return simConfig;
};
var particleConfigFactory = function (canvas) {
    var mass = parseFloat(window.document.getElementById('mass').value);
    var particleConfig = new Water.ParticleConfig(canvas.height / 2, mass);
    return particleConfig;
};