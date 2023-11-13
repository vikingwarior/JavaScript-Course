let toDoTasks = [];
let doneTasks = [];

const createTaskBtn = () => {
    let btn = document.createElement('button');
    btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
    btn.innerHTML = `+`;
    return btn;
};

const createListItem = (taskName, taskType, addButton=false) => {
    let checkBox = document.createElement(`input`);
    checkBox.type = `checkbox`;
    checkBox.classList = `form-check-input me-1`;

    let taskLabel = document.createElement(`label`);
    taskLabel.classList = `form-check-label`;
    taskLabel.innerHTML = `<s>${taskName}</s>` ? taskName : taskType == `completed`;

    let listItemContainer = document.createElement(`div`);
    listItemContainer.classList = `listItemContainer`;
    listItemContainer.appendChild(checkBox);
    listItemContainer.appendChild(taskLabel);

    let listItem = document.createElement(`li`);
    listItem.classList = `list-group-item d-flex align-items-center`;
    listItem.appendChild(listItemContainer);

    if (addButton) listItem.appendChild(createTaskBtn());

    return listItem;
};

const isLastEntry = (arr, value) => {

    if (arr.length > 0) return value === arr[arr.length - 1];
    return false;
}

const renderTasksTable = (tasks, listType, containerReference) => {
    let listContainer = document.createElement(`ul`);
    listContainer.classList = `list-group`;

    for (const taskName in tasks) {
        listContainer.appendChild(createListItem(taskName, listType, false));

        if (isLastEntry(tasks, taskName)) listContainer.appendChild(createListItem(taskName, listType, true));
    }

    containerReference.appendChild(listContainer);

};
