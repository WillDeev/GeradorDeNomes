
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

function gerarDataNascimento() {
  const ano = Math.floor(Math.random() * (2010 - 1940 + 1)) + 1940;
  const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const dia = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  return `${dia}/${mes}/${ano}`;
}

function gerarEndereco() {
  const ruas = [
   "Rua Ponto Norte", "Avenida TiLa", "Travessa Acaiacá", "Alameda BrailleWay", "Rua Lume",
   "Avenida Lumora", "Rua Nitro", "Viela Acenis", "Rua LinkMunity", "Travessa Alcatteia",
   "Avenida MedGur", "Rua Polibee", "Alameda BloodLink", "Rua Enlance+", "Avenida Vizinhando", 
   "Travessa Tafe", "Rua TechSyn", "Avenida Rivalix", "Rua Zeelus", "Alamanda Gatorion"
  ];

  const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre", "Salvador"];
  const estados = ["SP", "RJ", "MG", "PR", "RS", "BA"];
  const rua = ruas[Math.floor(Math.random() * ruas.length)];
  const numero = Math.floor(Math.random() * 1000) + 1;
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  const estado = estados[Math.floor(Math.random() * estados.length)];
  return `${rua}, ${numero} - ${cidade}/${estado}`;
}

function gerarTelefone() {
  const ddd = ["11", "21", "31", "41", "51", "71"];
  const numero = `${Math.floor(Math.random() * 90000 + 10000)}-${Math.floor(Math.random() * 9000 + 1000)}`;
  return `(${ddd[Math.floor(Math.random() * ddd.length)]}) 9${numero}`;
}

function gerarEmail(nomeCompleto) {
  const dominios = ["@gmail.com", "@outlook.com", "@yahoo.com.br", "@hotmail.com"];
  const base = nomeCompleto.toLowerCase().replace(/ /g, ".");
  return `${base}${Math.floor(Math.random() * 100)}${dominios[Math.floor(Math.random() * dominios.length)]}`;
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

function gerarRG() {
  const rg = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  const dv = Math.floor(Math.random() * 10);
  return `${rg}-${dv}`;
}

function gerarPaciente() {
  const nome = gerarNomeAleatorio();
  return {
    nome: nome,
    dataNascimento: gerarDataNascimento(),
    endereco: gerarEndereco(),
    telefone: gerarTelefone(),
    email: gerarEmail(nome),
    cpf: gerarCPF(),
    rg: gerarRG()
  };
}

for (let i = 0; i < 5; i++) {
  console.log(gerarPaciente());
}