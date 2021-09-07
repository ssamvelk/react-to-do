const POPUP_MODE = {
  DELETE_MODE: 'deleteMode',
  EDIT_MODE: 'editMode',
  ADD_SUBTASK_MODE: 'addSubtaskMode',
};

const URL = {
  CATEGORIES: './__mock__/categories.json',
  TASKS: './__mock__/tasks.json',
};

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const FOCUSABLE_SELECTOR = [
  'button',
  'a[href]',
  'input',
  'select',
  'textarea',
  '[tabindex]',
  '[contenteditable]',
]
  .map((selector) => `${selector}:not(:disabled):not([disabled])`)
  .join(', ');

export { POPUP_MODE, URL, HEADERS, FOCUSABLE_SELECTOR };
