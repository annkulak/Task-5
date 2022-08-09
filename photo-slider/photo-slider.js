import { getPhotoSliderInterface } from './slider-wrapper.js';
import { photoSliderMove, sketchesActivity } from './animation.js';

function getPhotoSlider() {    
    getPhotoSliderInterface();
    photoSliderMove();
    sketchesActivity();
};

export { getPhotoSlider };