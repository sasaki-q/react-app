import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "rtk/hooks";
import { LoginDto } from "features/auth/type"
import { show } from "rtk/slices/toast";

export const useAuth = () => {
    const navigator = useNavigate()
    const dispatch = useAppDispatch();

    const login = async (data: LoginDto) => {
        console.log("DEBUG login data: ", data)
        dispatch(show({level: "success", message: "success"}))
        navigator('/todo')
    }

    return {
        login,
    }
}