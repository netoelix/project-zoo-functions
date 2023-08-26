const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  const zooAnimals = data.species.filter((element) => ids.includes(element.id));

  return zooAnimals;
};

module.exports = getSpeciesByIds;
