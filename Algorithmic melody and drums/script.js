
var audio_context = window.AudioContext || window.webkitAudioContext;
var con = new audio_context();


var osc = con.createOscillator();
osc.type = 'triangle';
var osc_amp = con.createGain();
osc_amp.gain.value = 0.2;
osc.connect(osc_amp);

osc_amp.connect(con.destination);


var freq = 200;
osc.start();
var hat;
var snare;

var hat_seq = [0];
var sn_seq = [0];

var step = 0;
var interval  = 0.250;

loadSample('cl_hat_3001.wav', function (buffer){
    hat = buffer; 
});

loadSample('BD1010.WAV', function (buffer){
    snare = buffer; 
});

function updateHats() {
    var text = document.getElementById("hat_editor");
    hat_seq = text.value.split(',');
}

function updateSnare() {
    var text = document.getElementById("sn_editor");
    sn_seq = text.value.split(',');
}

function playSound(buffer, time){
    var player = con.createBufferSource();
    player.buffer = buffer;
    player.start(); 
    player.loop = false;
    player.connect(con.destination); 
}

function changeNote(when) {
    freq = freq * 2;
    if (freq > 2000) {
        freq = freq * 0.1;
    }
    
    osc.frequency.value = freq;
    osc.frequency.setValueAtTime(freq, when);
}

var wait_time = 0.250;
var got_up_to;


setInterval(function(){
    var now = con.currentTime;
    var max_future_time = now + (wait_time  * 1.5);
    if (got_up_to > now) {
        now = got_up_to;
    }
    
    while (now <= max_future_time){
        step ++;
        if (hat_seq[step % hat_seq.length] > Math.random()) {
           playSound(hat, now);
        }
   
        if (sn_seq[step % sn_seq.length]> Math.random()){
          playSound(snare, now);
        }
        
        changeNote(now);
        
        
        
        now += interval;
    }
    got_up_to = now;
    
}, wait_time*1000);



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

    
