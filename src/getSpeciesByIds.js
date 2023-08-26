const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  const zooAnimals = data.species.filter((element) =>
    ids.includes(element.id) || ids.includes(element.name));

  return zooAnimals;
};

module.exports = getSpeciesByIds;
