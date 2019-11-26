import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true
    });
  }

  signup(user) {
    const { teamName, email, password, playerName1, dniPlayer1, playerName2, dniPlayer2} = user;
    return this.auth
      .post("/auth/signup", {teamName, email, password, playerName1, dniPlayer1, playerName2, dniPlayer2})
      .then(({ data }) => data);
  }

  login(user) {
    const { teamName, email, password } = user;
    return this.auth
      .post("/auth/login", { teamName, email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then( (response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then( (response) => response.data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
