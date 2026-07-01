export const MOCK_WEATHER = [
  { date: '2026-06-30', hi: 31, lo: 24, rain: 20, condition: 'Partly Cloudy', icon: 'fa-cloud-sun' },
  { date: '2026-07-01', hi: 30, lo: 24, rain: 45, condition: 'Cloudy', icon: 'fa-cloud' },
  { date: '2026-07-02', hi: 28, lo: 23, rain: 78, condition: 'Heavy Rain', icon: 'fa-cloud-rain' },
  { date: '2026-07-03', hi: 27, lo: 23, rain: 85, condition: 'Heavy Rain', icon: 'fa-cloud-rain' },
  { date: '2026-07-04', hi: 30, lo: 24, rain: 30, condition: 'Partly Cloudy', icon: 'fa-cloud-sun' },
  { date: '2026-07-05', hi: 32, lo: 25, rain: 10, condition: 'Sunny', icon: 'fa-sun' },
  { date: '2026-07-06', hi: 33, lo: 25, rain: 5, condition: 'Sunny', icon: 'fa-sun' },
  { date: '2026-07-07', hi: 33, lo: 25, rain: 5, condition: 'Sunny', icon: 'fa-sun' }
];

export const getWeatherData = (dateStr: string) => {
  return MOCK_WEATHER.find(w => w.date === dateStr) || MOCK_WEATHER[0];
};

export const getForecast = (startDateStr: string, days: number = 7) => {
  const startIndex = MOCK_WEATHER.findIndex(w => w.date === startDateStr);
  const start = startIndex >= 0 ? startIndex : 0;
  return MOCK_WEATHER.slice(start, start + days);
};
