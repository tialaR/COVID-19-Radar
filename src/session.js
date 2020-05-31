export default class Session {
  static instance = null;

  _statesList = [];
  _citiesList = [];

  static shared() {
    if (Session.instance === null) {
      Session.instance = new Session();
    }
    return this.instance;
  }

  setStatesList(statesList) {
    this._statesList.push(statesList);
  }

  getSatateList() {
    const sortList = this._statesList.sort((a, b) => {
      return a.state < b.state ? -1 : a.state > b.state ? 1 : 0;
    });

    return sortList;
  }

  setCitiesList(citiesList) {
    this._citiesList.push(citiesList);
  }

  getCitiesList(state) {
    for (let i = 0; i < this._citiesList.length; i++) {
      if (this._citiesList[i].state === state) {
        return this._citiesList[i];
      }
    }
  }
}
