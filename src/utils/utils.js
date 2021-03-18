import dayjs from 'dayjs';
import {genresArray} from '../components/catalog-genres/catalog-genres';

export const formatTotalDuration = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  m = m < 10 ? `0` + m : m;
  return `${h}h ${m}m`;
};

export const generateRating = (rating) => {

  if (rating >= 0 && rating < 3) {
    return `Bad.`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal.`;
  } else if (rating >= 5 && rating < 8) {
    return `Good.`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good.`;
  } else {
    return `Awesome.`;
  }
};

export const formatDate = (date, format) => dayjs(date).format(format);
const genresToObject = (acc, {title, type}) => ({
  ...acc,
  ...{[type]: title}
});

export const genresItem = genresArray.reduce(genresToObject, {});
