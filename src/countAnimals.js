const data = require('../data/zoo_data');

const countAnimals = (options = {}) => {
  if (options.species) {
    const species = data.species.find((species) => species.name === options.species);
    if (species) {
      if (options.sex) {
        const filteredResidents = species.residents.filter((resident) => resident.sex === options.sex);
        return filteredResidents.length;
      }
      return species.residents.length;
    }
    return 0;
  }
  const animalCounts = {};

  for (const species of data.species) {
    animalCounts[species.name] = species.residents.length;
  }

  return animalCounts;
};

module.exports = countAnimals;

console.log(countAnimals('lions', 'male'));

module.exports = countAnimals;
