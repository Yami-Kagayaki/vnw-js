function printOnConsole(str) {
  console.log(str);
}

function recebeNome(nome) {
  console.log("");
  printOnConsole(nome);
}

function pessoa(nome, idade, estilo) {
  console.log("");
  printOnConsole(nome);
  printOnConsole(idade);
  printOnConsole(estilo);
}

function entreterimento(filme, musica) {
  console.log("");
  printOnConsole(filme);
  printOnConsole(musica);
}

printOnConsole("Opa");
recebeNome("Lucas");
pessoa("Lucas", 20, "Rock");
entreterimento("No Game No Life ZERO", "Mr.FEAR - SIAMES");
