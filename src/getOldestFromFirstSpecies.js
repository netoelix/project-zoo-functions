const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeers = data.employees.find((employer) => employer.id === id);
  const animal = employeers.responsibleFor[0];
  const mostOldestAnimal = data.species.find((animals) => animals.id === animal);

  const oldestResident = mostOldestAnimal.residents.reduce((oldest, current) =>
    (current.age > oldest.age ? current : oldest));

  return [oldestResident.name, oldestResident.sex, oldestResident.age];
};

module.exports = getOldestFromFirstSpecies;
