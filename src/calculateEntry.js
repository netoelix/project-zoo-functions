const data = require('../data/zoo_data');

const ageRanges = {
  child: { min: 0, max: 17 },
  adult: { min: 18, max: 49 },
  senior: { min: 50, max: Infinity },
};

const ticketPrices = {
  child: 20.99,
  adult: 49.99,
  senior: 24.99,
};

const countEntrants = (entrants) =>
  entrants.reduce((count, entrant) => {
    const range = Object.keys(ageRanges).find(
      (ranges) =>
        entrant.age >= ageRanges[ranges].min && entrant.age <= ageRanges[ranges].max,
    );
    if (range) {
      const updatedCount = { ...count, [range]: count[range] + 1 };
      return updatedCount;
    }
    return count;
  }, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const counts = countEntrants(entrants);

  return parseFloat(
    Object.entries(counts).reduce((total, [range, count]) =>
      total + count * ticketPrices[range], 0).toFixed(2),
  );
};

module.exports = { calculateEntry, countEntrants };
