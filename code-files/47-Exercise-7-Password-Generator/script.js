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

  weakPasswords = [
    `12345`,
    `123456`,
    `123456789`,
    `test1`,
    `password`,
    `12345678`,
    `zinch`,
    `g_czechout`,
    `asdf`,
    `qwerty`,
    `1234567890`,
    `1234567`,
    `Aa123456`,
    `iloveyou`,
    `1234`,
    `abc123`,
    `111111`,
    `123123`,
    `dubsmash`,
    `test`,
    `princess`,
    `qwertyuiop`,
    `sunshine`,
    `BvtTest123`,
    `11111`,
    `ashley`,
    `00000`,
    `000000`,
    `password1`,
    `monkey`,
    `livetest`,
    `55555`,
    `soccer`,
    `charlie`,
    `asdfghjkl`,
    `654321`,
    `family`,
    `michael`,
    `123321`,
    `football`,
    `baseball`,
    `q1w2e3r4t5y6`,
    `nicole`,
    `jessica`,
    `purple`,
    `shadow`,
    `hannah`,
    `chocolate`,
    `michelle`,
    `daniel`,
    `maggie`,
    `qwerty123`,
    `hello`,
    `112233`,
    `jordan`,
    `tigger`,
    `666666`,
    `987654321`,
    `superman`,
    `12345678910`,
    `summer`,
    `1q2w3e4r5t`,
    `fitness`,
    `bailey`,
    `zxcvbnm`,
    `fuckyou`,
    `121212`,
    `buster`,
    `butterfly`,
    `dragon`,
    `jennifer`,
    `amanda`,
    `justin`,
    `cookie`,
    `basketball`,
    `shopping`,
    `pepper`,
    `joshua`,
    `hunter`,
    `ginger`,
    `matthew`,
    `abcd1234`,
    `taylor`,
    `samantha`,
    `whatever`,
    `andrew`,
    `1qaz2wsx3edc`,
    `thomas`,
    `jasmine`,
    `animoto`,
    `madison`,
    `0987654321`,
    `54321`,
    `flower`,
    `Password`,
    `maria`,
    `babygirl`,
    `lovely`,
    `sophie`,
    `Chegg123`,
  ];

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
    let pwd_value = this.weakPasswords[Math.floor(Math.random() * 100)];
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
    let pwd_value = `Super Strong Password`;
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
  let passwordUtils = new PasswordUtils(
    checkedParameters.length,
    checkedParameters
  );
  let password = passwordUtils.generatePassword();

  let pwd_box = document.getElementsByName(`pwd-box`)[0];
  pwd_box.value = password;
});
