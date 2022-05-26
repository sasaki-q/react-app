import { AuthUser } from "features/login/type";

const prefix = 'prefix_';

const setItem = <T>(name: string, value: T) => 
  window.localStorage.setItem(prefix + name, JSON.stringify(value));

const getItem = <T>(name: string): T => 
  JSON.parse(window.localStorage.getItem(prefix + name) as string)

const storage = {
  setToken: (token: string) => setItem("token", token),
  getToken: () => getItem<string>("token"),

  setUser: (user: AuthUser) => setItem("user", user),
  getUser: () => getItem<AuthUser>("user"),
  
  clearStorage: () => {
    window.localStorage.removeItem(`${prefix}token`);
    window.localStorage.removeItem(`${prefix}user`);
  },
};

export default storage;