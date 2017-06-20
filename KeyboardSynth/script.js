  var audio_context = window.AudioContext || window.webkitAudioContext;  
  
  var context = new audio_context();
  var oscillator = context.createOscillator();
  var filter = context.createBiquadFilter();
  
  oscillator.connect(filter);
  filter.connect(context.destination);
  //oscillator.connect(context.destination);

  oscillator.frequency.value = 600;  
  filter.frequency.value = 100;
  
  
  oscillator.type = 'sawtooth';
  
  
 // oscillator.start();
 
 function changeFilter(mx, my) {
     filter.frequency.value = mx * 10;
     filter.Q.value = my / 10;
 }
  
  function setNote(key) {
    //first row of white notes
    //plays middle c
    if (key == "z") {
      oscillator.frequency.value = 261.63;
    }
    //plays d
    if (key == "x") {
      oscillator.frequency.value = 293.66;
    }
    //plays e
    if (key == "c") {
      oscillator.frequency.value = 329.63;
    }
    //plays f
    if (key == "v") {
      oscillator.frequency.value = 349.23;
    }
    //plays g
    if (key == "b") {
      oscillator.frequency.value = 391.99;
    }
    //plays a
    if (key == "n") {
      oscillator.frequency.value = 440.00;
    }
    //plays b
    if (key == "m") {
      oscillator.frequency.value = 493.88;
    }
    
    //first row of black notes
    //plays c#
    if (key == "s") {
      oscillator.frequency.value = 277.18;
    }
    //plays d#
    if (key == "d") {
      oscillator.frequency.value = 311.12;
    }
    //plays f#
    if (key == "g") {
      oscillator.frequency.value = 369.99;
    }
    //plays g#
    if (key == "h") {
      oscillator.frequency.value = 415.30;
    }
    //plays a#
    if (key == "j") {
      oscillator.frequency.value = 466.16;
    }
    
    //second row of white notes
    //plays c
    if (key == "q") {
      oscillator.frequency.value = 523.25;
    }
    //plays d
    if (key == "w") {
      oscillator.frequency.value = 587.33;
    }
    //plays e
    if (key == "e") {
      oscillator.frequency.value = 659.25;
    }
    //plays f
    if (key == "r") {
      oscillator.frequency.value = 698.45;
    }
    //plays g
    if (key == "t") {
      oscillator.frequency.value = 783.99;
    }
    //plays a
    if (key == "y") {
      oscillator.frequency.value = 880.00;
    }
    //plays b
    if (key == "u") {
      oscillator.frequency.value = 987.76;
    }
    
    //second row of black notes
    //plays c#
    if (key == "2") {
      oscillator.frequency.value = 554.36;
    }
    //plays d#
    if (key == "3") {
      oscillator.frequency.value = 622.25;
    }
    //plays f#
    if (key == "4") {
      oscillator.frequency.value = 739.98;
    }
    //plays g#
    if (key == "5") {
      oscillator.frequency.value = 830.60;
    }
    //plays a#
    if (key == "6") {
      oscillator.frequency.value = 932.32;
    }
  }
