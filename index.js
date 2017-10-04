require('file-loader!./index.html')

import './src/css/main.scss';

window.jQuery = require('jquery');
window.$ = require('jquery');
require('./src/lightbox2/js/lightbox.js');
require('./src/slippry/src/slippry.js');

$(document).ready(function($) {
    $('body').show();
    $('#slides').slippry({
        adaptiveHeight: false,
        pause: 10000,
        speed: 2000,
        pagerClass: 'slider-pager',
        controls: true
    });

    let year = new Date().getFullYear();
    let w = $(document).width(), sW, sH;
    $('footer .year').text(year);
    if(w <= 1024 && w >= 768){
        sW = 650;
        sH = 260;
    } else {
        sW = 950;
        sH = 250;
    }

    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 650);
    
        return false;
    });
});