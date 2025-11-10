
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const letras = 'MATHEUSROCK🔥🤘METAL';
const tamanhoFonte = 18;
const colunas = canvas.width / tamanhoFonte; 
const gotas = [];


for (let x = 0; x < colunas; x++) {
  gotas[x] = 1;
}


const cores = ['#e60000', '#ff0000', '#cccccc', '#999999'];

function desenhar() {
 
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = tamanhoFonte + 'px "Metal Mania", monospace';

  for (let i = 0; i < gotas.length; i++) {
    const texto = letras[Math.floor(Math.random() * letras.length)];
    const cor = cores[Math.floor(Math.random() * cores.length)];
    ctx.fillStyle = cor;
    ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

    if (gotas[i] * tamanhoFonte > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }

    gotas[i]++;
  }
}

setInterval(desenhar, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
