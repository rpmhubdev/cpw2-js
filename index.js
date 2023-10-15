
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){
 // Use o método reverse() para inverter o vetor
  return people.reverse();
}

// Exemplo de uso da função:
var nomes = ["Rafael", "Bob", "Carol", "David", "Eve"];
var nomesInvertidos = invert(nomes);
console.log(nomesInvertidos); // Isso irá exibir os nomes invertidos no console
   

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

  if (grades.length === 0) {
    return 0; // Retorna 0 se o vetor estiver vazio para evitar divisão por zero.
  }

  var soma = 0;

  for (var i = 0; i < grades.length; i++) {
    soma += grades[i];
  }

  return soma / grades.length;

  
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

  var nome = prompt("Digite o nome do aluno: ");
  var nota1 = parseFloat(prompt("Digite a primeira nota: "));
  var nota2 = parseFloat(prompt("Digite a segunda nota: "));
  var nota3 = parseFloat(prompt("Digite a terceira nota: "));

  // Crie um vetor com as notas
  var notas = [nota1, nota2, nota3];

  // Use a função mean para calcular a média
  var media = mean(notas);

  // Exibir o nome do aluno
  console.log("Nome do aluno: " + nome);

  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

     // Divida a string da data usando o separador "/"
    var dateParts = strDate.split("/");
    
    if (dateParts.length === 3) {
      var day = dateParts[0];
      var month = dateParts[1];
      var year = dateParts[2];
      
      // Crie um array de nomes de meses
      var months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ];
      
      // Converta o mês em seu nome por extenso
      var monthName = months[parseInt(month) - 1];
      
      // Crie a data por extenso
      var strDate = day + " de " + monthName + " de " + year;
      
      return strDate;
    } else {
      return "Data inválida. Use o formato dd/mm/aaaa.";
    }
  }
  
  // Exemplo de uso da função:
  var data = "03/03/2022";
  var dataPorExtenso = wide(data);
  console.log(dataPorExtenso); // Deverá exibir "03 de março de 2022" no console
  


// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}