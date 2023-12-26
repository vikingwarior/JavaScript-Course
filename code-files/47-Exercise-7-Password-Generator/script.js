let SELECTED_PARAMETERS_ENTRY = "selected-parameters";
let PASSWORD_TYPE_ENTRY = "password-type";

let passwordTypeDiv = document.querySelector(`.category`);
let passwordTypes = [`<label class="form-check-label text-danger-emphasis">Funny</label>`,
                     `<label class="form-check-label text-danger">Weak</label>`,    
                     `<label class="form-check-label text-warning">Normal</label>`,    
                     `<label class="form-check-label">Strong</label>`,
                     `<label class="form-check-label text-success">FBI Strong</label>`];

class Password {
  constructor(params) {
    this._params = params;
    this.selectedParams = params.SELECTED_PARAMETERS_ENTRY;
    this.passwordType = params.PASSWORD_TYPE_ENTRY;
  }

  generatePassword() {
    switch (passwordType) {
      case "weak":
        return generateWeakPassword(this.selectedParams);

      case "normal":
        return generateNormalPassword(this.selectedParams);

      case "strong":
        return generateStrongPassword(this.selectedParams);

      case "fbi-strong":
        return generateSuperStrongPassword(this.selectedParams);

      case "lol":
        return generateFunnyPassword(this.selectedParams);

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

let characterCheckBoxes = document.querySelector(`.checkbox-group`).querySelectorAll(`.form-check-input`);
let passwordCategory = document.querySelector(`.category`);

/**
    {
     "selected-parameters" :  []
     password-type : weak
    }
 */

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
  Object.assign(paramsObject, { "selected-parameters" : checkedParameters });
  console.log(paramsObject);
}

let generateBtn = document.querySelector(`.btn.btn-outline-info`);

generateBtn.addEventListener(`click`, () => {
    
});
