const getActiveCategoryById = (arr, id) => {
  let activeCategory = null;

  const find = (arr) =>
    arr.forEach((item) => {
      if (item.id === id) activeCategory = item;
      else if (item.nestedItems.length > 0) find(item.nestedItems);
    });

  find(arr);
  return activeCategory;
};

export default getActiveCategoryById;
