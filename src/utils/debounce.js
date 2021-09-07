const debounce = (callback, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};
export default debounce;
// --------------------
// export default function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     }, wait);
//     if (immediate && !timeout) func.apply(context, args);
//   };
// }
