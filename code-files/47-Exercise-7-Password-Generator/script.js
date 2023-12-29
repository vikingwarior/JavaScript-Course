let SELECTED_PARAMETERS_ENTRY = "selected-parameters";
let PASSWORD_TYPE_ENTRY = "password-type";

let passwordTypeDiv = document.querySelector(`.category`);
let passwordTypes = [
  `<label class="form-check-label text-danger-emphasis">Funny</label>`,
  `<label class="form-check-label text-danger">Weak</label>`,
  `<label class="form-check-label text-warning">Normal</label>`,
  `<label class="form-check-label">Strong</label>`,
  `<label class="form-check-label text-success">FBI Strong</label>`,
];

class PasswordUtils {
  constructor(passwordType, selectedParams) {
    this._passwordType = passwordType;
    this._selectedParams = selectedParams;
  }

  static generatePassword(passwordType, selectedParams) {
    switch (passwordType) {
      case 0:
        return generateFunnyPassword(selectedParams);

      case 1:
        return generateWeakPassword(selectedParams);

      case 2:
        return generateNormalPassword(selectedParams);

      case 3:
        return generateStrongPassword(selectedParams);

      case 4:
        return generateSuperStrongPassword(selectedParams);

      default:
        break;
    }
  }

  generateWeakPassword(params) {}

  generateNormalPassword(params) {}

  generateStrongPassword(params) {}

  generateSuperStrongPassword(params) {}

  generateFunnyPassword(params) {}
}

let characterCheckBoxes = document
  .querySelector(`.checkbox-group`)
  .querySelectorAll(`.form-check-input`);
let passwordCategory = document.querySelector(`.category`);

let checkedParameters = [];

for (let checkbox of characterCheckBoxes) {
  addEventListenerToCheckbox(checkbox);
}

function addEventListenerToCheckbox(checkboxRef) {
  checkboxRef.addEventListener(`change`, () => {
    if (checkboxRef.checked) checkedParameters.push(checkboxRef.id);
    else checkedParameters.splice(checkedParameters.indexOf(checkboxRef.id), 1);
    updateParams();
    updatePasswordType(checkedParameters.length);
  });
}

function updatePasswordType(difficultyLevel) {
  let passwordTypeLabel = passwordTypeDiv.querySelector(`.form-check-label`);
  console.log(passwordTypeLabel);
  passwordTypeLabel.remove();
  passwordTypeDiv.innerHTML += passwordTypes[difficultyLevel];
}

let paramsObject = {};

function updateParams() {
  Object.assign(paramsObject, { "selected-parameters": checkedParameters });
  console.log(paramsObject);
}

let generateBtn = document.querySelector(`.btn.btn-outline-info`);

generateBtn.addEventListener(`click`, () => {});
