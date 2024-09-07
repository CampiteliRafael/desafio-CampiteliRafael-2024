class RecintosZoo {
    constructor() {
      this.recintos = [
        { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'macaco', quantidade: 3 }] },
        { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
        { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'gazela', quantidade: 1 }] },
        { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
        { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'leao', quantidade: 1 }] }
      ];
  
      this.animais = {
        LEAO: { tamanho: 3, biomas: ['savana'], carnivoro: true },
        LEOPARDO: { tamanho: 2, biomas: ['savana'], carnivoro: true },
        CROCODILO: { tamanho: 3, biomas: ['rio'], carnivoro: true },
        MACACO: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
        GAZELA: { tamanho: 2, biomas: ['savana'], carnivoro: false },
        HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
      };
    }
  
    validaEntrada(animal, quantidade) {
      if (!this.animais[animal]) {
        return { erro: 'Animal inválido' };
      }
      if (isNaN(quantidade) || quantidade <= 0) {
        return { erro: 'Quantidade inválida' };
      }
      return null; // Entrada válida
    }
  
    analisaRecintos(animal, quantidade) {
        const erro = this.validaEntrada(animal, quantidade);
        if (erro) return erro;
      
        const especieAnimal = this.animais[animal];
        const espacoNecessario = especieAnimal.tamanho * quantidade;
        let recintosViaveis = [];
      
        for (const recinto of this.recintos) {
          const biomasValidos = especieAnimal.biomas.includes(recinto.bioma) || 
                                (especieAnimal.biomas.includes('savana') && recinto.bioma === 'savana e rio');
      
          if (!biomasValidos) continue;
      
          let espacoOcupado = 0;
          let haCarnivoros = false;
          let outraEspecie = false;
          let recintoVazio = recinto.animais.length === 0;
      
          for (const existente of recinto.animais) {
            const infoExistente = this.animais[existente.especie.toUpperCase()];
            espacoOcupado += infoExistente.tamanho * existente.quantidade;
      
            if (infoExistente.carnivoro) {
              haCarnivoros = true;
              if (existente.especie.toUpperCase() !== animal) {
                outraEspecie = true; // Encontrou uma espécie carnívora diferente
              }
            }
            if (existente.especie.toUpperCase() !== animal) outraEspecie = true;
          }
      
          // Regras adicionais ajustadas:
          if (especieAnimal.carnivoro) {
            // Animais carnívoros devem habitar somente com a própria espécie
            if (haCarnivoros && outraEspecie) continue;
          } else {
            // Animais não carnívoros não devem habitar com carnívoros
            if (haCarnivoros) continue;
          }
      
          // Macacos podem ser alocados em recintos vazios se houver pelo menos dois macacos
          if (animal === 'MACACO' && quantidade < 2 && recintoVazio) continue;

          if (outraEspecie) espacoOcupado += 1;
      
          // Atualizar o espaço livre corretamente
          const espacoDisponivel = recinto.tamanho - espacoOcupado;
      
          // Verificar se há espaço suficiente para os animais
          if (espacoDisponivel >= espacoNecessario) {
            recintosViaveis.push({
              numero: recinto.numero,
              espacoLivre: espacoDisponivel - espacoNecessario,
              tamanhoTotal: recinto.tamanho
            });
          }
        }
      
        if (recintosViaveis.length === 0) {
          return { erro: 'Não há recinto viável' };
        }
      
        // Ordenar por espaço livre decrescente e, se empatar, por número de recinto crescente
        recintosViaveis.sort((a, b) => {
          if (b.espacoLivre !== a.espacoLivre) {
            return b.espacoLivre - a.espacoLivre; // Ordem decrescente de espaço livre
          }
          return a.numero - b.numero; // Ordem crescente de número de recinto
        });
      
        return {
          recintosViaveis: recintosViaveis.map(
            r => `Recinto ${r.numero} (espaço livre: ${r.espacoLivre} total: ${r.tamanhoTotal})`
          )
        };
      }
    }                              
  
  export { RecintosZoo as RecintosZoo };
  