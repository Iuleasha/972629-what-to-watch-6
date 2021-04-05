import dayjs from 'dayjs';
import {Rating} from '../constants/constant';

const duration = require(`dayjs/plugin/duration`);
dayjs.extend(duration);

export const formatTotalDuration = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  m = m < 10 ? `0` + m : m;
  return `${h}h ${m}m`;
};

export const generateRating = (rating) => {
  if (rating >= 0 && rating < 3) {
    return Rating.BAD;
  } else if (rating >= 3 && rating < 5) {
    return Rating.NORMAL;
  } else if (rating >= 5 && rating < 8) {
    return Rating.GOOD;
  } else if (rating >= 8 && rating < 10) {
    return Rating.VERY_GOOD;
  } else {
    return Rating.AWESOME;
  }
};

export const formatDate = (date, format) => dayjs(date).format(format);

export const formatFilmDuration = (time)=>dayjs.duration(time * 1000).format(`HH:mm:ss`);
