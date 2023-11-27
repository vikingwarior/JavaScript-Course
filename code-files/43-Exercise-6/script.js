let toDoTasks = [`Grocery`, `Dusting`];
let doneTasks = [`Walking the pets`, `Laundry`];

const createBtn = (btnLabel) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
};

const createCheckbox = () => {
  let checkBox = document.createElement(`input`);
  checkBox.type = `checkbox`;
  checkBox.classList = `form-check-input me-1`;

  return checkBox;
};

const createTasklabel = (labelName) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = `<s>${labelName}</s>` ? labelName : taskType == `completed`;

  return label;
};

const addDynamicTableEntry = (newTaskLabel = null) => {
  let lastListItem = document.getElementById(`last`);
  lastListItem.removeAttribute(`id`);

  let addBtn = lastListItem.querySelector(`button`);
  lastListItem.removeChild(addBtn);

  let dynamicListItem = createListItem()?createListItem(newTaskLabel,`toDo`,true): newTaskLabel == null;
  dynamicListItem.id = `last`;

  lastListItem.insertAdjacentElement(`afterend`, dynamicListItem);

if (lastListItem.querySelector('input[type="text"]') !== null) lastListItem.remove();
};

const addTaskToList = (listToAddTask, listToRemoveTaskFrom,taskName) => {

}; 

const createListItem = (
  taskName = null,
  taskType = null,
  addButton = false
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    taskCheckBox = createCheckbox();

    taskCheckBox.addEventListener(`change`, () => {
      if (this.checked)
        addTaskToList(doneTasks,toDoTasks, taskName);
      else 
        addTaskToList(toDoTasks, doneTasks, taskName);
    });

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
    addTaskBtn.addEventListener(`click`, () => addDynamicTableEntry(document.getElementsByName(`newTaskEntry`)[0].value));

    listItem.appendChild(addTaskBtn);
  }

  return listItem;
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

const createTasksTable = (tasks, listType) => {
  let listContainer = document.createElement(`ul`);
  listContainer.classList = `list-group`;

  for (let taskName of tasks) {
    if (isLastEntry(tasks, taskName))
      listContainer.appendChild(createListItem(taskName, listType, true));
    else listContainer.appendChild(createListItem(taskName, listType, false));
  }

  return listContainer;
};

let toDolistContainer = document.getElementsByClassName(`toDoList`)[0];
let completedListContainer =
  document.getElementsByClassName(`completedList`)[0];

toDolistContainer.appendChild(createTasksTable(toDoTasks, `toDo`));
// toDolistContainer.appendChild(createListItem());
