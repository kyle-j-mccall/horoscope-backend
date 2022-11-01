const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router().get('/', (req, res) => {
  const filteredZodiac = [];
  zodiacs.map((zodiac) => {
    filteredZodiac.push({
      name: zodiac.name,
      id: zodiac.id,
    });
  });
  res.json(filteredZodiac);
});
