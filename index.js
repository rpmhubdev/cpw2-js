/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people) {
  let pop;
  let inverted = [];

  for (let i = people.length - 1; i >= 0; i--) {
    pop = people.pop();
    inverted.push(pop);
  }

  // TODO
  // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
  // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
  // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
  // nomes dos usuários.

  return inverted;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {
  // TODO
  // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
  // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
  // ou superior a 7.

  let media = 0;
  let soma = 0;

  for (let i = 0; i < grades.length; i++) {
    soma += grades[i];
  }

  media = soma / grades.length;

  return media;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {
  // TODO
  // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
  // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
  // ou superior a 7.

  const isApproved = mean >= 7 ? "aprovado" : "reprovado";

  return isApproved;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate) {
  // TODO
  // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
  // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
  // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
  // Nesse caso, o separador é a barra (/) da data.

  const date = strDate.split("/");
  const day = date[0];
  const month = date[1];
  const year = date[2];

  let months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembo",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const wideDate = (a, b, c) => {
    if (day && month && year) {
      return `${day} de ${months[month - 1]} de ${year}`;
    }
    return "";
  };

  return wideDate(day, month, year);
}

// Trecho utilizado pelos testes
exports._test = {
  invert: invert,
  mean: mean,
  isApproved: isApproved,
  wide: wide,
};
