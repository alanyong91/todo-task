import Cookies from "js-cookie";

class TaskCookie {
  private tokenName: string = process.env.REACT_APP_COOKIE_TOKEN_NAME || "tdcx_cookie";
  private userName: string = process.env.REACT_APP_COOKIE_USER_NAME || "tdcx_name";

  getToken(): string | undefined {
    return Cookies.get(this.tokenName)
  }

  storeToken(value: string): void {
    Cookies.set(this.tokenName, value)
  }

  removeToken(): void {
    Cookies.remove(this.tokenName)
  }

  getUserName(): string | undefined {
    return Cookies.get(this.userName)
  }

  storeUserName(value: string): void {
    Cookies.set(this.userName, value)
  }

  removeUserName(): void {
    Cookies.remove(this.userName)
  }
}

export default TaskCookie