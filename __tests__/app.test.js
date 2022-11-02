const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');

    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  it('/zodiac/horoscopes/:sign should return a horoscope for that zodiac sign', async () => {
    const res = await request(app).get('/zodiacs/horoscope/leo');

    const leo = {
      sign: 'leo',
      date: expect.any(String),
      horoscope: expect.any(String),
    };
    expect(res.body).toEqual(leo);
  });
});
