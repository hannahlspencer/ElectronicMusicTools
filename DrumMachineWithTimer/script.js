var audio_context = window.AudioContext || window.webkitAudioContext;
var con = new audio_context();


var hat;

var hat_seq = [1, 1, 0, 1, 0, 1, 0, 1];

var step = 0;

setInterval(function() {
var step = 0;
var wait_time = 0.5;
var got_up_to;
var interval  = 0.125/2;

setInterval(function() {
    var now = con.currentTime;
    var max_future_time = now + (wait_time*1.5);
    if(got_up_to > now) {
        now = got_up_to;
    }
    
    while(now <= max_future_time) {
        step++;
     if (hat_seq[step % hat_seq.length] === 0) {
        //playHat(now);
    }
    now += interval;

    }
    got_up_to = now;
   
    
}, wait_time*1000);

loadSample('CY0025.WAV', function (buffer){
    hat = buffer; 
});



function playHat(){
     var player = con.createBufferSource();
    player.buffer = hat;
    player.start(); 
    player.loop = false;
    player.connect(con.destination); 
}




function loadSample(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function(){
        var audioData = request.response;
        con.decodeAudioData(audioData, function(buffer) {
            console.log(buffer);
            callback(buffer);
        });
    };
    request.send();
}
