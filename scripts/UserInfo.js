export default class UserInfo {
  constructor({userNameSelector, userOccupationSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userOccupationElement = document.querySelector(userOccupationSelector);
  }

  getUserInfo () {
    const userInfo = {
      name: this._userNameElement.textContent,
      occupation: this._userOccupationElement.textContent
    }
    return userInfo;
  }

  setUserInfo (userData) {
    this._userNameElement.textContent = userData.name;
    this._userOccupationElement.textContent = userData.occupation;
  }
}
