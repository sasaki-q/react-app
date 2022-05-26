import { initReactQueryAuth } from 'react-query-auth';
import { AuthResponse, AuthUser } from 'features/login/type';
import storage from 'utils/storage';

  async function handleUserResponse(data: AuthResponse) {
    const { user, token } = data;
    storage.setUser(user);
    storage.setToken(token);
    return user;
  }
  
  const registerFn = async(res: AuthResponse) => await handleUserResponse(res);

  const loginFn = async(res: AuthResponse) => await handleUserResponse(res);

  const loadUser = async() => storage.getUser()
  
  const logoutFn = async() => storage.clearToken();

  const authConfig = {
    registerFn,
    loginFn,
    loadUser,
    logoutFn,
  };

  export const { AuthProvider, useAuth } = initReactQueryAuth<
    AuthUser | undefined,
    Error,
    AuthResponse,
    AuthResponse
  >(authConfig);