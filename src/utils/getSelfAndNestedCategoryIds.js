const getSelfAndNestedCategoryIds = (category) => {
  const ids = [category.id];

  const sliceIds = (arr) =>
    arr.forEach((item) => {
      ids.push(item.id);
      if (item.nestedItems.length > 0) sliceIds(item.nestedItems);
    });

  sliceIds(category.nestedItems);

  return ids;
};

export default getSelfAndNestedCategoryIds;
