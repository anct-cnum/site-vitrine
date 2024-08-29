import dayjs from 'dayjs';

export const textMatcher = wording => (_, element) => {
  return element?.textContent === wording;
};

export const dateDujour = () => {
  return dayjs(new Date()).format('YYYY-MM-DD');
};

export const dateFormatFR = date => {
  return dayjs(date).format('DD/MM/YYYY');
};
