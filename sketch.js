const synth = new Tone.Synth().toMaster();

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  



}

function mouseClicked() {
  
  synth.triggerAttackRelease("C4", "8n");

  
}