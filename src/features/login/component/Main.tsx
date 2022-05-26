import { SubmitHandler, useForm } from "react-hook-form"
import { Stack } from "@mui/material";
import { MyForm } from "features/atoms/Form";
import { MyButton } from "features/atoms/Button";
import { LoginDto } from "features/login/type";
import { useLogin } from "../useLogin";

export const MainLogin = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm<LoginDto>();

  const { loginFn } = useLogin()
  const onSubmit: SubmitHandler<LoginDto> = async (data) => await loginFn(data)

  return (
    <Stack spacing={4}>
      <MyForm
        id="email"
        required 
        label={"email"} 
        type={"email"} 
        minWidth={700}
        registration={
          register(
            "email", {
            required: 'email is required',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })
        }
        error={errors.email}
      />
      <MyForm
        id="password"
        required 
        label={"password"} 
        type={"password"} 
        minWidth={700}
        registration={
          register(
            "password", {
            required: 'password is required',
            minLength: {
              value: 8,
              message: "at least eight characters"
            }
          })
        }
        error={errors.password}
      />
      <MyButton 
        title={"login"}
        size={"large"}
        onclick={handleSubmit(onSubmit)}
      />
    </Stack>
  )
}
