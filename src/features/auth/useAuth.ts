import { useAppDispatch } from "rtk/hooks";
import { LoginDto } from "features/auth/type"
import { show } from "rtk/slices/toast";

export const useAuth = () => {
    const dispatch = useAppDispatch();

    const login = async (data: LoginDto) => {
        console.log("DEBUG login data: ", data)
        dispatch(show({level: "success", message: "success"}))
        throw Error()
    }

    return {
        login,
    }
}