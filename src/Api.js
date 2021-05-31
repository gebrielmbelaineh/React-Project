// Base URL

const baseUrl = 'https://api.rawg.io/api/games';
const key = 'key=79e6732df7a540e88dd0f8de8cd5d2e6';

// Getting date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-rating&page_size=12`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => (`${baseUrl}?${key}${popularGames}`);
export const upcomingGamesURL = () => (`${baseUrl}?${key}${upcomingGames}`);
export const newGamesURL = () => (`${baseUrl}?${key}${newGames}`);
export const gameDetailsURL = (gameId) => (`${baseUrl}/${gameId}?${key}`);
export const gameScreenshotURL = (gameId) => (`${baseUrl}/${gameId}/screenshots?${key}`);
