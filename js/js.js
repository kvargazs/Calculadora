function alternarModo() {
  const body = document.body;
  const modoNoturnoButton = document.getElementById('modo-noturno');
  
  if (body.classList.contains('modo-noturno')) {
    body.classList.remove('modo-noturno');
    modoNoturnoButton.value = 'Modo Noturno';
  } else {
    body.classList.add('modo-noturno');
    modoNoturnoButton.value = 'Modo Claro';
  }
}

function extrairRaiz(){
    var numero = calc.tela.value;
    var resultado = Math.sqrt(numero);
    calc.tela.value = resultado;
}
function apagarUm() {
    var numero = calc.tela.value;
    calc.tela.value = numero.substring(0,(numero.length-1));
}
