$(document).ready(function(){
    const landingLeft = $("#top-landing-container");
    landingLeft.hide();
    landingLeft.animate({left: '-=25px'},1);
    landingLeft.delay(400).animate({left: '+=25px', opacity:'show'},600, 'linear');

    const graphicRight = $("#top-hover-graphics");
    graphicRight.hide();
    graphicRight.animate({top: '-=25px'},1);
    graphicRight.delay(650).animate({top: '+=25px', opacity:'show'},800, 'linear');

    const bounceArrow = $("#bounce-arrow");
    bounceArrow.hide();
    bounceArrow.animate({top: '-=45px'},1);
    bounceArrow.delay(2250).animate({top: '+=45px', opacity:'show'},500, 'linear');


    }, false);