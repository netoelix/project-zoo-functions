const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

// const getRelatedEmployees = (managerId) => {
//   const employers = data.employees.filter((element) =>
//     managerId.includes(element.id));
//   return employers;
// };

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = data.employees.filter((employee) =>
    employee.managers.includes(managerId));

  const employeeNames = relatedEmployees.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);

  return employeeNames;
};

module.exports = { isManager, getRelatedEmployees };
