import { AuthUser } from "features/login/type";

const storagePrefix = 'my_prefix_';

const storage = {
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setUser: (user: AuthUser) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`) as string) as AuthUser;
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
    window.localStorage.removeItem(`${storagePrefix}user`);
  },
};

export default storage;