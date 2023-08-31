const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('deve retornar "O zoológico está aberto" para um dia válido e horário dentro do horário de funcionamento', () => {
    expect(getOpeningHours('Tuesday', '10:00-AM')).toBe('The zoo is open');
  });

  it('deve retornar "O zoológico está fechado" para um dia válido e horário fora do horário de funcionamento', () => {
    expect(getOpeningHours('Wednesday', '7:00-PM')).toBe('The zoo is closed');
  });

  it('deve retornar "O zoológico está aberto" para um dia válido e horário exato da abertura', () => {
    expect(getOpeningHours('Sunday', '10:00-AM')).toBe('The zoo is open');
  });

  it('deve lançar um erro para um dia inválido', () => {
    expect(() => getOpeningHours('InvalidDay', '10:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('deve lançar um erro para uma hora inválida (horas fora do intervalo)', () => {
    expect(() => getOpeningHours('Tuesday', '15:30-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('deve lançar um erro para uma hora inválida (minutos fora do intervalo)', () => {
    expect(() => getOpeningHours('Saturday', '11:80-AM')).toThrowError('The minutes must be between 0 and 59');
  });

  it('deve lançar um erro para uma abreviação inválida', () => {
    expect(() => getOpeningHours('Thursday', '2:00-QM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('deve lançar um erro para uma string que não representa um número', () => {
    expect(() => getOpeningHours('Tuesday', 'abc-AM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Wednesday', '1a2b-PM')).toThrowError('The hour should represent a number');
  });

  it('deve retornar o objeto de horas se day e dataHour forem vazios', () => {
    expect(getOpeningHours('', '')).toBe(hours);
  });
});
