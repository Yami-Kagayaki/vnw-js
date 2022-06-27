const lucas = {
  fullName: "Lucas Gabriel Diniz de Oliveira",
  idade: 18,
  fazFacul: true,
};

lucas.sexo = "masculino";
console.log(lucas);

delete lucas.sexo;
console.log(lucas);

const cadastro = [
  {
    name: "amigo1",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
  {
    name: "amigo2",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
  {
    name: "amigo3",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
  {
    name: "amigo4",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
  {
    name: "amigo5",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
  {
    name: "amigo6",
    idade: 19,
    telefone: "(84) 99999 - 9999",
    amigos: ["eles1", "eles2", "eles3", "eles4", "eles5"],
  },
];

for (let i = 0; i < cadastro.length; i++) {
  console.log(cadastro[i].name, cadastro[i].amigos[0]);
}

console.log();
