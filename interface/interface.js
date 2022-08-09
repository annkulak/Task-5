import { getPhotoPageInterface } from '../interface/photo-page.js';

function getWrapper() {
    const wrapper = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', wrapper);
    wrapper.classList.add('interface-wrapper', 'dark');
};

function getPhotoPage() {
    const wrapper = document.querySelector('.interface-wrapper');  
    const photoPage = document.createElement('section');
    wrapper.appendChild(photoPage);
    photoPage.classList.add('photo-page', 'photo-slider-addition');
    getPhotoPageInterface();
};

function getInterface() {
    getWrapper();         
    getPhotoPage();
};

export { getInterface };