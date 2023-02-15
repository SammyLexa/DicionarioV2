function carregaDicionario() {

    var biografias = {
  
      bio01: {
  
        nome: "",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio02: {
  
        nome: "",
  
        imagem: "",
  
        descricao: "",
  
        realizações:
  
          "",
  
      },
  
      bio03: {
  
        nome: "nome2",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio04: {
  
        nome: "nome3",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio05: {
  
        nome: "nome4",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio06: {
  
        nome: "nome5",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio07: {
  
        nome: "nome6",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio08: {
  
        nome: "nome7",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
      bio09: {
  
        nome: "nome8",
  
        imagem: "",
  
        descricao:
  
          "",
  
        realizações:
  
          "",
  
      },
  
    };
    var content = document.getElementById("content");
  
    for (var bio in biografias) {
  
      content.innerHTML +=
  
        '<div class="card">' +
  
        '<img src="' +
  
        biografias[bio].imagem +
  
        '"/>' +
  
        "<details>" +
  
        "<summary>" +
  
        biografias[bio].nome +
  
        "</summary>" +
  
        "<p>" +
  
        biografias[bio].descricao +
  
        "</p>" +
  
        "<blockquote><q>" +
  
        biografias[bio].realizações +
  
        "</q></blockquote>" +
  
        "</details></div>";
  
    }
  }
  carregaDicionario();