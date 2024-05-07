let palavra;



function setup() {
  createCanvas(600, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["preciso", "aposentadoria", "now"]
  return random(palavras);
}

function inicializaCores(){
background("rgb(34,120,163)");
fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);  
  
}

function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  //let palavra = "Cansada"
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,300,200);
}