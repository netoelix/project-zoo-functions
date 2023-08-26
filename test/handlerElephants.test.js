const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('deve retornar undefined quando nenhum parâmetro for passado', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });

  it('deve retornar "Parâmetro inválido, é necessário uma string" para um parâmetro não-string', () => {
    const result = handlerElephants(123);
    expect(result).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('deve retornar os valores da propriedade quando uma propriedade válida for passada', () => {
    const result = handlerElephants('location');
    expect(result).toEqual('NW');
  });

  it('deve retornar a contagem de residentes quando o parâmetro for "count"', () => {
    const result = handlerElephants('count');
    expect(result).toEqual(4);
  });

  it('deve retornar um array com os nomes dos elefantes quando o parâmetro for "names"', () => {
    const result = handlerElephants('names');
    expect(result).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('deve retornar a idade média dos residentes quando o parâmetro for "averageAge"', () => {
    const result = handlerElephants('averageAge');
    expect(result).toEqual(10.5);
  });

  it('deve retornar null para um parâmetro desconhecido', () => {
    const result = handlerElephants('unknownParam');
    expect(result).toBeNull();
  });
});
