const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');
const fetch = require('cross-fetch');
module.exports = Router()
  .get('/horoscope/:sign', async (req, res) => {
    const response = await getHoroscope(req.params.sign);
    console.log(response);
    res.json(response);
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

const getHoroscope = async (sign) => {
  const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
  return response.json();
};
