// Base URL

const baseUrl = 'https://api.rawg.io/api/games?key=ce9c2de88b1e41bab441739fea3d06d2';

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
  const day = new Date().getDate() + 1;
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

const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => (`${baseUrl}${popularGames}`);
export const upcomingGamesURL = () => (`${baseUrl}${upcomingGames}`);
export const newGamesURL = () => (`${baseUrl}${newGames}`);
