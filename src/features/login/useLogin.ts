import { useErrorHandler } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "rtk/hooks";

import { http } from "utils/http";
import { LoginDto, AuthResponse } from "features/login/type"
import { useAuth } from "lib/auth";
import { show } from "rtk/slices/toast";

export const useLogin = () => {
  const { login } = useAuth()
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const errorHandler = useErrorHandler();

  const loginFn = async (dto: LoginDto): Promise<void> => {
    try{
      const res: AuthResponse = await http.post(
        'auth/login', 
        dto,
      );
      await login(res)
      dispatch(show({level: "success", message: "success"}))
      navigator("/todo");
    } catch(err) {
      dispatch(show({level: "error", message: "error"}))
      throw errorHandler(err)
    }
  }

  return { loginFn }
}