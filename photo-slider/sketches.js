import { pictures } from '../data/pictures.js';

class Sketches {
    constructor(city, name, src) {
        this.city = city;
        this.name = name;
        this.src = src;
        this.alt = name;
        this.initSketches();
    };

    initSketches() {
        this.element = document.createElement('div');
        this.element.classList.add('sketches-container');
        this.initSketchesElement();
    };

    initSketchesElement() {
        this.sketchesElement = document.createElement('img');
        this.sketchesElement.classList.add('sketches');
        this.sketchesElement.src = this.src;
        this.sketchesElement.alt = this.alt;
        this.element.append(this.sketchesElement);
    };
};

let sketchesAlbum = [];

(function getPicturesAlbum() {
    for (let i = 0; i < pictures.length; i++) {
        sketchesAlbum[i] = new Sketches(pictures[i].city, pictures[i].name, pictures[i].src);
    };
})();

function getSketches() {
    const sketchesBlock = document.querySelector('.photo-sketches-container');
    for (let i = 0; i < sketchesAlbum.length; i++) {
        sketchesBlock.appendChild(sketchesAlbum[i].element);
        sketchesAlbum[0].element.classList.add('active');
        sketchesAlbum[i].element.id = `${i}`;
    };
};

export { sketchesAlbum, getSketches };