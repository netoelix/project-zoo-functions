const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const getAnimalsOlderThan = (animal, age) => {
  const animals = getSpeciesByIds(animal);

  const allOlderThanAge = animals.every((object) =>
    object.residents.every((resident) => resident.age >= age));

  return allOlderThanAge;
};

module.exports = getAnimalsOlderThan;
