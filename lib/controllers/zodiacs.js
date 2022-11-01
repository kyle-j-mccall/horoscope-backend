const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match;
    zodiacs.map((zodiac) => {
      if (zodiac.id === req.params.id) {
        match = zodiac;
      }
    });
    res.json(match);
  })
  .get('/', (req, res) => {
    const filteredZodiac = [];
    zodiacs.map((zodiac) => {
      filteredZodiac.push({
        name: zodiac.name,
        id: zodiac.id,
      });
    });
    res.json(filteredZodiac);
  });
