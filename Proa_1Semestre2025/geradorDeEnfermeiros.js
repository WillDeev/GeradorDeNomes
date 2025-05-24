function gerarNomeEnfermeiro() {
  const nomes = [
    "Gabriel", "Jailson", "Debora", "Ricardo", "Leticia", "Wesley", "Andressa", "Alini", "Julio", "Aurora",
];
  const sobrenomes = [
    "Paixão", "Azevedo", "Cardoso", "Alves", "Monteiro", "Campos", "Barros", "Pereira", "Rezende", "Nascimento",
    "Augusto", "Santos", "Lindo", "DalMagro"
  ];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenome1 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  const sobrenome2 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nome} ${sobrenome1} ${sobrenome2}`;
}

function gerarCPF() {
  const gerarDigito = (base) => {
    let soma = 0;
    let peso = base.length + 1;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base.charAt(i)) * peso--;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
  const digito1 = gerarDigito(base);
  const digito2 = gerarDigito(base + digito1);
  const cpf = base + digito1 + digito2;
  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
}

function gerarCoren() {
  return Math.floor(10000 + Math.random() * 90000).toString(); 
}

function gerarEspecialidade() {
  const especialidades = [
    "Enfermagem Geral",
    "Pediatria",
    "Geriatria",
    "Urgência e Emergência",
    "Obstetrícia",
    "UTI",
    "Saúde Mental",
    "Enfermagem do Trabalho",
    "Oncologia",
    "Centro Cirúrgico"
  ];
  return especialidades[Math.floor(Math.random() * especialidades.length)];
}

function gerarEnfermeiro() {
  return {
    nome: gerarNomeEnfermeiro(),
    cpf: gerarCPF(),
    coren: gerarCoren(),
    especialidade: gerarEspecialidade()
  };
}


for (let i = 0; i < 5; i++) {
  console.log(gerarEnfermeiro());
}