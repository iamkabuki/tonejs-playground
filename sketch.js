const TAU = 6.28;

let red, green, blue;
let numDots;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  red = 255 * fxrand();
  green = 255 * fxrand();
  blue = 255 * fxrand();
  
  numDots = Math.floor(fxrand() * 10);

  createCanvas(windowWidth, windowHeight);

  window.$fxhashFeatures = {
    "Red Value": red,
    "Green Value": green,
    "Blue Value": blue,
    "Number of Dots": numDots,
  };
}

function draw() {
    
    const synth = new Tone.Synth().toMaster()
synth.triggerAttackRelease('C4', '8n')

document.getElementById("play-button").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
    
//  background(red, green, blue);
//
//  var h4 = windowHeight / 4;
//  var h2 = windowHeight / 2;
//  var w2 = windowWidth / 2;
//  var timer = frameCount * 0.05;
//  
//  for (var i = 0; i < numDots; i++) {
//    var pct = i / numDots;
//    ellipse(w2 + sin(timer + TAU * pct) * h4, h2 + cos(timer + TAU * pct) * h4, 80, 80);
  }
}
