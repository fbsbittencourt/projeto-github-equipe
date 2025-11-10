  document.getElementById("busca").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        buscar();
    }
  });

  function buscar() {
      const termo = document.getElementById("busca").value.trim();

      if (!termo) {
        document.getElementById("resultado").innerText = "Digita algo aí";
        return;
      }

      fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`)
        .then(response => response.json())
        .then(data => {
          if (data.extract) {
            document.getElementById("resultado").innerText = data.extract;
          } else {
            document.getElementById("resultado").innerText = "Encontrei nada amigão";
          }
        })
        .catch(error => {
          document.getElementById("resultado").innerText = "Deu algum erro, confere aí";
          console.error(error);
        });
    };