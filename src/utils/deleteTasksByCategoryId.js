export default function deleteTasksByCategoryId(arr, id) {
  const newArr = arr.map((item) => {
    if (item.id !== id)
      return {
        ...item,
        nestedItems: [
          ...deleteTasksByCategoryId(item.nestedItems, id).filter(
            (item) => !!item
          ),
        ],
      };
  });
  return newArr.filter((item) => !!item);
}
