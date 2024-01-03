let SELECTED_PARAMETERS_ENTRY = "selected-parameters";
let PASSWORD_TYPE_ENTRY = "password-type";

class PasswordUtils {
  constructor(passwordType) {
    this._passwordType = passwordType;
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

    switch (passwordType) {
      case `Funny`:
        return this.generateFunnyPassword();

      case `Weak`:
        return this.generateWeakPassword();

      case `Normal`:
        return this.generateNormalPassword();

      case `Strong`:
        return this.generateStrongPassword();

      case `V.Strong`:
        return this.generateSuperStrongPassword();
    }
  }

  generateWeakPassword() {
    let pwd_value = this.weakPasswords[Math.floor(Math.random() * 100)];
    return pwd_value;
  }

  generateNormalPassword() {
    let pwd_value = `Normal Password`;
    return pwd_value;
  }

  generateStrongPassword() {
    let pwd_value = `Strong Password`;
    return pwd_value;
  }

  generateSuperStrongPassword() {
    let pwd_value = `Super Strong Password`;
    return pwd_value;
  }

  generateFunnyPassword() {
    let pwd_value = `Funny Password`;
    return pwd_value;
  }
}

let copy_btn = document.querySelector(
  `button.btn.btn-outline-success.border-secondary`
);

let pwd_box = document.getElementsByName(`pwd-box`)[0];

copy_btn.addEventListener(`click`, () => {
  navigator.clipboard.writeText(pwd_box.value);
});

function getSelectedPasswordType() {
  return document
    .querySelector(`.category.parameters`)
    .querySelector(`input[type = "radio"]:checked`).value;
}

let generateBtn = document.querySelector(`.btn.btn-info`);

generateBtn.addEventListener(`click`, () => {
  let passwordUtils = new PasswordUtils(getSelectedPasswordType());

  let password = passwordUtils.generatePassword();
  pwd_box.value = password;
});