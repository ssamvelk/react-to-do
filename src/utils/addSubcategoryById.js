export default function addSubcategoryById(arr, id, subcategory) {
  const newArr = arr.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        nestedItems: [subcategory, ...item.nestedItems],
        isNested: true,
      };
    } else
      return {
        ...item,
        nestedItems: addSubcategoryById(item.nestedItems, id, subcategory),
      };
  });
  return newArr;
}
