import { pictures } from '../data/pictures.js';

class PhotoSlide {
    constructor(city, name, src, description) {
        this.city = city;
        this.name = name;
        this.src = src;
        this.alt = name;
        this.loading = 'lazy';
        this.description = description;
        this.initPhotoSlide();
    };

    initPhotoSlide() {
        this.element = document.createElement('div');
        this.element.classList.add('picture-container');
        this.initPictureElement();
    };

    initPictureElement() {
        this.pictureElement = document.createElement('img');
        this.pictureElement.classList.add('picture');
        this.pictureElement.src = this.src;
        this.pictureElement.alt = this.alt;
        this.element.append(this.pictureElement);
    };
};

let picturesAlbum = [];

(function getPicturesAlbum() {
    for (let i = 0; i < pictures.length; i++) {
        picturesAlbum[i] = new PhotoSlide(pictures[i].city, pictures[i].name, pictures[i].src, pictures[i].description);
    };
})();

function getPhotoSlides() {
    const sliderBlock = document.querySelector('.photo-slider-block');
    for (let i = 0; i < picturesAlbum.length; i++) {
        sliderBlock.appendChild(picturesAlbum[i].element);
        picturesAlbum[0].element.classList.add('active');
    };
};

export { picturesAlbum, getPhotoSlides };