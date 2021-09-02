export default function findCategoryTitleById(arr, id) {
  let newTitle = '';

  arr.forEach((item) => {
    if (item.id === id) {
      newTitle = item.title;
    } else if (item.id !== id) {
      findCategoryTitleById(item.nestedItems, id);
    }
  });

  return newTitle;
}
