import http from "@/util/http-common";

async function login(user, success, fail) {
  // console.log(JSON.stringify(user));
  await http
    .post(`/user/login`, { userId: user.userId, userPassword: user.userPassword })
    .then(success)
    .catch(fail);
}
async function findById(userId, success, fail) {
  http.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  console.log(userId);
  await http.get(`/user/info/${userId}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  http.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await http
    .post(`/user/refresh`, { userId: user.userId, userPassword: user.userPassword })
    .then(success)
    .catch(fail);
}

async function logout(userId, success, fail) {
  await http.get(`/user/logout/${userId}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
