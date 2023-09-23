export const currentTimeMessage = () => {
  let message = '';
  const hour = new Date().getHours();

  if (hour <= 9) {
    message = '上午好!';
  } else if (hour >= 9 && hour <= 12) {
    message = '中午好!';
  } else if (hour >= 13 && hour <= 24) {
    message = '下午好';
  }

  return message;
};
