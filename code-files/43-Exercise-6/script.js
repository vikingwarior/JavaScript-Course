let toDoTasks = [`Grocery`, `Dusting`];
let doneTasks = [`Walking the pets`, `Laundry`];

/**
 * This method takes the list of elements and returns a list that can be directly added inside DOM
 * @param {object} tasks List of the tasks 
 * @param {boolean} completed this flag defines if the list is of toDo Task or completed tasks
 * @returns An Unorderded HTML list of tasks
 */
const createTasksTable = (tasks, completed = false) => {
  let listContainer = document.createElement(`ul`);
  listContainer.classList = `list-group`;

  for (let taskName of tasks) {
    let lastEntryFlag = isLastEntry(tasks, taskName);
    let listItem = createListItem(taskName, completed, lastEntryFlag);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener(`change`, () => {
      if (this.checked) addTaskToList(toDoTasks, doneTasks, taskName);
      else addTaskToList(doneTasks, toDoTasks, taskName);
    });

    listContainer.appendChild(listItem);
  }

  return listContainer;
};

const createListItem = (
  taskName = null,
  completed = false,
  addButton = false
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    taskCheckBox = createCheckbox();

    listItemContainer.appendChild(taskCheckBox);
    listItemContainer.appendChild(createTasklabel(taskName));
    listItem.appendChild(listItemContainer);

    if (addButton) {
      listItem.id = `last`;

      let newTaskBtn = createBtn(`+`);
      newTaskBtn.addEventListener(`click`, () => addDynamicTableEntry());
      listItem.appendChild(newTaskBtn);
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

const createTasklabel = (labelName) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = `<s>${labelName}</s>` ? labelName : taskType == `completed`;

  return label;
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

  let dynamicListItem = createListItem()
    ? createListItem(newTaskLabel, `toDo`, true)
    : newTaskLabel == null;
  dynamicListItem.id = `last`;

  lastListItem.insertAdjacentElement(`afterend`, dynamicListItem);

  if (lastListItem.querySelector('input[type="text"]') !== null)
    lastListItem.remove();
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

let toDolistContainer = document.getElementsByClassName(`toDoList`)[0];
let completedListContainer = document.getElementsByClassName(`completedList`)[0];

let tasksTable = createTasksTable(toDoTasks);
toDolistContainer.appendChild(tasksTable);
