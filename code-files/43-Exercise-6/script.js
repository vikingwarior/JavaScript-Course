let toDoTasks = [];
let doneTasks = [];
let welcomeMessage = `Start writing your tasks<br>by clicking this button👇<br><br>`;
let allTasksCompletedMessage = `All the tasks have been completed!<br>To add new tasks click this button👇<br><br>`;

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

  listContainer.innerHTML = ``;

  if (list.length === 0) {
    loadMessageForEmptyList(taskTypeFlag, welcomeMessage);
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
    for (let taskName of tasks) {
      let lastEntryFlag = isLastEntry(tasks, taskName);
      listItem = createListItem(taskName, completed, lastEntryFlag);
      listContainer.appendChild(listItem);
    }
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
    }
  } else {
    insertNewTaskTextbox(listItem);
  }

  return listItem;
};

const insertNewTaskTextbox = (containerRef) => {
  containerRef.innerHTML = `<input class="form-control form-control border border-info border-0" type="text" name="newTaskEntry"
    placeholder="Add your Task">`;

  let addTaskBtn = createBtn(`✅`);
  addTaskBtn.addEventListener(`click`, () =>
    addDynamicTableEntry(document.getElementsByName(`newTaskEntry`)[0].value)
  );

  containerRef.appendChild(addTaskBtn);
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
        loadMessageForEmptyList(false, allTasksCompletedMessage);
      } else{
      createNewTaskBtn(liReference.previousElementSibling);
      }
    }
    liReference.remove();
  });
};

const addTaskToList = (listToAddTaskTo, listToRemoveTaskFrom, taskName) => {
  const index = listToRemoveTaskFrom.indexOf(taskName);
  listToRemoveTaskFrom.splice(index, 1);

  listToAddTaskTo.push(taskName);
};


// Start
renderUI();
renderTabContent(toDoTasks, false);