export default {
  get: (storageKey) => {
    return JSON.parse(localStorage.getItem(storageKey));
  },
  save: (storageKey, data) => {
    let jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
  },
  getSessionStorage: () => {
    var session = '';
    // localstorageに存在しない場合は空文字を返却。
    if (sessionStorage.getItem("sessionLogin") != null) {
      console.log(sessionStorage.getItem("sessionLogin"));
      console.log(typeof sessionStorage.getItem("sessionLogin"))
      session = JSON.parse(sessionStorage.getItem("sessionLogin"));
    }

    return session;
  }
}
