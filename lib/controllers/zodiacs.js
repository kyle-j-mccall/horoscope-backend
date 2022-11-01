const { Router } = require('express');
const { zodiacs, horoscopes } = require('../zodiac-data');

module.exports = Router()
  .get('/horoscope/:sign', (req, res) => {
    let match;
    horoscopes.map((horoscope) => {
      if (horoscope.sign === req.params.sign) {
        match = horoscope;
      }
    });
    res.json(match);
  })
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
