const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const zooEmployess = data.employees.find((element) =>
    employeeName.includes(element.firstName) || employeeName.includes(element.lastName));
  return zooEmployess;
};
console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
