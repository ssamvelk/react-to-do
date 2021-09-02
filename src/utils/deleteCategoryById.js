export default function deleteCategoryById(arr, id) {
  const newArr = arr.map((item) => {
    if (item.id !== id)
      return {
        ...item,
        nestedItems: [
          ...deleteCategoryById(item.nestedItems, id).filter((item) => !!item),
        ],
      };
  });
  return newArr.filter((item) => !!item);
}
