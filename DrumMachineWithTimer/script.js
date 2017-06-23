var audio_context = window.AudioContext || window.webkitAudioContext;
var con = new audio_context();


var hat;

var hat_seq = [1, 1, 0, 1, 0, 1, 0, 1];

var step = 0;

setInterval(function() {
    if (hat_seq[step % hat_seq.length] == 1) {
        playHat();
    }
    step = step+1;
    
}, 200);

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
