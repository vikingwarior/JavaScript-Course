let toDoTasks = [`Grocery`, `Dusting`, `Rationing`, `Bills`];
let doneTasks = [`Walking the pets`, `Laundry`];

const renderUI = () => {
  let toDoTab = document.getElementsByClassName(`nav-link`)[0];
  let completedTab = document.getElementsByClassName(`nav-link`)[1];

  toDoTab.addEventListener(`click`, () => {
    toDoTab.classList.add(`active`);
    completedTab.classList.remove(`active`);

    renderTabContent(toDoTasks, false);
  });
  completedTab.addEventListener(`click`, () => {
    completedTab.classList.add(`active`);
    toDoTab.classList.remove(`active`);

    renderTabContent(doneTasks, true);
  });
};

const renderTabContent = (list, taskTypeFlag) => {
  let listContainer = document.getElementsByClassName(`listContainer`)[0];

  if (list.length === 0) {
    loadEmptyMessageForList(taskTypeFlag);
  }

  let tasksTable = createTasksTable(list, taskTypeFlag);
  listContainer.appendChild(tasksTable);
  addEventListenersToCheckBoxes(listContainer);
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

  for (let taskName of tasks) {
    let lastEntryFlag = isLastEntry(tasks, taskName);
    let listItem = createListItem(taskName, completed, lastEntryFlag);
    listContainer.appendChild(listItem);
  }

  return listContainer;
};

const createListItem = (
  taskName = null,
  completed = null,
  addButton = false
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    taskCheckBox = createCheckbox();

    listItemContainer.appendChild(taskCheckBox);

    let taskNameLabel = createTasklabel(taskName, completed);
    listItemContainer.appendChild(taskNameLabel);

    listItem.appendChild(listItemContainer);

    if (addButton && !completed) {
      createNewTaskBtn(listItem);
    }

    if (completed) {
      taskCheckBox.setAttribute(`checked`, ``);
    }
  } else {
    listItem.innerHTML = `<input class="form-control form-control border border-info border-0" type="text" name="newTaskEntry"
    placeholder="Add your Task">`;

    let addTaskBtn = createBtn(`✅`);
    addTaskBtn.addEventListener(`click`, () =>
      addDynamicTableEntry(document.getElementsByName(`newTaskEntry`)[0].value)
    );

    listItem.appendChild(addTaskBtn);
  }

  return listItem;
};

const createCheckbox = () => {
  let checkBox = document.createElement(`input`);
  checkBox.type = `checkbox`;
  checkBox.classList = `form-check-input me-1`;

  return checkBox;
};

const addTaskToList = (listToAddTaskTo, listToRemoveTaskFrom, taskName) => {
  const index = listToRemoveTaskFrom.indexOf(taskName);
  listToRemoveTaskFrom.splice(index, 1);
  // listToRemoveTaskFrom = listToRemoveTaskFrom.filter(e => e !== taskName);

  listToAddTaskTo.push(taskName);
  // toDolistContainer.innerHTML = ``;
  // toDolistContainer.appendChild(createTasksTable(toDoTasks));
  console.log(toDoTasks);
  console.log(doneTasks);
  console.log(taskName);
};

const createTasklabel = (labelName, completed) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = completed === true ? `<s>${labelName}</s>` : labelName;

  return label;
};

const createNewTaskBtn = (liReference) => {
  liReference.id = `last`;
  let newTaskBtn = createBtn(`+`);
  newTaskBtn.addEventListener(`click`, () => addDynamicTableEntry());
  liReference.appendChild(newTaskBtn);
};

const createBtn = (btnLabel) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
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
  }

  if (lastListItem.querySelector('input[type="text"]') !== null)
    lastListItem.remove();
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

const addEventListenersToCheckBoxes = (container) => {
  let ulElems = container.querySelectorAll(`li.list-group-item`);
  console.log(ulElems);
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

    if (liReference.id === `last`) {
      createNewTaskBtn(liReference.previousElementSibling);
    }
    liReference.remove();
  });
};

// Start
renderUI();