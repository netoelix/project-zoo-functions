const data = require('../data/zoo_data');

const daysSchedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const getAnimal = (animals) => {
  const parameters = data.species.find((parameter) => parameter.name === animals);
  const newSchedule = parameters.availability;
  return newSchedule;
};

const getSchedule = (scheduleTarget) => {
  const isAnimal = data.species.find((parameter) => parameter.name === scheduleTarget);

  const expositionDays = daysSchedule[scheduleTarget];

  if (expositionDays != null) {
    return { [scheduleTarget]: expositionDays };
  }
  if (isAnimal != null) {
    return getAnimal(scheduleTarget);
  }
  return daysSchedule;
};

module.exports = getSchedule;
