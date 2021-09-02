export default function editCategoryById(arr, id, value) {
  const newArr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, title: value };
    }
    if (item.id !== id)
      return {
        ...item,
        nestedItems: [
          ...editCategoryById(item.nestedItems, id, value).filter(
            (item) => !!item
          ),
        ],
      };
  });
  return newArr.filter((item) => !!item);
}
