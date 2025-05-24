function gerarNomeAleatorio() {
  const nomes = [
    "Bruno", "Renan", "Maikon", "Noah", "Alisson", "Mateus", "Matheus", "William",
    "Yasmin", "Joel", "Jullia", "Isabelly", "Lucas", "Manoel", "Mayan", "Esther",
    "Yoshimi", "Livia", "Rudney", "Gabriel", "Victor Ramon", "Gustavo", "Laysla Rayssa", "Suzana", 
    "Isaac", "Andrey", "Samuel", "Juliana", "Marcio Eduardo"
  ];
  const sobrenomes = [
    "Silva", "Rodrigues", "Souza", "Cardozo", "Sebastian", "Ferreira", "Vieira", "Sartori",
    "Almeida", "Santos", "Pinheiro", "Araujo", "Lopes", "Assis", "Rocha", "Reis", "Brenno",
    "Alves", "Kathelyn", "Correia", "Esmeralda", "Ramos", "Lima", "Padula", "Pires", "Cobra",
    "Nascimento", "Cristina", "Pereira", "Marques", "Aisha", "Choque", "Quispe", "Ribeiro", 
    "Alvarenga", "Junior", "Dias", "Jesus", "Maciel", "Justino", "Muniz", "Ordalio", 
    "Costa", "Borges", "Santiago"
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

function gerarCRM() {
  let crm = '';
  for (let i = 0; i < 10; i++) {
    crm += Math.floor(Math.random() * 10);
  }
  return crm;
}

function gerarEspecialidade() {
  const especialidades = [
    "Cardiologia", "Pediatria", "Dermatologia", "Ortopedia", "Ginecologia",
    "Neurologia", "Psiquiatria", "Endocrinologia", "Oncologia", "Reumatologia",
    "Urologia", "Nefrologia", "Otorrinolaringologia", "Hematologia", "Imunologia",
    "Infectologia", "Radiologia", "Anestesiologia", "Cirurgia Geral", "Patologia",
    "Clínica Geral", "Gastrenterologia"
  ];
  return especialidades[Math.floor(Math.random() * especialidades.length)];
}

function gerarMedico() {
  return {
    nome: gerarNomeAleatorio(),
    cpf: gerarCPF(),
    crm: gerarCRM(),
    especialidade: gerarEspecialidade()
  };
}

for (let i = 0; i < 5; i++) {
  console.log(gerarMedico());
}