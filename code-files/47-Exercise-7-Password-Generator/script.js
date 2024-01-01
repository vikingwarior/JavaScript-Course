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

  generatePassword() {
    let passwordType = this._passwordType;
    let selectedParams = this._selectedParams;
    
    switch (passwordType) {
      case 0:
        return this.generateFunnyPassword(selectedParams);

      case 1:
        return this.generateWeakPassword(selectedParams);

      case 2:
        return this.generateNormalPassword(selectedParams);

      case 3:
        return this.generateStrongPassword(selectedParams);

      case 4:
        return this.generateSuperStrongPassword(selectedParams);

      default:
        break;
    }
  }

  generateWeakPassword(params) {
    let pwd_value = `Weak Password`;
    return pwd_value;
  }

  generateNormalPassword(params) {
    let pwd_value = `Normal Password`;
    return pwd_value;
  }

  generateStrongPassword(params) {
    let pwd_value = `Strong Password`;
    return pwd_value;
  }

  generateSuperStrongPassword(params) {
    let pwd_value = `Super Strong Password` ;
    return pwd_value;
  }

  generateFunnyPassword(params) {
    let pwd_value = `Funny Password`;
    return pwd_value;
  }
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
  passwordTypeLabel.remove();
  passwordTypeDiv.innerHTML += passwordTypes[difficultyLevel];
}

let paramsObject = {};

function updateParams() {
  Object.assign(paramsObject, { "selected-parameters": checkedParameters });
}

let generateBtn = document.querySelector(`.btn.btn-outline-info`);

generateBtn.addEventListener(`click`, () => {
  let passwordUtils = new PasswordUtils(checkedParameters.length, checkedParameters);
  let password = passwordUtils.generatePassword();

  let pwd_box = document.getElementsByName(`pwd-box`)[0];
  pwd_box.value = password;
});
