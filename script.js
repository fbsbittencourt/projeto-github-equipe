 const body = document.body;

    // 1️⃣ Girar o site
    document.getElementById('btnGirar').addEventListener('click', () => {
      body.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        body.style.transform = 'rotate(0deg)';
      }, 1000);
    });

    // 2️⃣ Mudar cor do fundo
    document.getElementById('btnCor').addEventListener('click', () => {
      const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
      body.style.backgroundColor = corAleatoria;
    });

    // 3️⃣ Aumentar texto
    document.getElementById('btnTexto').addEventListener('click', () => {
      if (!textoAumentado) {
        body.style.fontSize = '20px';
        textoAumentado = true;
      } else {
        body.style.fontSize = '16px';
        textoAumentado = false;
      }
    });


    // 4️⃣ Mostrar alerta
    document.getElementById('btnAlerta').addEventListener('click', () => {
      alert('Olá! Seja bem-vindo ao site colaborativo do Pedro Henrick 😄');
    });