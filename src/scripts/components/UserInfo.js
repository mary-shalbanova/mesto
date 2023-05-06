export default class UserInfo {
  constructor({userNameSelector, userOccupationSelector, userAvatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userOccupationElement = document.querySelector(userOccupationSelector);
    this._userAvatarSelector = document.querySelector(userAvatarSelector);
  }

  getUserInfo () {
    const userInfo = {
      name: this._userNameElement.textContent,
      about: this._userOccupationElement.textContent,
      avatar: this._userAvatarSelector.src
    }
    return userInfo;
  }

  setUserInfo (userData) {
    this._userNameElement.textContent = userData.name;
    this._userOccupationElement.textContent = userData.about;
    this._userAvatarSelector.src = userData.avatar;
  }
}
