const data = require('../data/zoo_data');

const countResidents = (speciesData, sex) => {
  if (sex) {
    const filteredResidents = speciesData.residents.filter((resident) => resident.sex === sex);
    return filteredResidents.length;
  }
  return speciesData.residents.length;
};

const countAllSpecies = () => data.species.reduce((animalCounts, speciesData) => ({
  ...animalCounts,
  [speciesData.name]: speciesData.residents.length,
}), {});

const countAnimals = (options = {}) => {
  if (options.species) {
    const speciesData = data.species.find((species) => species.name === options.species);
    if (speciesData) {
      return countResidents(speciesData, options.sex);
    }
    return 0;
  }

  return countAllSpecies();
};

module.exports = countAnimals;
