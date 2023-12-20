let TO_DO_LIST_ENTRY_NAME = `toDoTasks`
let COMPLETED_LIST_ENTRY_NAME = `doneTasks`
let LAST_OPENED_LIST_ENTRY_NAME = `lastOpenedList`

let WELCOME_MESSAGE = `Start writing your tasks<br>by clicking this button👇<br><br>`;
let TASKS_COMPLETED_MESSAGE_FOR_TO_DO = `All the tasks have been completed!<br>To add new tasks click this button👇<br><br>`;
let EMPTY_COMPLETED_TASKS_LIST_MESSAGE = `Nothing Here!`;

let toDoTasks = [];
let doneTasks = [];
let lastOpenedList;

const initializeTablesInLocalStorage = () => {
  toDoTasks = getValueForList(TO_DO_LIST_ENTRY_NAME);
  doneTasks = getValueForList(COMPLETED_LIST_ENTRY_NAME);
  lastOpenedList = getLastOpenedList();
};

const getValueForList = (listName) => {
  return localStorage.getItem(listName) === null ? [] : JSON.parse(localStorage.getItem(listName));
};

const getLastOpenedList = () => {
  return (localStorage.getItem(LAST_OPENED_LIST_ENTRY_NAME) === null) ? TO_DO_LIST_ENTRY_NAME : localStorage.getItem(LAST_OPENED_LIST_ENTRY_NAME);
};

const updateTableEntries = (entryType = undefined) => {
  if (entryType === undefined || entryType === TO_DO_LIST_ENTRY_NAME) localStorage.setItem(TO_DO_LIST_ENTRY_NAME, JSON.stringify(toDoTasks));
  if (entryType === undefined || entryType === COMPLETED_LIST_ENTRY_NAME) localStorage.setItem(COMPLETED_LIST_ENTRY_NAME, JSON.stringify(doneTasks));
  if (entryType === undefined || entryType === LAST_OPENED_LIST_ENTRY_NAME) localStorage.setItem(LAST_OPENED_LIST_ENTRY_NAME, lastOpenedList);
};

const renderUI = () => {
  let toDoTab = document.getElementsByClassName(`nav-link`)[0];
  let completedTab = document.getElementsByClassName(`nav-link`)[1];

  toDoTab.addEventListener(`click`, () => {
    completedTab.classList.remove(`active`);

    renderTabContent(toDoTasks, false);

    lastOpenedList = TO_DO_LIST_ENTRY_NAME;
    updateTableEntries(LAST_OPENED_LIST_ENTRY_NAME);
  });
  completedTab.addEventListener(`click`, () => {

    toDoTab.classList.remove(`active`);

    renderTabContent(doneTasks, true);

    lastOpenedList = COMPLETED_LIST_ENTRY_NAME;
    updateTableEntries(LAST_OPENED_LIST_ENTRY_NAME);
  });
};

const renderTabContent = (list, taskTypeFlag) => {
  let currentTab = !taskTypeFlag ? document.getElementsByClassName(`nav-link`)[0] : document.getElementsByClassName(`nav-link`)[1];
  currentTab.classList.add(`active`);

  let listContainer = document.getElementsByClassName(`listContainer`)[0];

  listContainer.innerHTML = ``;

  let displayMessage = taskTypeFlag ? EMPTY_COMPLETED_TASKS_LIST_MESSAGE : WELCOME_MESSAGE;

  if (list.length === 0) {
    loadMessageForEmptyList(taskTypeFlag, displayMessage);
    return;
  }

  let tasksTable = createTasksTable(list, taskTypeFlag);
  listContainer.appendChild(tasksTable);
  addEventListenersToCheckBoxes(listContainer);
};

const loadMessageForEmptyList = (taskType, message) => {
  let listContainer = document.getElementsByClassName(`listContainer`)[0];
  if (!taskType) {
    // let message = `Start Writing your Tasks<br>by clicking this button👇<br><br>`;

    let addTask = document.createElement(`button`);
    addTask.classList = `btn btn-outline-warning`;
    addTask.innerText = `+ Add Task`;

    listContainer.innerHTML = message;
    listContainer.appendChild(addTask);

    addTask.addEventListener(`click`, () => {
      let taskTable = createTasksTable(toDoTasks, false);
      listContainer.innerHTML = ``;
      listContainer.appendChild(taskTable);
    });
  } else {
    listContainer.innerHTML = message;
  }
};

/**
 * This method takes the list of elements and returns a list that can be directly added inside DOM
 * @param {object} tasks List of the tasks
 * @param {boolean} completed this flag defines if the list is of toDo Task or completed tasks
 * @returns An Unorderded HTML list of tasks
 */
const createTasksTable = (tasks, completed) => {
  let listContainer = document.createElement(`ul`);
  listContainer.classList = `list-group`;

  let listItem;

  if (tasks.length === 0 && !completed) {
    listItem = createListItem();
    listItem.id = `last`;
    listContainer.appendChild(listItem);
  } else {
    let listIndexCount = 0;
    for (let taskName of tasks) {
      let lastEntryFlag = listIndexCount++ === tasks.length - 1;
      listItem = createListItem(taskName, completed, lastEntryFlag);
      listContainer.appendChild(listItem);
    }
  }

  return listContainer;
};

const createListItem = (
  taskName = null,
  completed = null,
  addButton = false,
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    let taskCheckBox = createCheckbox();

    listItemContainer.appendChild(taskCheckBox);

    let taskNameLabel = createTasklabel(taskName, completed);
    listItemContainer.appendChild(taskNameLabel);

    listItem.appendChild(listItemContainer);

    if (addButton && !completed) {
      createNewTaskBtn(listItem);
    }

    if (completed) {
      taskCheckBox.setAttribute(`checked`, ``);

      let deleteBtn = createBtn(`🗑️`, `danger`);
      deleteBtn.addEventListener(`click`, () => {
        listItem.remove();
        let taskIndex = doneTasks.indexOf(taskName);
        doneTasks.splice(taskIndex, 1);
        updateTableEntries(COMPLETED_LIST_ENTRY_NAME);

        if (doneTasks.length === 0) loadMessageForEmptyList(true, EMPTY_COMPLETED_TASKS_LIST_MESSAGE);
      });

      listItem.appendChild(deleteBtn);
    }
  } else {
    insertNewTaskTextbox(listItem);
  }

  return listItem;
};

const insertNewTaskTextbox = (containerRef) => {
  
  let newTaskTextBox = buildTextBoxForNewTask()
  containerRef.appendChild(newTaskTextBox);

  newTaskTextBox.addEventListener(`keydown`, e => e.code == `Enter` && addNewToDoTask());

  let addTaskBtn = createBtn(`✅`, `success`);
  addTaskBtn.addEventListener(`click`, addNewToDoTask);


  containerRef.appendChild(addTaskBtn);
};

const buildTextBoxForNewTask = () => {
  let textBox = document.createElement(`input`);
  textBox.type = `text`;
  textBox.name = `newTaskEntry`
  textBox.placeholder = `Add your Task`
  textBox.classList = `form-control border-0`;

  return textBox;
};

const addNewToDoTask = () => {
  let newTaskEntry = document.getElementsByName(`newTaskEntry`)[0];
  if (newTaskEntry.value == ``) {
    newTaskEntry.classList.remove(`border-0`)
    newTaskEntry.classList.add(`border-danger`);
    newTaskEntry.classList.add(`list-group-item`);
    newTaskEntry.classList.add(`list-group-item-danger`);
    newTaskEntry.placeholder = `Task Entry cannot be Empty`
  } else {
    addDynamicTableEntry(newTaskEntry.value)
  }
};

const addDynamicTableEntry = (newTaskLabel = null) => {
  let lastListItem = document.getElementById(`last`);
  lastListItem.removeAttribute(`id`);

  let addBtn = lastListItem.querySelector(`button`);
  lastListItem.removeChild(addBtn);

  let dynamicListItem =
    newTaskLabel == null
      ? createListItem()
      : createListItem(newTaskLabel, false, true);
  dynamicListItem.id = `last`;

  lastListItem.insertAdjacentElement(`afterend`, dynamicListItem);

  if (dynamicListItem !== null) {
    addCheckBoxEventListener(dynamicListItem);
    toDoTasks.push(newTaskLabel);
    updateTableEntries(TO_DO_LIST_ENTRY_NAME);
  }

  if (lastListItem.querySelector('input[type="text"]') !== null)
    lastListItem.remove();
};

const createCheckbox = () => {
  let checkBox = document.createElement(`input`);
  checkBox.type = `checkbox`;
  checkBox.classList = `form-check-input me-1`;

  return checkBox;
};

const createTasklabel = (labelName, completed) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = completed === true ? `<s>${labelName}</s>` : labelName;

  return label;
};

const createNewTaskBtn = (liReference) => {
  liReference.id = `last`;
  let newTaskBtn = createBtn(`+`, `info`);
  newTaskBtn.classList += ` rounded-circle`;
  newTaskBtn.addEventListener(`click`, () => addDynamicTableEntry());
  liReference.appendChild(newTaskBtn);
};

const createBtn = (btnLabel, colorType) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-${colorType} border border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

const addEventListenersToCheckBoxes = (container) => {
  let ulElems = container.querySelectorAll(`li.list-group-item`);
  for (let listItem of ulElems) {
    addCheckBoxEventListener(listItem);
  }
};

const addCheckBoxEventListener = (liReference) => {
  let checkbox = liReference.querySelector('input[type="checkbox"]');
  let taskName = liReference.querySelector(".form-check-label").innerText;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      addTaskToList(doneTasks, toDoTasks, taskName);
    } else {
      addTaskToList(toDoTasks, doneTasks, taskName);
    }

    if (liReference.id === `last` && checkbox.checked) {
      if (toDoTasks.length === 0) {
        loadMessageForEmptyList(false, TASKS_COMPLETED_MESSAGE_FOR_TO_DO);
      } else {
        createNewTaskBtn(liReference.previousElementSibling);
      }
    } else if (!checkbox.checked && doneTasks.length === 0) {
      loadMessageForEmptyList(true, EMPTY_COMPLETED_TASKS_LIST_MESSAGE);
    }
    liReference.remove();
  });
};

const addTaskToList = (listToAddTaskTo, listToRemoveTaskFrom, taskName) => {
  const index = listToRemoveTaskFrom.indexOf(taskName);
  listToRemoveTaskFrom.splice(index, 1);

  listToAddTaskTo.push(taskName);
  updateTableEntries();
};


// Start
initializeTablesInLocalStorage();
renderUI();

if (lastOpenedList === TO_DO_LIST_ENTRY_NAME) {
  renderTabContent(toDoTasks, false)
} else {
  renderTabContent(doneTasks, true);
}