const slider_01_img_01 = require('../image/slider/diamond1.jpg');
const slider_01_img_02 = require('../image/slider/diamond2.jpg');
const slider_01_img_03 = require('../image/slider/diamond3.jpg');

const slider_02_img_01 = require('../image/slider/diamond4.jpg');
const slider_02_img_02 = require('../image/slider/diamond5.jpg');
const slider_02_img_03 = require('../image/slider/diamond6.jpg');

const slider_03_img_01 = require('../image/slider/diamond7.jpg');
const slider_03_img_02 = require('../image/slider/diamond3.jpg');
const slider_03_img_03 = require('../image/slider/diamond4.jpg');

const sliderImg = [
    {
        type: 'left',
        title: 'special',
        colortitle: 'red',
        name : 'Tigggers College Jackett',
        content: 'Lorem ipsum dolor sit amet. Consectetur adipisicing elit.',
        img1: slider_01_img_01,
        img2: slider_01_img_02,
        img3: slider_01_img_03,
        contentBtn: 'start shopping',
        sizeBtn: 'md',
        path: '/'
    },
    {
        type: 'right',
        title: 'just arrived',
        colortitle: 'blue',
        name : 'Autumn-colour coats',
        content: 'Lorem ipsum dolor sit amet. Consectetur adipisicing elit.',
        img1: slider_02_img_01,
        img2: slider_02_img_02,
        img3: slider_02_img_03,
        contentBtn: 'start shopping',
        sizeBtn: 'md',
        path: '/'
    },
    {
        type: 'left',
        title: 'special',
        colortitle: 'gray',
        name : 'Ethnic blouses',
        content: 'Lorem ipsum dolor sit amet. Consectetur adipisicing elit.',
        img1: slider_03_img_01,
        img2: slider_03_img_02,
        img3: slider_03_img_03,
        contentBtn: 'view collection',
        sizeBtn: 'md',
        path: '/'
    }
]

export default sliderImg;