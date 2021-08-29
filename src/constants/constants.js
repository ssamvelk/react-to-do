const taskList = [
  {
    id: 0,
    title: 'To-Do item # 0',
    isDone: true,
    categoryId: 0,
  },
  {
    id: 1,
    title: 'To-Do item # 1',
    isDone: false,
    categoryId: 0,
  },
  {
    id: 2,
    title: 'To-Do item # 2',
    isDone: true,
    categoryId: 0,
  },
  {
    id: 3,
    title: 'To-Do item # 3',
    isDone: false,
    categoryId: 0,
  },
  {
    id: 4,
    title: 'To-Do item # 4',
    isDone: false,
    categoryId: 0,
  },
  {
    id: 5,
    title: 'To-Do item # 5',
    isDone: true,
    categoryId: 1,
  },
  {
    id: 6,
    title: 'To-Do item # 6',
    isDone: false,
    categoryId: 1,
  },
  {
    id: 7,
    title: 'To-Do item # 7',
    isDone: true,
    categoryId: 1,
  },
  {
    id: 8,
    title: 'To-Do item # 8',
    isDone: false,
    categoryId: 1,
  },
  {
    id: 9,
    title: 'To-Do item # 9',
    isDone: false,
    categoryId: 1,
  },
];

const categoryList = [
  {
    id: 0,
    title: 'Category 0',
    isNested: false,
    isEditMode: false,
    nestedItems: [],
    isActive: true,
  },
  {
    id: 1,
    title: 'Category 1',
    isNested: false,
    isEditMode: false,
    nestedItems: [],
  },
  {
    id: 2,
    title: 'Category 2',
    isNested: true,
    isEditMode: false,
    nestedItems: [
      {
        id: 3,
        title: 'Category 2 2',
        isNested: false,
        isEditMode: false,
        nestedItems: [],
      },
      {
        id: 4,
        title: 'Category 2 1',
        isNested: false,
        isEditMode: false,
        nestedItems: [],
      },
      {
        id: 5,
        title: 'Category 2 2',
        isNested: true,
        isEditMode: false,
        nestedItems: [
          {
            id: 6,
            title: 'Category 2 2 0',
            isNested: true,
            isEditMode: false,
            nestedItems: [
              {
                id: 7,
                title: 'Category 2 2 0 1',
                isNested: false,
                isEditMode: false,
                nestedItems: [],
              },
              {
                id: 8,
                title: 'Category 2 2 0 2',
                isNested: false,
                isEditMode: false,
                nestedItems: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Category 9',
    isNested: false,
    isEditMode: false,
    nestedItems: [],
  },
  {
    id: 10,
    title: 'Category 10',
    isNested: true,
    isEditMode: false,
    nestedItems: [
      {
        id: 11,
        title: 'Category 10 0',
        isNested: false,
        isEditMode: false,
        nestedItems: [],
      },
      {
        id: 12,
        title: 'Category 10 1',
        isNested: false,
        isEditMode: false,
        nestedItems: [],
      },
    ],
  },
];

export { taskList, categoryList };
