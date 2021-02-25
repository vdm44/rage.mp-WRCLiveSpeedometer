let player = mp.players.local;

let speedometer = null;
let speedometerShow = false;


mp.events.add("guiReady", () => {
    speedometer = mp.browsers.new("package://WRCLiveSpeedometer/index.html");
    speedometer.active = true;
});

mp.events.add("render", () => {
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            if(!speedometerShow){
                speedometer.execute('speedometerShow();');
                speedometerShow = true;
            }
            let rpm = player.vehicle.rpm * 10000;
            let gear = player.vehicle.gear;
            let speed = player.vehicle.getSpeed() * 3.6;
            speed = parseInt(speed);
            if(gear == 0 && speed > 0){
                gear = -1;
            }
            speedometer.execute(`speedometerUpdate(${speed}, ${rpm}, ${gear});`);
            if(mp.game.controls.isControlJustPressed(0, 129)) speedometer.execute(`speedometerThrottle(true);`);
            if(mp.game.controls.isControlJustPressed(0, 130)) speedometer.execute(`speedometerBreak(true);`);
            if(mp.game.controls.isControlJustPressed(0, 76)) speedometer.execute(`speedometerHandBreak(true);`);

            if(mp.game.controls.isControlJustReleased(0, 129)) speedometer.execute(`speedometerThrottle(false);`);
            if(mp.game.controls.isControlJustReleased(0, 130)) speedometer.execute(`speedometerBreak(false);`);
            if(mp.game.controls.isControlJustReleased(0, 76)) speedometer.execute(`speedometerHandBreak(false);`);
        }
    }
    else{
        if(speedometerShow){
            speedometer.execute('speedometerHide();');
            speedometerShow = false;
        }
    }
});
/*
mp.keys.bind(0x57, true, function() {// 'W' key down
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            
        }
    }
});

mp.keys.bind(0x57, false, function() {// 'W' key up
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            speedometer.execute(`speedometerThrottle(false);`);
        }
    }
});

mp.keys.bind(0x53, true, function() {// 'S' key down
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            
        }
    }
});

mp.keys.bind(0x53, false, function() {// 'S' key up
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            speedometer.execute(`speedometerBreak(false);`);
        }
    }
});


mp.keys.bind(0x20, true, function() {// 'SPACE' key down
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            
        }
    }
});

mp.keys.bind(0x20, false, function() {// 'SPACE' key up
    if(player.vehicle){
        if(player.vehicle.getPedInSeat(-1) === player.handle){
            speedometer.execute(`speedometerHandBreak(false);`);
        }
    }
});*/