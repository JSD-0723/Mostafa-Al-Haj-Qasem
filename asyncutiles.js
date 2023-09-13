export const debounce = function (delay, cb) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
1