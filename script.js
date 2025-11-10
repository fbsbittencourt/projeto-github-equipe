 const body = document.body;
    let textoAumentado = false; // estado inicial

    // 1️⃣ Girar o site
       document.getElementById('btnBarrel').addEventListener('click', () => {
      body.classList.add('barrel-roll');
      // remove a classe depois da animação pra poder fazer de novo
      setTimeout(() => {
        body.classList.remove('barrel-roll');
      }, 2000);
    });

    // 2️⃣ Mudar cor do fundo
    document.getElementById('btnCor').addEventListener('click', () => {
      const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
      body.style.backgroundColor = corAleatoria;
    });

    // 3️⃣ Alternar tamanho do texto
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