export default function getAllCategoriesIds(arr) {
  const ids = [];

  const sliceIds = (list) =>
    list.forEach((element) => {
      ids.push(element.id);
      if (element.nestedItems.length > 0) {
        sliceIds(element.nestedItems);
      }
    });

  sliceIds(arr);
  console.log('ids', ids);
  const uniq = new Set(ids);
  return [...uniq];
}
