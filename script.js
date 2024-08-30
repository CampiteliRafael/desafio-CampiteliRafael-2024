
// 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // valor total igual a 91

// 2

function pertenceFibonacci(numero) {
    // Definindo os primeiros números da sequência de Fibonacci
    let fibonacci = [0, 1];
    
    // Calcula a sequência de Fibonacci até que o número informado seja alcançado ou ultrapassado
    while (fibonacci[fibonacci.length - 1] < numero) {
      let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(proximo);
    }
  
    // Verifica se o número pertence à sequência de Fibonacci
    if (fibonacci.includes(numero)) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
  }

  // 3

  // Exemplo de dados de faturamento em formato JSON
const faturamentoMensal = {
    "faturamento": [
      { "dia": 1, "valor": 1500.0 },
      { "dia": 2, "valor": 2000.0 },
      { "dia": 3, "valor": 0.0 },
      { "dia": 4, "valor": 2300.0 },
      { "dia": 5, "valor": 1750.0 },
      { "dia": 6, "valor": 0.0 },
      { "dia": 7, "valor": 800.0 },
      { "dia": 8, "valor": 0.0 },
      { "dia": 9, "valor": 2100.0 },
      { "dia": 10, "valor": 3000.0 },
      { "dia": 11, "valor": 1800.0 },
      { "dia": 12, "valor": 0.0 },
      { "dia": 13, "valor": 2500.0 },
      { "dia": 14, "valor": 2700.0 },
      { "dia": 15, "valor": 0.0 },
      { "dia": 16, "valor": 2400.0 },
      { "dia": 17, "valor": 0.0 },
      { "dia": 18, "valor": 2800.0 },
      { "dia": 19, "valor": 3200.0 },
      { "dia": 20, "valor": 1500.0 },
      { "dia": 21, "valor": 0.0 },
      { "dia": 22, "valor": 2300.0 },
      { "dia": 23, "valor": 2500.0 },
      { "dia": 24, "valor": 0.0 },
      { "dia": 25, "valor": 2900.0 },
      { "dia": 26, "valor": 3100.0 },
      { "dia": 27, "valor": 0.0 },
      { "dia": 28, "valor": 4000.0 },
      { "dia": 29, "valor": 3500.0 },
      { "dia": 30, "valor": 2200.0 }
    ]
  };
  
  // Função para calcular o menor, maior valor de faturamento e dias com faturamento acima da média
  function calcularFaturamento(faturamentoMensal) {
    // Extrai os valores de faturamento e ignora os dias sem faturamento (valor 0)
    const diasComFaturamento = faturamentoMensal.faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
  
    // Calcula o menor e maior valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
  
    // Calcula a média de faturamento mensal
    const somaFaturamento = diasComFaturamento.reduce((acumulador, valor) => acumulador + valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  
    // Calcula o número de dias com faturamento superior à média mensal
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaFaturamento).length;
  
    // Retorna os resultados
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia
    };
  }
  
  // Chama a função e armazena os resultados
  const resultados = calcularFaturamento(faturamentoMensal);
  
  // Exibe os resultados
  console.log(`Menor valor de faturamento: R$ ${resultados.menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${resultados.maiorFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);
  

// 4

// Valores de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  // Calcula o valor total de faturamento
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  
  // Calcula o percentual de representação de cada estado
  const percentuaisPorEstado = {};
  for (const estado in faturamentoPorEstado) {
    percentuaisPorEstado[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
  }
  
  // Exibe os resultados
  console.log("Percentual de representação de cada estado:");
  for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
  }

  // 5

  const stringOriginal = "Exemplo de string";

// Função para inverter a string
function inverterString(str) {
  let stringInvertida = "";
  
  // Itera sobre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  
  return stringInvertida;
}

// Chamada da função e exibição do resultado
const resultado = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);


