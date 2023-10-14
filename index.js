
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

   // Crie um novo vetor invertido
  var invertedNames = [];
  
  // Itere pelo vetor de pessoas em ordem reversa e adicione os nomes ao vetor invertido
  for (var i = people.length - 1; i >= 0; i--) {
    invertedNames.push(people[i]);
  }

  // Retorne o vetor invertido
  return invertedNames;
}

// Solicitar ao usuário que insira os nomes e armazená-los em um vetor
var people = [];
var input;

do {
  input = prompt("Digite um nome (ou deixe em branco para encerrar):");
  if (input) {
    people.push(input);
  }
} while (input);

// Chame a função invert para obter o vetor de nomes invertidos
var invertedPeople = invert(people);

// Exiba os nomes invertidos na tela
console.log("Nomes invertidos:");
console.log(invertedPeople);

    


/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return 0;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return "";
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    return "";
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}