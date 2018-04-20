import axios from "axios";

class Http {
  constructor() {
    this.http = (...args) =>
      axios
        .create()
        .request(...args)
        .then(res => [res, null])
        .catch(err => [null, err]);
  }

  async GetArticle() {
    return await this.http({
      url: "/api/hoge",
      method: "GET"
    });
  }
}

export default new Http();
