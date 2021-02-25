function speedometerHide(){
    $('body').fadeOut('slow');
}

function speedometerShow(){
    $('body').fadeIn('slow');
}


function setRpmBar(rpm){
    let prog = 85;
    if(rpm <= 0) return prog;
    prog -= rpm * 0.009;
    if(prog <= 0) prog = 0;
    $('#rpmbarright').css('width', `${prog}%`);
}

function speedometerUpdate(speed, rpm, gear){
    setRpmBar(rpm);
    switch(gear){
        case 0: gear = 'N'; break;
        case -1: gear = 'R'; break;
    }
    $('#gear').text(`${gear}`);
    $('#speedtext').text(`${speed}`);
}

function speedometerThrottle(toggle){
    if(toggle){
        $('#throttle').css({"background": "red"});
    } else {
        $('#throttle').css({"background": "rgb(70, 69, 71)"});
    }
}

function speedometerBreak(toggle){
    if(toggle){
        $('#break').css({"background": "red"});
    } else {
        $('#break').css({"background": "rgb(70, 69, 71)"});
    }
}

function speedometerHandBreak(toggle){
    if(toggle){
        $('#handbreak').css({"color": "red"});
    } else {
        $('#handbreak').css({"color": "gray"});
    }
}